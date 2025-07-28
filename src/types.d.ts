declare type CartItemType = {
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

declare interface CategoryType {
  id: string
  name: string
  image: string
  gamesCount: number
}

declare interface CheapSharkDeal {
  dealID: string
  title: string
  salePrice: string
  normalPrice: string
  savings: string
}

declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare interface GameType {
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

declare type InstallmentType = {
  quantity: number
  amount: number
  formattedAmount: string
}

declare type PurchaseResponse = {
  orderId: string
  total: number
  totalPrice: number
}

declare type Product = {
  id: number
  name: string
  price: number
}

declare type PurchasePayLoad = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: string
    }
    installments: number
  }
}

declare interface RawgGameType {
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
