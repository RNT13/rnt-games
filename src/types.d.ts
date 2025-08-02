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

declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare interface GameType {
  id: string
  name: string
  description: string
  releaseDate: string
  highlight: boolean
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

declare type PaymentInfo = {
  card: {
    active: boolean
    code: string
    name: string
    number: string
    owner: {
      name: string
      document: string
    }
    expires: {
      month: number
      year: number
    }
  }
  installments: number
}
