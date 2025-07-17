export interface GameType {
  id: string
  name: string
  description: string
  release_date: string
  destaque: boolean
  media: {
    thumbnail: string
    cover: string
    imageUrl: string
  }
  details: {
    system: string
    category: string
    developer: string
    publisher: string
    rating: string
  }
  prices: {
    discount: number
    original: number
    current: number
  }
}
