import { TitleH2 } from "@/styles/globalStyles";
import Image from "next/image";
import { EmptyCartContainer, EmptyCartContent, EmptyCartImage } from "./EmptyCartStyles";

export default function EmptyCart() {
  return (
    <EmptyCartContainer>
      <EmptyCartContent >
        <TitleH2>O carrinho está vazio!</TitleH2>
        <p>
          Para finalizar a compra, adicione pelo menos um jogo ao carrinho.
        </p>
        <EmptyCartImage>
          <Image src="/empty-cart.png" alt="Carrinho vazio" width={300} height={300} priority />
        </EmptyCartImage>
      </EmptyCartContent>
    </EmptyCartContainer>
  )
}
