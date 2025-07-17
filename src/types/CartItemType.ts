export type CartItemType = {
  id: number
  name: string
  media: {
    thumbnail: string
  }
  prices: {
    discount: number
    original: number
    current: number
  }
  quantity: number
}
