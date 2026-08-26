import { PrismaClient } from "../../app/generated/prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon" // Neon serverless adapter

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const adapter = new PrismaNeon({
  connectionString: process.env.NEON_DATABASE_URL!,
})

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
