"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { formatDistanceToNow } from "date-fns"
import { ArrowLeftIcon, LockIcon, RefreshCwIcon } from "lucide-react"
import { toast } from "sonner"
import { useUser } from "@clerk/nextjs"

import { useTRPC } from "@/trpc/client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { EnvVarsEditor } from "@/features/projects/components/env-vars-editor"
import type { EnvVarPair } from "@/features/projects/lib/parse-env"
import type { Framework } from "@/features/projects/lib/framework"
import { cn } from "@/lib/utils"

type ImportRepoDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type SelectedRepo = {
  id: number
  name: string
  fullName: string
  htmlUrl: string
  defaultBranch: string
  isPrivate: boolean
  ownerAvatarUrl: string
  updatedAt: string | null
  ownerLogin: string
}

export function ImportRepoDialog({ open, onOpenChange }: ImportRepoDialogProps) {
  const trpc = useTRPC()
  const router = useRouter()
  const queryClient = useQueryClient()
  const { user } = useUser()
  const [search, setSearch] = useState("")
  const [step, setStep] = useState<"repos" | "env">("repos")
  const [selectedRepo, setSelectedRepo] = useState<SelectedRepo | null>(null)
  const [envVars, setEnvVars] = useState<EnvVarPair[]>([])
  const [frameworkOverride, setFrameworkOverride] = useState<Framework | null>(
    null
  )

  const reposQuery = useQuery({
    ...trpc.github.listRepos.queryOptions({
      search: search.trim() || undefined,
    }),
    enabled: open,
  })

  const owner = selectedRepo?.ownerLogin
  const repoName = selectedRepo?.name

  const detectQuery = useQuery({
    ...trpc.github.detectFramework.queryOptions({
      owner: owner ?? "",
      repo: repoName ?? "",
      ref: selectedRepo?.defaultBranch,
    }),
    enabled: open && step === "env" && Boolean(owner && repoName),
  })

  const framework =
    frameworkOverride ?? detectQuery.data?.framework ?? "REACT"

  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onSuccess: async (data) => {
        toast.success("Project queued for deployment")
        await queryClient.invalidateQueries({
          queryKey: trpc.projects.list.queryKey(),
        })
        resetAndClose()
        router.push(`/dashboard/${data.projectId}`)
      },
      onError: (error) => {
        toast.error(error.message)
      },
    })
  )

  const accountLabel =
    user?.username ||
    user?.primaryEmailAddress?.emailAddress ||
    user?.fullName ||
    "GitHub"

  const repos = useMemo(() => reposQuery.data ?? [], [reposQuery.data])

  function resetState() {
    setSearch("")
    setStep("repos")
    setSelectedRepo(null)
    setEnvVars([])
    setFrameworkOverride(null)
  }

  function resetAndClose() {
    resetState()
    onOpenChange(false)
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      resetState()
    }
    onOpenChange(nextOpen)
  }

  function selectRepo(repo: (typeof repos)[number]) {
    setSelectedRepo({
      id: repo.id,
      name: repo.name,
      fullName: repo.fullName,
      htmlUrl: repo.htmlUrl,
      defaultBranch: repo.defaultBranch,
      isPrivate: repo.isPrivate,
      ownerAvatarUrl: repo.ownerAvatarUrl,
      updatedAt: repo.updatedAt,
      ownerLogin: repo.ownerLogin,
    })
    setFrameworkOverride(null)
    setEnvVars([])
    setStep("env")
  }

  async function handleDeploy() {
    if (!selectedRepo) {
      return
    }

    await createProject.mutateAsync({
      name: selectedRepo.name,
      repoUrl: selectedRepo.htmlUrl,
      repoFullName: selectedRepo.fullName,
      repoId: selectedRepo.id,
      defaultBranch: selectedRepo.defaultBranch,
      framework,
      envVars: envVars.filter((row) => row.key.trim().length > 0),
    })
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="gap-0 overflow-hidden p-0 sm:max-w-xl"
        showCloseButton
      >
        <DialogHeader className="border-b border-border px-4 py-4">
          <DialogTitle className="text-lg font-semibold tracking-tight">
            {step === "repos"
              ? "Import Git Repository"
              : "Configure Project"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {step === "repos"
              ? `Select a repository from ${accountLabel}`
              : `Framework and optional env vars for ${selectedRepo?.fullName ?? "this project"}`}
          </DialogDescription>
        </DialogHeader>

        {step === "repos" ? (
          <>
            <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
              <p className="truncate text-xs text-muted-foreground">
                {accountLabel}
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                disabled={reposQuery.isFetching}
                onClick={() => reposQuery.refetch()}
                aria-label="Refresh repositories"
              >
                <RefreshCwIcon
                  className={cn(
                    "size-3.5",
                    reposQuery.isFetching && "animate-spin"
                  )}
                />
              </Button>
            </div>

            <Command shouldFilter={false} className="rounded-none border-0">
              <CommandInput
                placeholder="Search"
                value={search}
                onValueChange={setSearch}
              />
              <CommandList className="max-h-80">
                {reposQuery.isLoading ? (
                  <div className="space-y-2 p-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Skeleton key={index} className="h-12 w-full" />
                    ))}
                  </div>
                ) : (
                  <>
                    <CommandEmpty>No repositories found.</CommandEmpty>
                    <CommandGroup>
                      {repos.map((repo) => (
                        <CommandItem
                          key={repo.id}
                          value={repo.fullName}
                          onSelect={() => selectRepo(repo)}
                          className="justify-between gap-3 py-3"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={repo.ownerAvatarUrl}
                              alt=""
                              className="size-7 shrink-0 rounded-full"
                            />
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="truncate font-medium">
                                  {repo.name}
                                </span>
                                {repo.isPrivate ? (
                                  <LockIcon className="size-3.5 shrink-0 text-muted-foreground" />
                                ) : null}
                              </div>
                              <p className="truncate text-xs text-muted-foreground">
                                {repo.updatedAt
                                  ? formatDistanceToNow(
                                      new Date(repo.updatedAt),
                                      { addSuffix: true }
                                    )
                                  : repo.fullName}
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            size="sm"
                            className="shrink-0 bg-white text-black hover:bg-white/90"
                            onClick={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              selectRepo(repo)
                            }}
                          >
                            Import
                          </Button>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}
              </CommandList>
            </Command>
          </>
        ) : (
          <div className="max-h-[70vh] space-y-4 overflow-y-auto p-4">
            {selectedRepo ? (
              <div className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedRepo.ownerAvatarUrl}
                  alt=""
                  className="size-7 shrink-0 rounded-full"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {selectedRepo.fullName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Branch: {selectedRepo.defaultBranch}
                  </p>
                </div>
              </div>
            ) : null}

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label className="text-sm font-medium">Framework</label>
                {detectQuery.isFetching ? (
                  <span className="text-xs text-muted-foreground">
                    Detecting…
                  </span>
                ) : detectQuery.data?.detected ? (
                  <span className="text-xs text-muted-foreground">
                    Auto-detected · change if wrong
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Select manually
                  </span>
                )}
              </div>
              <ToggleGroup
                value={[framework]}
                onValueChange={(values) => {
                  const next = values[0] as Framework | undefined
                  if (!next) {
                    return
                  }
                  setFrameworkOverride(next)
                }}
                variant="outline"
                className="w-full"
              >
                <ToggleGroupItem value="NEXTJS" className="flex-1">
                  Next.js
                </ToggleGroupItem>
                <ToggleGroupItem value="REACT" className="flex-1">
                  React
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <EnvVarsEditor value={envVars} onChange={setEnvVars} />

            <div className="flex items-center justify-between gap-2 border-t border-border pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep("repos")}
                disabled={createProject.isPending}
              >
                <ArrowLeftIcon className="size-4" />
                Back
              </Button>
              <Button
                type="button"
                onClick={() => void handleDeploy()}
                disabled={createProject.isPending || !selectedRepo}
              >
                {createProject.isPending ? (
                  <Spinner className="size-3.5" />
                ) : (
                  "Deploy"
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
