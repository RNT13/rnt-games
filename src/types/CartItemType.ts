export type CartItemType = {
  id: number
  name: string
  media: {
    thumbnail: string
  }
  prices: {
    discount: number
    old: number
    current: number
  }
  quantity: number
}
