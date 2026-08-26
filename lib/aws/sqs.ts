import { SQSClient } from "@aws-sdk/client-sqs"

export const getSQSClient = () => {
  const accessKeyId = process.env.AWS_SQS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SQS_SECRET_ACCESS_KEY
  const region = process.env.AWS_REGION

  if (!accessKeyId || !secretAccessKey || !region) {
    throw new Error(
      "Missing AWS SQS credentials or region in environment variables"
    )
  }

  return new SQSClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  })
}
