import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import React from 'react'
import { prisma } from '../../components/singletons'

export async function GET(req : Request , res: Response) {
   const data = await prisma.post.findMany()
    return NextResponse.json({data})
}
