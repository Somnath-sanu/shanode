import { auth } from "@/lib/auth/server"
import { signOut } from "@/app/auth/actions"
import { GitHubSignInButton } from "@/components/github-sign-in-button"
import Image from "next/image"

// Server components using auth methods must be rendered dynamically
export const dynamic = "force-dynamic"

export default async function HomePage() {
  const { data: session } = await auth.getSession()

  if (session?.user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-white">
        <div className="w-full max-w-md space-y-6 rounded-2xl border border-gray-800 bg-gray-900/80 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col items-center text-center">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User avatar"}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full border-2 border-indigo-500 shadow-md"
              />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white shadow-md">
                {session.user.name?.[0]?.toUpperCase() ||
                  session.user.email?.[0]?.toUpperCase() ||
                  "U"}
              </div>
            )}

            <h1 className="mt-4 text-2xl font-bold tracking-tight">
              Welcome, {session.user.name || "Developer"}!
            </h1>
            <p className="mt-1 text-sm text-gray-400">{session.user.email}</p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4 text-sm text-gray-300">
            <div className="flex justify-between py-1">
              <span className="text-gray-500">Status</span>
              <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Authenticated
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-500">User ID</span>
              <span className="font-mono text-xs text-gray-400">
                {session.user.id}
              </span>
            </div>
          </div>

          <form action={signOut}>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Sign out
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-white">
      <div className="w-full max-w-xl space-y-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/80 px-3.5 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Powered by Neon Auth & Next.js
        </div>

        <div className="space-y-4">
          <h1 className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Next-Gen Cloud Deployment Platform
          </h1>
          <p className="mx-auto max-w-lg text-base text-gray-400 sm:text-lg">
            Deploy your web applications with zero configuration. Instant
            preview environments, automatic SSL, and global edge network.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GitHubSignInButton />
        </div>
      </div>
    </main>
  )
}
