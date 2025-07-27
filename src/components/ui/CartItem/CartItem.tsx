import { decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/slices/cartSlice";
import { CloseButton } from "@/styles/globalStyles";
import { formatToBRL } from "@/utils/converterUtils";
import toast from "react-hot-toast";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { CardInfo, CartItemBody, CartItemContainer, CartItemContent, CartItemImage, CartItemNav, CartItemPrice } from "./CartItemStyles";

interface CartItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
  media: string;
}

export const CartItem = ({ id, name, quantity, price, media }: CartItemProps) => {
  const dispatch = useDispatch()

  return (
    <CartItemContainer>
      <CartItemContent>
        <CartItemImage src={media} alt={name} width={120} height={120} />
        <CartItemBody>
          <CardInfo>
            <h3>{name}</h3>
            <CartItemPrice>
              <span>{formatToBRL(price)}</span>
            </CartItemPrice>
          </CardInfo>
          <CartItemNav>
            <div>
              <FaRegSquareMinus onClick={() => dispatch(decrementQuantity(id))} />
              <span>{quantity}</span>
              <FaRegSquarePlus onClick={() => dispatch(incrementQuantity(id))} />
            </div>
          </CartItemNav>
          <CloseButton onClick={() => { dispatch(removeFromCart(id)); toast.success(`${name} removido do carrinho`) }}>
            <IoIosCloseCircle />
          </CloseButton>
        </CartItemBody>
      </CartItemContent>
    </CartItemContainer >
  )
}
