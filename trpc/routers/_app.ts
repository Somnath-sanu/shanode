import { createTRPCRouter } from "../init"
import { githubRouter } from "@/features/github/routers/github"
import { projectsRouter } from "@/features/projects/routers/projects"
import { deploymentsRouter } from "@/features/deployments/routers/deployments"

export const appRouter = createTRPCRouter({
  github: githubRouter,
  projects: projectsRouter,
  deployments: deploymentsRouter,
})

export type AppRouter = typeof appRouter
