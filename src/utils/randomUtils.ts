import { GameType } from '@/types/GameType'

export function getRandomDiscountedGame(games: GameType[]): GameType | null {
  const discountedGames = games.filter(game => game.prices.discount > 0)

  if (discountedGames.length === 0) return null

  const randomIndex = Math.floor(Math.random() * discountedGames.length)
  return discountedGames[randomIndex]
}
