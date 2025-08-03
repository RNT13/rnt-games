import prisma from '@/utils/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const highlight = searchParams.get('highlight')

  if (highlight === 'true') {
    const highlightedGames = await prisma.game.findMany({
      where: { highlight: true },
      include: {
        media: true,
        details: true,
        prices: true
      }
    })

    if (highlightedGames.length === 0) {
      return NextResponse.json(null)
    }

    const randomIndex = Math.floor(Math.random() * highlightedGames.length)
    const randomHighlightedGame = highlightedGames[randomIndex]

    return NextResponse.json(randomHighlightedGame)
  }

  // fallback: retorna todos os jogos
  const games = await prisma.game.findMany({
    include: {
      media: true,
      details: true,
      prices: true
    }
  })

  return NextResponse.json(games)
}
