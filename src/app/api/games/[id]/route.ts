import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

type IdProps = {
  params: Promise<{ id: string }>
}

export async function GET(request: Request, { params }: IdProps) {
  const { id } = await params

  const game = await prisma.game.findUnique({
    where: { id: parseInt(id) },
    include: {
      media: { include: { gallery: true } },
      details: true,
      prices: true
    }
  })

  return NextResponse.json(game)
}
