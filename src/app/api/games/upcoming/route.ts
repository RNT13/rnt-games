import prisma from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const currentDate = new Date()

  const upcomingGamesList = await prisma.game.findMany({
    where: {
      releaseDate: {
        gt: currentDate
      }
    },
    include: {
      media: true,
      details: true,
      prices: true
    }
  })

  return NextResponse.json(upcomingGamesList)
}
