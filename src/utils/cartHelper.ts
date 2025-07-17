import { CartItemType } from '@/types/CartItemType'
import { GameType } from '@/types/GameType'

export function mapGameToCartItem(game: GameType): CartItemType {
  return {
    id: +game.id,
    name: game.name,
    media: {
      thumbnail: game.media.thumbnail
    },
    prices: game.prices,
    quantity: 1
  }
}
