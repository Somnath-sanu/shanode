import { Geist_Mono, IBM_Plex_Sans, Oxanium } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { TRPCReactProvider } from "@/trpc/client"
import { ClerkProvider } from "@clerk/nextjs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"

const oxaniumHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Shanode — Deploy from GitHub to a live URL",
    template: "%s | Shanode",
  },
  description:
    "Shanode is a Vercel-like mini PaaS: connect a GitHub repo, build with Docker on AWS, deploy to Kubernetes, and get a live URL with streaming build logs.",
  applicationName: "Shanode",
  keywords: [
    "Shanode",
    "deployment platform",
    "PaaS",
    "Docker",
    "Kubernetes",
    "AWS",
    "EKS",
    "GitHub deploy",
  ],
  authors: [{ name: "Shanode" }],
  creator: "Shanode",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shanode",
    title: "Shanode — Deploy from GitHub to a live URL",
    description:
      "Connect a GitHub repo, click deploy, and get a live URL — with build logs streaming in the dashboard.",
  },
  twitter: {
    card: "summary",
    title: "Shanode — Deploy from GitHub to a live URL",
    description:
      "A Vercel-like mini PaaS built with Next.js, Clerk, Neon, SQS, Docker, and EKS.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        ibmPlexSans.variable,
        oxaniumHeading.variable
      )}
    >
      <body>
        <TooltipProvider>
          <ClerkProvider>
            <TRPCReactProvider>
              <ThemeProvider>
                {children} <Toaster />
              </ThemeProvider>
            </TRPCReactProvider>
          </ClerkProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
