import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { createTRPCRouter, protectedProcedure } from "@/trpc/init"
import { prisma } from "@/lib/db/prisma-neon"
import { sendDeployMessage } from "@/lib/aws/send-deploy-message"
import { frameworkToSqsType } from "@/features/projects/lib/framework"

const envVarSchema = z.object({
  key: z.string().min(1),
  value: z.string(),
})

const frameworkSchema = z.enum(["NEXTJS", "REACT"])

function normalizeEnvVars(envVars: { key: string; value: string }[]) {
  return envVars
    .map((env) => ({
      key: env.key.trim(),
      value: env.value,
    }))
    .filter((env) => env.key.length > 0)
}

function serializeProject<
  T extends {
    repoId: bigint
  },
>(project: T) {
  return {
    ...project,
    repoId: project.repoId.toString(),
  }
}

async function getOwnedProject(projectId: string, userId: string) {
  const project = await prisma.project.findFirst({
    where: { id: projectId, userId },
  })

  if (!project) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Project not found",
    })
  }

  return project
}

export const projectsRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    const projects = await prisma.project.findMany({
      where: { userId: ctx.userId },
      orderBy: { updatedAt: "desc" },
      include: {
        deployments: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    })

    return projects.map((project) => {
      const { deployments, ...rest } = project
      return {
        ...serializeProject(rest),
        latestDeployment: deployments[0] ?? null,
      }
    })
  }),

  byId: protectedProcedure
    .input(z.object({ projectId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const project = await prisma.project.findFirst({
        where: {
          id: input.projectId,
          userId: ctx.userId,
        },
        include: {
          deployments: {
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
      })

      if (!project) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Project not found",
        })
      }

      const { deployments, ...rest } = project
      return {
        ...serializeProject(rest),
        latestDeployment: deployments[0] ?? null,
      }
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        repoUrl: z.url(),
        repoFullName: z.string().min(1),
        repoId: z.number().int().positive(),
        defaultBranch: z.string().min(1).optional(),
        framework: frameworkSchema,
        envVars: z.array(envVarSchema).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const defaultBranch = input.defaultBranch?.trim() || "main"
      const normalizedEnv = normalizeEnvVars(input.envVars ?? [])

      const result = await prisma.$transaction(async (tx) => {
        const project = await tx.project.create({
          data: {
            userId: ctx.userId,
            name: input.name,
            repoUrl: input.repoUrl,
            repoFullName: input.repoFullName,
            repoId: BigInt(input.repoId),
            defaultBranch,
            framework: input.framework,
          },
        })

        if (normalizedEnv.length > 0) {
          await tx.environmentVariable.createMany({
            data: normalizedEnv.map((env) => ({
              projectId: project.id,
              key: env.key,
              value: env.value,
            })),
          })
        }

        const deployment = await tx.deployment.create({
          data: {
            projectId: project.id,
            status: "QUEUED",
            branch: defaultBranch,
          },
        })

        await tx.build.create({
          data: {
            deploymentId: deployment.id,
            status: "QUEUED",
          },
        })

        return { project, deployment }
      })

      const { sqsMessageId } = await sendDeployMessage({
        projectId: result.project.id,
        deploymentId: result.deployment.id,
        userId: ctx.userId,
        repoUrl: result.project.repoUrl,
        repoFullName: result.project.repoFullName,
        branch: result.deployment.branch,
        env: normalizedEnv,
        type: frameworkToSqsType(input.framework),
      })

      return {
        projectId: result.project.id,
        deploymentId: result.deployment.id,
        sqsMessageId,
      }
    }),

  redeploy: protectedProcedure
    .input(z.object({ projectId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const project = await getOwnedProject(input.projectId, ctx.userId)

      const envVars = await prisma.environmentVariable.findMany({
        where: { projectId: project.id },
        select: { key: true, value: true },
      })

      const result = await prisma.$transaction(async (tx) => {
        const deployment = await tx.deployment.create({
          data: {
            projectId: project.id,
            status: "QUEUED",
            branch: project.defaultBranch,
          },
        })

        await tx.build.create({
          data: {
            deploymentId: deployment.id,
            status: "QUEUED",
          },
        })

        return { deployment }
      })

      const { sqsMessageId } = await sendDeployMessage({
        projectId: project.id,
        deploymentId: result.deployment.id,
        userId: ctx.userId,
        repoUrl: project.repoUrl,
        repoFullName: project.repoFullName,
        branch: result.deployment.branch,
        env: envVars,
        type: frameworkToSqsType(project.framework),
      })

      return {
        deploymentId: result.deployment.id,
        sqsMessageId,
      }
    }),

  delete: protectedProcedure
    .input(z.object({ projectId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await getOwnedProject(input.projectId, ctx.userId)

      await prisma.project.delete({
        where: { id: input.projectId },
      })

      return { ok: true as const }
    }),

  listEnvVars: protectedProcedure
    .input(z.object({ projectId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await getOwnedProject(input.projectId, ctx.userId)

      return prisma.environmentVariable.findMany({
        where: { projectId: input.projectId },
        orderBy: { key: "asc" },
      })
    }),

  upsertEnvVars: protectedProcedure
    .input(
      z.object({
        projectId: z.string().min(1),
        envVars: z.array(envVarSchema),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await getOwnedProject(input.projectId, ctx.userId)

      const normalized = normalizeEnvVars(input.envVars)

      await prisma.$transaction(async (tx) => {
        await tx.environmentVariable.deleteMany({
          where: { projectId: input.projectId },
        })

        if (normalized.length > 0) {
          await tx.environmentVariable.createMany({
            data: normalized.map((env) => ({
              projectId: input.projectId,
              key: env.key,
              value: env.value,
            })),
          })
        }
      })

      return { count: normalized.length }
    }),
})
