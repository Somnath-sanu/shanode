"use client"

import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { formatDistanceToNow } from "date-fns"
import { ExternalLinkIcon } from "lucide-react"

import { useTRPC } from "@/trpc/client"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { BuildLogsPanel } from "@/features/deployments/components/build-logs-panel"
import { cn } from "@/lib/utils"

type ProjectDeploymentsTabProps = {
  projectId: string
  deployedUrl: string | null
  latestDeploymentStatus: string | null
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

export function ProjectDeploymentsTab({
  projectId,
  deployedUrl,
  latestDeploymentStatus,
}: ProjectDeploymentsTabProps) {
  const trpc = useTRPC()
  const [selectedDeploymentId, setSelectedDeploymentId] = useState<
    string | null
  >(null)

  const deploymentsQuery = useQuery({
    ...trpc.deployments.listByProject.queryOptions({ projectId }),
    refetchInterval: (query) => {
      const items = query.state.data
      const hasActive = items?.some(
        (deployment) =>
          deployment.status === "QUEUED" || deployment.status === "BUILDING"
      )
      return hasActive ? 3000 : false
    },
  })

  const deployments = useMemo(
    () => deploymentsQuery.data ?? [],
    [deploymentsQuery.data]
  )

  const activeDeploymentId = selectedDeploymentId ?? deployments[0]?.id ?? null

  const deploymentDetailQuery = useQuery({
    ...trpc.deployments.byId.queryOptions({
      deploymentId: activeDeploymentId ?? "",
    }),
    enabled: Boolean(activeDeploymentId),
    refetchInterval: (query) => {
      const status = query.state.data?.status
      return status === "QUEUED" || status === "BUILDING" ? 3000 : false
    },
  })

  const liveUrl = useMemo(() => {
    return (
      deployedUrl ||
      deployments.find((deployment) => deployment.status === "SUCCESS")
        ?.deployedUrl ||
      null
    )
  }, [deployments, deployedUrl])

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border p-4">
        <p className="text-xs tracking-wide text-muted-foreground uppercase">
          Production
        </p>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex max-w-full items-center gap-2 text-sm font-medium hover:underline"
          >
            <span className="truncate">{liveUrl}</span>
            <ExternalLinkIcon className="size-3.5 shrink-0" />
          </a>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            No live URL yet. Waiting for a successful deployment.
          </p>
        )}
        {latestDeploymentStatus ? (
          <div className="mt-3">
            <Badge variant={statusVariant(latestDeploymentStatus)}>
              Latest: {latestDeploymentStatus}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border">
          <div className="border-b border-border px-4 py-3 text-sm font-medium">
            Deployments
          </div>
          <div className="divide-y divide-border">
            {deploymentsQuery.isLoading ? (
              <div className="space-y-2 p-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : deployments.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">
                No deployments yet.
              </p>
            ) : (
              deployments.map((deployment) => (
                <button
                  key={deployment.id}
                  type="button"
                  onClick={() => setSelectedDeploymentId(deployment.id)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-muted/40",
                    activeDeploymentId === deployment.id && "bg-muted/50"
                  )}
                >
                  <div className="min-w-0">
                    <p className="truncate font-mono text-xs">
                      {deployment.id.slice(0, 10)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {deployment.branch} ·{" "}
                      {formatDistanceToNow(new Date(deployment.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <Badge variant={statusVariant(deployment.status)}>
                    {deployment.status}
                  </Badge>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="rounded-xl border border-border">
          <div className="border-b border-border px-4 py-3 text-sm font-medium">
            Build logs
          </div>
          <BuildLogsPanel
            builds={deploymentDetailQuery.data?.builds ?? []}
            isLoading={deploymentDetailQuery.isLoading}
          />
        </div>
      </div>
    </div>
  )
}
