import { CloseButton } from "@/styles/globalStyles";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { CardInfo, CartItemBody, CartItemContainer, CartItemContent, CartItemImage, CartItemNav, CartItemPrice } from "./CartItemStyles";

export const CartItem = () => {
  return (
    <CartItemContainer>
      <CartItemContent>
        <CartItemImage src="/armoredCoreGame.jpg" alt="imagem do jogo" width={120} height={120} />
        <CartItemBody>
          <CardInfo>
            <h3>
              Nome do jogo
            </h3>
            <CartItemPrice>
              R$ 0,00
            </CartItemPrice>
          </CardInfo>
          <CartItemNav>
            <div>
              <FaRegSquarePlus />
              <span>1</span>
              <FaRegSquareMinus />
            </div>
          </CartItemNav>
          <CloseButton title="">
            <IoIosCloseCircle />
          </CloseButton>
        </CartItemBody>
      </CartItemContent>
    </CartItemContainer>
  )
}
