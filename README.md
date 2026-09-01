# Shanode

A Vercel-like mini PaaS: connect a GitHub repository, click deploy, and receive a live URL with streaming build logs.

```text
http://app-<deploymentId>.devs24.com
```

> **Demo note:** The AWS free-tier EC2 worker and related cloud resources may be stopped after a limited demo window. Architecture, code, and diagrams in this README remain valid for rebuilds and portfolio review.

---

## Table of contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Tech stack](#3-tech-stack)
4. [Deploy lifecycle](#4-deploy-lifecycle)
5. [Why Docker + Kubernetes](#5-why-docker--kubernetes)
6. [Worker pipeline](#6-worker-pipeline)
7. [Repository layout](#7-repository-layout)
8. [Getting started](#8-getting-started)
9. [Architecture decisions](#9-architecture-decisions)
10. [Future work](#10-future-work)

---

## 1. Overview

Shanode automates the path from source repository to a running application:

1. User signs in with **Clerk** (GitHub OAuth).
2. User imports a GitHub repository and configures environment variables.
3. The API creates **Project**, **Deployment**, and **Build** records in **Postgres (Neon)**.
4. A job is enqueued on **AWS SQS (FIFO)**.
5. An **EC2 worker** builds a **Docker** image, pushes it to **Amazon ECR**, and deploys to **Amazon EKS** with **Helm**.
6. The dashboard shows deployment status and build logs (polled from the database).
7. Traffic reaches the app via Ingress + wildcard DNS at `app-<deploymentId>.devs24.com`.

Shanode is intentionally scoped: an automated clone → build → push → deploy → expose pipeline with a product UI — not a full commercial PaaS clone.

---

## 2. Architecture

```text
                         ┌──────────────────────┐
                         │   Browser (user)     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │  Shanode Frontend    │
                         │  (Next.js + tRPC)    │
                         │  Clerk auth          │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
            ┌────────────┐  ┌────────────┐  ┌────────────┐
            │  Neon DB   │  │  AWS SQS   │  │   GitHub   │
            │ (Postgres) │  │  (FIFO)    │  │   (repos)  │
            └──────▲─────┘  └─────┬──────┘  └────────────┘
                   │              │
                   │              │ job message
                   │              ▼
                   │     ┌──────────────────────┐
                   │     │   EC2 Worker         │
                   │     │                      │
                   │     │  index.ts  ──spawn──► command.sh
                   │     │     │                    │
                   │     │     │ logs/status        ├── git clone
                   │     │     └───────────────────►├── docker build
                   │     │                          ├── docker push (ECR)
                   │     │                          ├── kubectl secret
                   │     │                          └── helm upgrade --install
                   │     └───────────┬──────────────┘
                   │                 │
                   │                 ▼
                   │          ┌────────────┐
                   │          │ Amazon ECR │
                   │          └─────┬──────┘
                   │                │
                   │                ▼
                   │          ┌────────────┐
                   │          │ Amazon EKS │
                   │          │ Deployment │
                   │          │ Service    │
                   │          │ Ingress    │
                   │          │ Secret     │
                   │          └─────┬──────┘
                   │                │
                   │                ▼
                   │     app-<deploymentId>.devs24.com
                   │
                   └──── worker writes status + logs + URL
                         frontend polls DB while deploy is active
```

**Mental model**

| Layer | Responsibility |
|------|----------------|
| Frontend | Product UI + API (tRPC) |
| SQS | Async job queue |
| EC2 worker | Build + deploy engine |
| ECR | Container image registry |
| EKS + Helm | Runtime for user apps |
| Postgres | Source of truth for status, logs, and URLs |

---

## 3. Tech stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js, React, Tailwind CSS, shadcn/ui |
| Auth | Clerk |
| API | tRPC |
| Database | Neon (Postgres) + Prisma |
| Queue | AWS SQS (FIFO) |
| Builder | EC2 + Docker |
| Registry | Amazon ECR |
| Orchestration | Amazon EKS + Helm |
| Routing | Ingress (nginx) + wildcard DNS (`*.devs24.com`) |
| Source control | GitHub (Octokit) |

---

## 4. Deploy lifecycle

```text
1) User clicks Deploy in the UI
2) API creates Deployment + Build (QUEUED)
3) API sends SQS message:
     { projectId, deploymentId, repoUrl, env[], type }
4) EC2 worker receives the message
5) Worker marks Deployment = BUILDING, Build = RUNNING
6) Worker runs command.sh:
     git clone → docker build → docker push (ECR)
     → kubectl secret → helm upgrade --install
7) stdout/stderr flush into Build.logs
8) On success: SUCCESS + deployedUrl on Deployment/Project
9) UI polls (~3s) and shows logs + live URL
10) Worker deletes the SQS message
```

**Status state machine**

```text
Deployment:  QUEUED ──► BUILDING ──► SUCCESS
                           │
                           └──► FAILED

Build:       QUEUED ──► RUNNING ──► SUCCESS
                          │
                          └──► FAILED
```

---

## 5. Why Docker + Kubernetes

**Single-machine Docker ports** work for one demo app, but break as a multi-tenant platform (port allocation, single point of failure, weak isolation, manual routing).

Shanode’s approach:

```text
User deploy
   │
   ▼
Build once → store image in ECR
   │
   ▼
Kubernetes (EKS) runs the app as Pods
   │
   ├── Deployment  (replicas, restart on crash)
   ├── Service     (stable internal networking)
   └── Ingress     (hostname → app)
         │
         ▼
   app-<id>.devs24.com
```

- **Docker** — reproducible packaging  
- **ECR** — versioned images per deployment  
- **Kubernetes** — scheduling, self-healing, multi-app isolation  
- **Ingress + wildcard DNS** — hostname routing without new host ports  
- **Helm** — one chart, many releases via values  

```text
Docker      = how we PACKAGE an app
Kubernetes  = how we RUN many packaged apps
Helm        = how we TEMPLATE/MANAGE Kubernetes objects as one release
```

---

## 6. Worker pipeline

The worker separates orchestration from infrastructure execution:

```text
index.ts   = APPLICATION ORCHESTRATION
             poll SQS · visibility heartbeat · DB status/logs · SUCCESS/FAILED

command.sh = INFRASTRUCTURE EXECUTION
             clone · build · push ECR · K8s secret · helm deploy · cleanup
```

**SQS visibility + heartbeat**

Long builds must not allow duplicate processing. The worker sets a high visibility timeout and periodically calls `ChangeMessageVisibility` while work continues, then `DeleteMessage` on terminal success or failure.

```text
0:00   receive + visibility = 1800s
10:00  heartbeat → extend
20:00  heartbeat → extend
...
done   DeleteMessage
```

Rule: heartbeat interval must stay below the visibility timeout.

---

## 7. Repository layout

```text
vercel_clone/
├── frontend/          # Next.js app (UI, tRPC API, Prisma, Clerk)
│   ├── app/           # App Router pages (landing, dashboard, sign-in)
│   ├── features/      # Domain modules (projects, deployments, github, landing)
│   ├── lib/           # DB, AWS SQS helpers, GitHub client
│   └── public/        # Favicons, logo, web manifest
└── backend/           # Worker / infra (EC2 build + deploy pipeline)
```

---

## 8. Getting started

### Frontend

```bash
cd frontend
npm install
cp .env.example .env   # if present; configure Clerk, Neon, AWS, GitHub
npm run db:generate
npm run dev
```

### Worker (EC2)

Configure AWS credentials, SQS queue URL, Neon database URL (same DB as frontend), ECR/EKS kubeconfig, then run the worker process so it can long-poll SQS and execute `command.sh`.

### Verify a deploy

1. Sign in and import a repo from the dashboard.  
2. Trigger a deploy.  
3. Confirm worker logs and UI build logs update.  
4. Open `http://app-<deploymentId>.devs24.com`.

---

## 9. Architecture decisions

| Decision | Rationale |
|----------|-----------|
| SQS instead of in-request builds | Docker builds take minutes; HTTP must return quickly |
| Shared Postgres for logs/status | Single source of truth; UI polls without Redis |
| Helm chart per user deploy | Repeatable releases; upgrade/rollback by values |
| Ingress hostnames | Multi-tenant routing without manual port mapping |
| Visibility heartbeat | Prevents duplicate deploys on long jobs |

---

## 10. Future work

1. HTTPS / TLS on Ingress  
2. HPA and cluster autoscaling  
3. SQS Dead Letter Queue with controlled retries  
4. Stronger multi-tenant resource quotas  
5. Optional Redis/SSE for sub-second log streaming  
6. Infrastructure as Code (Terraform) for reproducible AWS/EKS setup  

---

## License

Private / portfolio project. All rights reserved unless otherwise stated.
