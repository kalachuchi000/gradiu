import { PrismaClient } from "@prisma/client"

const getPrismaClientSingleton = () => {
    return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof getPrismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma : PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma ?? getPrismaClientSingleton()
