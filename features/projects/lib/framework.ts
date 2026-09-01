export type Framework = "NEXTJS" | "REACT"

export type DeployFrameworkType = "NextJS" | "React"

export function frameworkToSqsType(framework: Framework): DeployFrameworkType {
  return framework === "NEXTJS" ? "NextJS" : "React"
}

export function frameworkLabel(framework: Framework) {
  return framework === "NEXTJS" ? "Next.js" : "React"
}
