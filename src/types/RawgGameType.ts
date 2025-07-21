export interface RawgGameType {
  id: number
  slug: string
  name: string
  description: string
  released: string
  tba: boolean
  background_image: string
  background_image_additional: string
  rating: number
  rating_top: number
  parent_platforms: {
    platforms: {
      name: string
    }
    name: string
  }[]
  stores: {
    store: {
      name: string
      domain: string
    }
  }[]
  developers: {
    name: string
  }[]
  genres: {
    name: string
  }[]
  publishers: {
    name: string
  }[]
}
