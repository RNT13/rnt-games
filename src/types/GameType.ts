export interface GameType {
  id: number
  name: string
  description: string
  release_date: string

  media: {
    thumbnail: string
    cover: string
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
