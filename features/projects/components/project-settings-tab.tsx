"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { useTRPC } from "@/trpc/client"
import { Button } from "@/components/ui/button"
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
import { frameworkLabel } from "@/features/projects/lib/framework"

type ProjectSettingsTabProps = {
  projectId: string
  repoFullName: string
  defaultBranch: string
  repoUrl: string
  webhookId: string | null
  framework: "NEXTJS" | "REACT"
}

export function ProjectSettingsTab({
  projectId,
  repoFullName,
  defaultBranch,
  repoUrl,
  webhookId,
  framework,
}: ProjectSettingsTabProps) {
  const trpc = useTRPC()
  const router = useRouter()
  const queryClient = useQueryClient()
  const [deleteOpen, setDeleteOpen] = useState(false)

  const deleteProject = useMutation(
    trpc.projects.delete.mutationOptions({
      onSuccess: async () => {
        toast.success("Project deleted")
        await queryClient.invalidateQueries({
          queryKey: trpc.projects.list.queryKey(),
        })
        router.push("/dashboard")
      },
      onError: (error) => toast.error(error.message),
    })
  )

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-xl border border-border p-4">
        <h2 className="text-sm font-medium">Project settings</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted-foreground">Repository</dt>
            <dd className="truncate font-medium">{repoFullName}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted-foreground">Framework</dt>
            <dd className="font-medium">{frameworkLabel(framework)}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted-foreground">Default branch</dt>
            <dd className="font-medium">{defaultBranch}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted-foreground">Repo URL</dt>
            <dd className="truncate">
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {repoUrl}
              </a>
            </dd>
          </div>
          <div className="flex justify-between gap-4 py-2">
            <dt className="text-muted-foreground">Webhook</dt>
            <dd className="text-muted-foreground">
              {webhookId ?? "Not configured yet"}
            </dd>
          </div>
        </dl>
      </div>

      <div className="space-y-3 rounded-xl border border-destructive/30 p-4">
        <div>
          <h2 className="text-sm font-medium text-destructive">Danger zone</h2>
          <p className="text-xs text-muted-foreground">
            Permanently delete this project, all deployments, builds, and
            environment variables.
          </p>
        </div>
        <Button
          type="button"
          variant="destructive"
          onClick={() => setDeleteOpen(true)}
        >
          Delete Project
        </Button>
      </div>

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete project?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              <span className="font-medium text-foreground">{repoFullName}</span>{" "}
              and all related deployments and builds. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={deleteProject.isPending}
              onClick={() => deleteProject.mutate({ projectId })}
            >
              Delete Project
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
