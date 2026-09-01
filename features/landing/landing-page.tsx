"use client"

import Image from "next/image"
import Link from "next/link"
import { Almarai, Instrument_Serif } from "next/font/google"
import { useClerk, useUser } from "@clerk/nextjs"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { WordsPullUp } from "./words-pull-up"
import "./landing.css"

const almarai = Almarai({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-landing-sans",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-landing-serif",
})

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"

const FEATURE_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"

const ICON_IMPORT =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"

const ICON_LOGS =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"

const ICON_ISOLATION =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"

const EASE = [0.16, 1, 0.3, 1] as const

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
]

function FeatureChecklistCard({
  number,
  title,
  iconSrc,
  items,
}: {
  number: string
  title: string
  iconSrc: string
  items: string[]
}) {
  return (
    <div className="flex h-full flex-col justify-between bg-[#212121] p-5 sm:p-6">
      <div>
        <Image
          src={iconSrc}
          alt=""
          width={48}
          height={48}
          className="mb-6 size-10 rounded sm:size-12"
          unoptimized
        />
        <div className="mb-5 flex items-baseline gap-2">
          <h3
            className="text-lg font-medium sm:text-xl"
            style={{ color: "#E1E0CC" }}
          >
            {title}
          </h3>
          <span className="text-xs text-gray-500">{number}</span>
        </div>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-gray-400"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-[#DEDBC8]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#features"
        className="mt-8 inline-flex items-center gap-2 text-sm text-[#DEDBC8]/70 transition hover:text-[#E1E0CC]"
      >
        Learn more
        <ArrowRight className="size-4 -rotate-45" />
      </a>
    </div>
  )
}

export function LandingPage() {
  const clerk = useClerk()
  const { isSignedIn, isLoaded } = useUser()
  const ctaLabel = isSignedIn ? "Open dashboard" : "Sign in"

  return (
    <div
      className={cn(
        "landing-root min-h-screen",
        almarai.variable,
        instrumentSerif.variable,
        almarai.className
      )}
    >
      <section className="h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

          <nav className="absolute top-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] transition sm:text-xs md:text-sm"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E1E0CC"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)"
                }}
              >
                {link.label}
              </a>
            ))}
            {isLoaded && isSignedIn ? (
              <Link
                href="/dashboard"
                className="text-[10px] font-medium sm:text-xs md:text-sm"
                style={{ color: "#E1E0CC" }}
              >
                Dashboard
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => clerk.openSignIn({})}
                className="text-[10px] font-medium sm:text-xs md:text-sm"
                style={{ color: "#E1E0CC" }}
              >
                Sign in
              </button>
            )}
          </nav>

          <div className="absolute right-0 bottom-0 left-0 z-10 grid grid-cols-12 gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="col-span-12 md:col-span-8">
              <h1
                className="text-[16vw] leading-[0.85] font-medium tracking-[-0.07em] sm:text-[12vw] md:text-[14vw] lg:text-[16vw] xl:text-[15vw] 2xl:text-[18vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Shanode" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col justify-end gap-4 md:col-span-4 md:pb-4">
              <motion.p
                className="text-xs text-[#DEDBC8]/70 sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              >
                Shanode is a mini PaaS for developers — connect a GitHub repo,
                click deploy, and get a live URL with streaming build logs,
                powered by SQS, Docker, and Kubernetes.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
              >
                {isSignedIn ? (
                  <Link
                    href="/dashboard"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#DEDBC8] py-1.5 pr-1.5 pl-5 text-sm font-medium text-black transition hover:gap-3 sm:text-base"
                  >
                    {ctaLabel}
                    <span className="flex size-9 items-center justify-center rounded-full bg-black transition group-hover:scale-110 sm:size-10">
                      <ArrowRight className="size-4 text-[#E1E0CC]" />
                    </span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => clerk.openSignIn({})}
                    disabled={!isLoaded}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#DEDBC8] py-1.5 pr-1.5 pl-5 text-sm font-medium text-black transition hover:gap-3 disabled:opacity-60 sm:text-base"
                  >
                    {ctaLabel}
                    <span className="flex size-9 items-center justify-center rounded-full bg-black transition group-hover:scale-110 sm:size-10">
                      <ArrowRight className="size-4 text-[#E1E0CC]" />
                    </span>
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-black px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-14 text-center sm:px-10 md:py-20">
          <p className="mb-6 text-[10px] text-[#DEDBC8] sm:text-xs">
            Platform engineering
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="font-normal">Import from GitHub, </span>
            <span className="font-landing-serif">build with Docker, </span>
            <span className="font-normal">
              ship to Kubernetes with a live URL.
            </span>
          </h2>
          <p
            className="mx-auto mt-10 max-w-2xl text-xs sm:text-sm md:text-base"
            style={{ color: "#DEDBC8" }}
          >
            Clerk authenticates users. Neon Postgres stores projects,
            deployments, and build logs. AWS SQS queues jobs to an EC2 worker
            that builds images, pushes to ECR, and deploys with Helm to EKS —
            then serves app-&lt;id&gt;.devs24.com.
          </p>
        </div>
      </section>

      <section
        id="features"
        className="relative min-h-screen bg-black px-4 py-16 md:px-6 md:py-24"
      >
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 space-y-2 text-center md:mb-14">
            <p className="text-xl font-normal text-[#DEDBC8] sm:text-2xl md:text-3xl lg:text-4xl">
              Studio-grade workflows for shipping apps.
            </p>
            <p className="text-xl font-normal text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl">
              Built for deploy velocity. Powered by AWS.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-120 lg:grid-cols-4">
            <div className="relative min-h-70 overflow-hidden lg:min-h-0">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={FEATURE_VIDEO}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              <p
                className="absolute bottom-5 left-5 text-lg font-medium"
                style={{ color: "#E1E0CC" }}
              >
                Your deploy canvas.
              </p>
            </div>

            <FeatureChecklistCard
              number="01"
              title="GitHub Import."
              iconSrc={ICON_IMPORT}
              items={[
                "OAuth via Clerk + GitHub",
                "Detect Next.js or React frameworks",
                "Configure env vars per project",
                "One-click deploy enqueue",
              ]}
            />
            <FeatureChecklistCard
              number="02"
              title="Live Build Logs."
              iconSrc={ICON_LOGS}
              items={[
                "Status from QUEUED to SUCCESS",
                "Streaming logs from the EC2 worker",
                "Failed builds keep full diagnostics",
              ]}
            />
            <FeatureChecklistCard
              number="03"
              title="Isolated Deploys."
              iconSrc={ICON_ISOLATION}
              items={[
                "Docker image per deployment to ECR",
                "Helm release on Amazon EKS",
                "Hostname routing via Ingress",
              ]}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-xs text-gray-500">
        Made with ❤️ by <strong>Somnath Mishra</strong>
      </footer>
    </div>
  )
}
