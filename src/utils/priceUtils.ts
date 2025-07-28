import { CartItem } from '@/redux/slices/cartSlice'

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, item) => {
    if (item.prices.current) {
      return (acc += item.prices.current) * item.quantity
    }
    return 0
  }, 0)
}
