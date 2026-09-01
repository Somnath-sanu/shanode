import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { createTRPCRouter, protectedProcedure } from "@/trpc/init"
import { prisma } from "@/lib/db/prisma-neon"

async function assertProjectOwnership(projectId: string, userId: string) {
  const project = await prisma.project.findFirst({
    where: { id: projectId, userId },
    select: { id: true },
  })

  if (!project) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Project not found",
    })
  }

  return project
}

export const deploymentsRouter = createTRPCRouter({
  listByProject: protectedProcedure
    .input(z.object({ projectId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await assertProjectOwnership(input.projectId, ctx.userId)

      return prisma.deployment.findMany({
        where: { projectId: input.projectId },
        orderBy: { createdAt: "desc" },
        include: {
          builds: {
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
      })
    }),

  byId: protectedProcedure
    .input(
      z.object({
        deploymentId: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const deployment = await prisma.deployment.findFirst({
        where: { id: input.deploymentId },
        include: {
          project: {
            select: { id: true, userId: true },
          },
          builds: {
            orderBy: { createdAt: "desc" },
            take: 10,
          },
        },
      })

      if (!deployment || deployment.project.userId !== ctx.userId) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Deployment not found",
        })
      }

      const { project: _project, ...rest } = deployment
      return rest
    }),
})
