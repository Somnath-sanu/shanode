"use client"

import { UserButton } from "@clerk/nextjs"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

type DashboardNavbarProps = {
  onAddProject: () => void
}

export function DashboardNavbar({ onAddProject }: DashboardNavbarProps) {
  return (
    <nav className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="font-heading text-sm font-semibold tracking-tight">
          Shanode
        </span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground">Projects</span>
      </div>

      <div className="flex items-center gap-3">
        <Button type="button" size="sm" onClick={onAddProject}>
          <PlusIcon className="size-4" />
          Add Project
        </Button>
        <UserButton />
      </div>
    </nav>
  )
}
