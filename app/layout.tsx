import { Suspense } from "react"
import { Geist_Mono, IBM_Plex_Sans, Oxanium } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionRefresh } from "@/components/session-refresh"
import { cn } from "@/lib/utils"
import { TRPCReactProvider } from "@/trpc/client"

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
        <TRPCReactProvider>
          <ThemeProvider>
            <Suspense fallback={null}>
              <SessionRefresh />
            </Suspense>
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
