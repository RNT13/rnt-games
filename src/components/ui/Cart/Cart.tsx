import { CloseButton, OverlayBlur } from "@/styles/globalStyles"
import { IoIosCloseCircle } from "react-icons/io"
import { Button } from "../Button/Button"
import { CartItem } from "../CartItem/CartItem"
import { CartBody, CartContainer, CartContent, CartFooter, CartHeader } from "./CartStyles"

type CartProps = {
  onClick: () => void
}

export const Cart = ({ onClick }: CartProps) => {
  return (
    <CartContainer>
      <OverlayBlur onClick={onClick} />
      <CartContent>
        <CartHeader>
          <h2>Carrinho</h2>
          <CloseButton onClick={onClick} title="">
            <IoIosCloseCircle />
          </CloseButton>
        </CartHeader>
        <CartBody>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartBody>
        <CartFooter>
          <div>
            <h3>Total: R$ 0,00</h3>
            <p>Total de itens: 0</p>
          </div>
          <div>
            <Button title="Finalizar compra" />
          </div>
        </CartFooter>
      </CartContent>
    </CartContainer>
  )
}
