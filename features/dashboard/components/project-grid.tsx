"use client"

import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { ExternalLinkIcon, FolderGit2Icon } from "lucide-react"

import { useTRPC } from "@/trpc/client"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function statusVariant(status: string | undefined) {
  switch (status) {
    case "SUCCESS":
      return "secondary" as const
    case "FAILED":
      return "destructive" as const
    case "BUILDING":
    case "QUEUED":
      return "outline" as const
    default:
      return "outline" as const
  }
}

export function ProjectGrid() {
  const trpc = useTRPC()
  const projectsQuery = useQuery(trpc.projects.list.queryOptions())

  if (projectsQuery.isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-36 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  const projects = projectsQuery.data ?? []

  if (projects.length === 0) {
    return (
      <Empty className="border border-dashed border-border py-16">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderGit2Icon />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>
            Click Add Project to import a GitHub repository and queue your first
            deployment.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const status = project.latestDeployment?.status
        return (
          <Link
            key={project.id}
            href={`/dashboard/${project.id}`}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card/40 p-4 transition hover:border-foreground/20 hover:bg-card/70"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="truncate font-heading text-base font-semibold tracking-tight">
                  {project.name}
                </h2>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {project.repoFullName}
                </p>
              </div>
              {status ? (
                <Badge variant={statusVariant(status)}>{status}</Badge>
              ) : null}
            </div>

            {project.deployedUrl ? (
              <span className="inline-flex items-center gap-1.5 truncate text-sm text-muted-foreground group-hover:text-foreground">
                <ExternalLinkIcon className="size-3.5 shrink-0" />
                <span className="truncate">{project.deployedUrl}</span>
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">
                Deployment pending
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
