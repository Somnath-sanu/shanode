import { auth } from "@/lib/auth/server"
import { signInWithGithub } from "@/app/auth/sign-in/actions"
import { signOut } from "@/app/auth/actions"
import Link from "next/link"
import Image from "next/image"

// Server components using auth methods must be rendered dynamically
export const dynamic = "force-dynamic"

export default async function HomePage() {
  const { data: session } = await auth.getSession()

  async function handleSignIn() {
    "use server"
    await signInWithGithub()
  }

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
          <form action={handleSignIn} className="w-full sm:w-auto">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 shadow-md transition duration-150 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              Continue with GitHub
            </button>
          </form>

          <Link
            href="/auth/sign-in"
            className="flex w-full items-center justify-center rounded-xl border border-gray-800 bg-gray-900/60 px-6 py-3.5 font-semibold text-gray-300 transition hover:bg-gray-800 hover:text-white sm:w-auto"
          >
            Sign in page
          </Link>
        </div>
      </div>
    </main>
  )
}
