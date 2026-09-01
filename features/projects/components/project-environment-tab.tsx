"use client"

import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { useTRPC } from "@/trpc/client"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { EnvVarsEditor } from "@/features/projects/components/env-vars-editor"
import type { EnvVarPair } from "@/features/projects/lib/parse-env"

type ProjectEnvironmentTabProps = {
  projectId: string
  onRedeployed?: () => void
}

export function ProjectEnvironmentTab({
  projectId,
  onRedeployed,
}: ProjectEnvironmentTabProps) {
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const [draftEnv, setDraftEnv] = useState<EnvVarPair[] | null>(null)
  const [draftProjectId, setDraftProjectId] = useState(projectId)
  const [redeployOpen, setRedeployOpen] = useState(false)

  const envQuery = useQuery(
    trpc.projects.listEnvVars.queryOptions({ projectId })
  )

  if (draftProjectId !== projectId) {
    setDraftProjectId(projectId)
    setDraftEnv(null)
  }

  const serverEnv =
    envQuery.data?.map((row) => ({ key: row.key, value: row.value })) ?? null
  const envRows = draftEnv ?? serverEnv ?? []
  const envReady = serverEnv !== null

  const saveEnv = useMutation(
    trpc.projects.upsertEnvVars.mutationOptions({
      onSuccess: async () => {
        toast.success("Environment variables saved")
        await queryClient.invalidateQueries({
          queryKey: trpc.projects.listEnvVars.queryKey({ projectId }),
        })
        setRedeployOpen(true)
      },
      onError: (error) => toast.error(error.message),
    })
  )

  const redeploy = useMutation(
    trpc.projects.redeploy.mutationOptions({
      onSuccess: async () => {
        toast.success("Redeploy queued")
        setRedeployOpen(false)
        await queryClient.invalidateQueries({
          queryKey: trpc.deployments.listByProject.queryKey({ projectId }),
        })
        await queryClient.invalidateQueries({
          queryKey: trpc.projects.byId.queryKey({ projectId }),
        })
        onRedeployed?.()
      },
      onError: (error) => toast.error(error.message),
    })
  )

  return (
    <>
      <div className="space-y-4 rounded-xl border border-border p-4">
        <div>
          <h2 className="text-sm font-medium">Environment Variables</h2>
          <p className="text-xs text-muted-foreground">
            Saved on the project and sent with the next SQS deploy message.
          </p>
        </div>

        {envQuery.isLoading && !envReady ? (
          <Skeleton className="h-24 w-full" />
        ) : (
          <EnvVarsEditor value={envRows} onChange={setDraftEnv} />
        )}

        <Button
          type="button"
          disabled={saveEnv.isPending || !envReady}
          onClick={() =>
            saveEnv.mutate({
              projectId,
              envVars: envRows,
            })
          }
        >          Save
        </Button>
      </div>

      <AlertDialog open={redeployOpen} onOpenChange={setRedeployOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Redeploy with new environment?</AlertDialogTitle>
            <AlertDialogDescription>
              Environment variables were updated. Redeploy to send a new SQS
              message so the worker picks up the latest values.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <AlertDialogAction
              disabled={redeploy.isPending}
              onClick={() => redeploy.mutate({ projectId })}
            >
              Redeploy
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
