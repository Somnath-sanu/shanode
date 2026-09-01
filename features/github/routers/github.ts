import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "@/trpc/init"
import { getOctokitForUser } from "@/lib/github/octokit"
import { detectFrameworkFromPackageJson } from "@/features/projects/lib/detect-framework"

export const githubRouter = createTRPCRouter({
  listRepos: protectedProcedure
    .input(
      z
        .object({
          search: z.string().optional(),
          perPage: z.number().int().min(1).max(100).optional(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const octokit = await getOctokitForUser(ctx.userId)
      const search = input?.search?.trim().toLowerCase()
      const perPage = input?.perPage ?? 100

      const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser({
        visibility: "all",
        per_page: perPage,
        sort: "updated",
        affiliation: "owner,collaborator,organization_member",
      })

      const mapped = repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        isPrivate: repo.private,
        htmlUrl: repo.html_url,
        defaultBranch: repo.default_branch,
        updatedAt: repo.updated_at,
        ownerAvatarUrl: repo.owner.avatar_url,
        ownerLogin: repo.owner.login,
      }))

      if (!search) {
        return mapped
      }

      return mapped.filter(
        (repo) =>
          repo.name.toLowerCase().includes(search) ||
          repo.fullName.toLowerCase().includes(search)
      )
    }),

  detectFramework: protectedProcedure
    .input(
      z.object({
        owner: z.string().min(1),
        repo: z.string().min(1),
        ref: z.string().min(1).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const octokit = await getOctokitForUser(ctx.userId)

      try {
        const { data } = await octokit.rest.repos.getContent({
          owner: input.owner,
          repo: input.repo,
          path: "package.json",
          ref: input.ref,
        })

        if (Array.isArray(data) || data.type !== "file" || !("content" in data)) {
          return {
            framework: "REACT" as const,
            detected: false,
            reason: "package.json not found",
          }
        }

        const raw = Buffer.from(data.content, "base64").toString("utf8")
        const framework = detectFrameworkFromPackageJson(raw)

        return {
          framework,
          detected: true,
          reason:
            framework === "NEXTJS"
              ? "Found next in package.json"
              : "Found react (or defaulted to React)",
        }
      } catch {
        return {
          framework: "REACT" as const,
          detected: false,
          reason: "Could not read package.json",
        }
      }
    }),
})
