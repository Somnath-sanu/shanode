"use client"

import { useState } from "react"

import { DashboardNavbar } from "./navbar"
import { ProjectGrid } from "./project-grid"
import { ImportRepoDialog } from "@/features/github/components/import-repo-dialog"

export function Dashboard() {
  const [importOpen, setImportOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardNavbar onAddProject={() => setImportOpen(true)} />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-6">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Import a repository and deploy it to your infrastructure.
          </p>
        </div>
        <ProjectGrid />
      </main>
      <ImportRepoDialog open={importOpen} onOpenChange={setImportOpen} />
    </div>
  )
}
