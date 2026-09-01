import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "@/trpc/init"
import { getOctokitForUser } from "@/lib/github/octokit"

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
})
