"use server"

import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"

export type AuthActionState = { error: string } | null

export async function signInWithGithub(): Promise<AuthActionState> {
  const { data, error } = await auth.signIn.social({
    provider: "github",
    callbackURL: "/", // relative path on your app is fine
  })

  if (error || !data?.url) {
    return {
      error:
        error?.message ||
        "Failed to initiate GitHub sign in. Check NEON_AUTH_BASE_URL and that GitHub is enabled in Neon Console.",
    }
  }

  // Send the browser to GitHub (this is the missing piece)
  redirect(data.url as never)
}
