export type PurchaseResponse = {
  orderId: string
  total: number
  totalPrice: number
}

type Product = {
  id: number
  name: string
  price: number
}

export type PurchasePayLoad = {
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
