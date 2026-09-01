import type { Framework } from "@/features/projects/lib/framework"

type PackageJson = {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

function hasDependency(pkg: PackageJson, name: string) {
  return Boolean(
    pkg.dependencies?.[name] ||
      pkg.devDependencies?.[name] ||
      pkg.peerDependencies?.[name]
  )
}

export function detectFrameworkFromPackageJson(
  raw: string
): Framework {
  try {
    const pkg = JSON.parse(raw) as PackageJson
    if (hasDependency(pkg, "next")) {
      return "NEXTJS"
    }
    if (hasDependency(pkg, "react")) {
      return "REACT"
    }
  } catch {
    // ignore parse errors
  }

  return "REACT"
}
