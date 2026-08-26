import { z } from "zod"
import { NextResponse } from "next/server"
import { auth, clerkClient } from "@clerk/nextjs/server"
import { Octokit } from "octokit"

function parseGitHubUrl(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/)
  if (!match) {
    throw new Error("Invalid GitHub URL")
  }

  return { owner: match[1], repo: match[2].replace(/\.git$/, "") }
}

const requestSchema = z.object({
  url: z.url(),
})

export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // const body = await request.json()
  // const { url } = requestSchema.parse(body)

  // const { owner, repo } = parseGitHubUrl(url)
  // // https://github.com/Somnath-sanu/flyser
  // // { owner: "Somnath-sanu", repo: "flyser" }

  const client = await clerkClient()
  const tokens = await client.users.getUserOauthAccessToken(userId, "github")

  const githubToken = tokens.data[0]?.token

  if (!githubToken) {
    return NextResponse.json(
      { error: "GitHub not connected. Please reconnect your GitHub account." },
      { status: 400 }
    )
  }

  const octokit = new Octokit({
    auth: githubToken,
  })

  //Optional Bonus: Pull all public and private repositories owned/collaborated by this user
  const { data: allUserRepos } =
    await octokit.rest.repos.listForAuthenticatedUser({
      visibility: "all", // Brings back both public and private repositories
      per_page: 100, // Maximises page payload
      sort: "updated",
    })

  // Format the list of repositories into a clean array
  const formattedUserRepos = allUserRepos.map((r) => ({
    id: r.id,
    name: r.name,
    fullName: r.full_name,
    isPrivate: r.private,
  }))

  return NextResponse.json(
    {
      allUserRepos: formattedUserRepos, // Returning user inventory array back to front-end layouts
    },
    { status: 200 }
  )
}
