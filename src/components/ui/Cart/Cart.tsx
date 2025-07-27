import { RootState } from "@/redux/store";
import { CloseButton, OverlayBlur } from "@/styles/globalStyles";
import { formatToBRL } from "@/utils/converterUtils";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";

import {
  CartBody,
  CartContainer,
  CartContent,
  CartFooter,
  CartHeader,
} from "./CartStyles";

type CartProps = {
  onClick: () => void;
};

export const Cart = ({ onClick }: CartProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calcular o total de preços
  const total = cartItems.reduce(
    (acc, item) => acc + item.prices.current * item.quantity,
    0
  );

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
          {cartItems.map((item) => (
            <CartItem
              key={`${item.id}-${item.name}`}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.prices.current * item.quantity}
              media={item.media.thumbnail}
            />
          ))}
        </CartBody>

        <CartFooter>
          <div>
            <h3>Total:{formatToBRL(total)}</h3>
            <p>Total de itens: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
          </div>
          <div>
            <Button href={'/checkout'} onClick={onClick} title="Ir para página de Pagamento" >
              <BsFillCartCheckFill />
              Finalizar compra
            </Button>
          </div>
        </CartFooter>
      </CartContent>
    </CartContainer>
  );
};
