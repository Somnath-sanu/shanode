"use client"

import { formatDistanceToNow } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type Build = {
  id: string
  status: string
  logs: string | null
  createdAt: Date | string
}

type BuildLogsPanelProps = {
  builds: Build[]
  isLoading?: boolean
}

function statusVariant(status: string) {
  switch (status) {
    case "SUCCESS":
      return "secondary" as const
    case "FAILED":
      return "destructive" as const
    default:
      return "outline" as const
  }
}

export function BuildLogsPanel({ builds, isLoading }: BuildLogsPanelProps) {
  if (isLoading) {
    return (
      <div className="space-y-2 p-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    )
  }

  if (builds.length === 0) {
    return (
      <p className="p-4 text-sm text-muted-foreground">
        Waiting for build logs from the worker...
      </p>
    )
  }

  return (
    <div className="max-h-96 space-y-3 overflow-auto p-4">
      {builds.map((build) => (
        <div
          key={build.id}
          className="rounded-lg border border-border bg-muted/20 p-3"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              {build.id.slice(0, 10)} ·{" "}
              {formatDistanceToNow(new Date(build.createdAt), {
                addSuffix: true,
              })}
            </p>
            <Badge variant={statusVariant(build.status)}>{build.status}</Badge>
          </div>
          <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {build.logs?.trim() || "No logs yet for this build."}
          </pre>
        </div>
      ))}
    </div>
  )
}
