export function mapGameToCartItem(game: GameType): CartItem {
  return {
    id: +game.id,
    name: game.name,
    media: {
      thumbnail: game.media.cover
    },
    prices: game.prices,
    quantity: 1
  }
}
