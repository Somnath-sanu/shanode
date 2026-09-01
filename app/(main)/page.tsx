"use client"

import { LandingPage } from "@/features/landing/landing-page"
import { Spinner } from "@/components/ui/spinner"
import { useUser } from "@clerk/nextjs"

export default function Page() {
  const { isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <Spinner className="size-11 text-[#DEDBC8]" />
      </div>
    )
  }

  return <LandingPage />
}
