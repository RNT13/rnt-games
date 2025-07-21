export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export interface GameType {
  id: string
  name: string
  description: string
  release_date: string
  destaque: boolean
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
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
    old: number
    current: number
  }
}
