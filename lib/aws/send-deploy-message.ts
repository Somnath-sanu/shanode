import { SendMessageCommand } from "@aws-sdk/client-sqs"
import { TRPCError } from "@trpc/server"
import { getSQSClient } from "@/lib/aws/sqs"

export type DeployMessageEnv = {
  key: string
  value: string
}

export type DeployMessagePayload = {
  projectId: string
  deploymentId: string
  userId: string
  repoUrl: string
  repoFullName: string
  branch: string
  env: DeployMessageEnv[]
}

export async function sendDeployMessage(payload: DeployMessagePayload) {
  const queueUrl = process.env.AWS_SQS_URL

  if (!queueUrl) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "AWS SQS URL is not configured",
    })
  }

  const result = await getSQSClient().send(
    new SendMessageCommand({
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(payload),
      MessageGroupId: payload.projectId,
      MessageDeduplicationId: payload.deploymentId,
    })
  )

  return {
    sqsMessageId: result.MessageId,
  }
}
