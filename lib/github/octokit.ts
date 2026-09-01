import { clerkClient } from "@clerk/nextjs/server"
import { TRPCError } from "@trpc/server"
import { Octokit } from "octokit"

export async function getOctokitForUser(userId: string) {
  const client = await clerkClient()
  const tokens = await client.users.getUserOauthAccessToken(userId, "github")
  const githubToken = tokens.data[0]?.token

  if (!githubToken) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "GitHub not connected. Please reconnect your GitHub account.",
    })
  }

  return new Octokit({ auth: githubToken })
}
