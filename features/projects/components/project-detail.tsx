"use client"

import Link from "next/link"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeftIcon } from "lucide-react"

import { useTRPC } from "@/trpc/client"
import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ProjectDeploymentsTab } from "@/features/projects/components/project-deployments-tab"
import { ProjectEnvironmentTab } from "@/features/projects/components/project-environment-tab"
import { ProjectSettingsTab } from "@/features/projects/components/project-settings-tab"
import { cn } from "@/lib/utils"

type ProjectDetailProps = {
  projectId: string
}

type ProjectTab = "deployments" | "environment" | "settings"

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const trpc = useTRPC()
  const [tab, setTab] = useState<ProjectTab>("deployments")

  const projectQuery = useQuery(trpc.projects.byId.queryOptions({ projectId }))

  if (projectQuery.isLoading) {
    return (
      <div className="mx-auto w-full max-w-6xl space-y-4 px-4 py-8">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (!projectQuery.data) {
    return (
      <div className="mx-auto flex min-h-[50vh] w-full max-w-6xl flex-col items-center justify-center gap-3 px-4">
        <p className="text-sm text-muted-foreground">Project not found.</p>
        <Link href="/dashboard" className={cn(buttonVariants())}>
          Back to dashboard
        </Link>
      </div>
    )
  }

  const project = projectQuery.data

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }))}
            aria-label="Back to projects"
          >
            <ArrowLeftIcon className="size-4" />
          </Link>
          <div className="min-w-0">
            <h1 className="truncate font-heading text-lg font-semibold tracking-tight">
              {project.name}
            </h1>
            <p className="truncate text-xs text-muted-foreground">
              {project.repoFullName}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 md:grid-cols-[180px_1fr]">
        <aside className="flex gap-2 md:flex-col">
          {(
            [
              ["deployments", "Deployments"],
              ["environment", "Environment"],
              ["settings", "Settings"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setTab(value)}
              className={cn(
                "rounded-lg px-3 py-2 text-left text-sm transition",
                tab === value
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </aside>

        <section className="min-w-0 space-y-4">
          {tab === "deployments" ? (
            <ProjectDeploymentsTab
              projectId={projectId}
              deployedUrl={project.deployedUrl}
              latestDeploymentStatus={project.latestDeployment?.status ?? null}
            />
          ) : null}

          {tab === "environment" ? (
            <ProjectEnvironmentTab
              projectId={projectId}
              onRedeployed={() => setTab("deployments")}
            />
          ) : null}

          {tab === "settings" ? (
            <ProjectSettingsTab
              projectId={projectId}
              repoFullName={project.repoFullName}
              defaultBranch={project.defaultBranch}
              repoUrl={project.repoUrl}
              webhookId={project.webhookId}
            />
          ) : null}
        </section>
      </div>
    </div>
  )
}
