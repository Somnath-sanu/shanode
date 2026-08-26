import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../init"
import { TRPCError } from "@trpc/server"
import { prisma } from "@/lib/db/prisma-neon"
import { getSQSClient } from "@/lib/aws/sqs"
import { SendMessageCommand } from "@aws-sdk/client-sqs"

export const appRouter = createTRPCRouter({
  sendMessage: protectedProcedure
    .input(
      z.object({
        repoUrl: z.url(),
        env: z
          .array(z.object({ key: z.string(), value: z.string() }))
          .optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { repoUrl, env } = input

      const sqsURL = process.env.AWS_SQS_URL
      console.log("sqsURL", sqsURL)
      if (!sqsURL) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "AWS SQS URL is not configured",
        })
      }

      // we are not storing env variables in the database for security reasons, but we can send them to SQS along with the repoUrl
      const job = await prisma.job.create({
        data: {
          repoUrl,
          status: "QUEUED",
        },
      })

      // console.log("job created", job)

      const send = await getSQSClient().send(
        new SendMessageCommand({
          QueueUrl: sqsURL,
          MessageBody: JSON.stringify({
            jobId: job.id,
            repoUrl,
            env: env || [],
          }),
          MessageGroupId: "shanode", // Required for FIFO queues // Should be project id
          MessageDeduplicationId: job.id, // what does this do? any why job id?
        })
      )

      return {
        jobId: job.id,
        sqsMessageId: send.MessageId,
      }
    }),
})

export type AppRouter = typeof appRouter

// TODO: Right now this is the only schema I have, but after reading this message group ID thing that you explained, the schema should be the system architecture should be like this, that there will be project IDs. Like user can import, like in Vercel. Like since I'm making Vercel clone, user can click on import button, and that will show all the repos of the user. When user click on any repo, like import thing, anything, then according to that repo we will create a project. And inside that project, using the GitHub token or things like that, we will use, we will create a webhook inside that repository itself so that whenever in future some user will push some code in the main branch, I will automatically create a deployment in my project. So there are lots of jobs in that project. So that project will be the message group ID, and inside that project there are lots of jobs. So basically it's like one-to-many relationship, like this. So this should be the, I think, the architecture, like project and then job IDs, things like this. And inside that, and I think the schema of job IDs also not complete. We have to add the build log JSON schema, I guess. And after five days, I will use a cron job to delete all the build logs, like just a seven days retention policy, things like that. So this is the system architecture. This can be refined, but I think right now it's incomplete.
