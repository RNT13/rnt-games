import { useAppDispatch } from "@/hooks/useAppDispatch"
import { addToCart } from "@/redux/slices/cartSlice"
import { RootState } from "@/redux/store"
import { OverlayDarck } from "@/styles/globalStyles"
import { GameType } from "@/types/GameType"
import { mapGameToCartItem } from "@/utils/cartUtils"
import toast from "react-hot-toast"
import { FaThumbsUp } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { TbListDetails } from "react-icons/tb"
import { useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { Tag } from "../Tag/Tag"
import { ButtonDiv, HeroContainer, HeroImage, HeroImageContent, InfoDiv, TagDiv } from "./HeroStyles"


type HeroProps = {
  game: GameType
}

export const Hero = ({ game }: HeroProps) => {
  const dispatch = useAppDispatch()


  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === +game.id);

  return (
    <>
      {game.prices.discount > 0 && (
        <HeroContainer aria-label="Seção principal de destaque" >
          <OverlayDarck />
          <HeroImage src={game.media.cover} alt={game.name} width={1920} height={1080} />
          <HeroImageContent className="container">
            <TagDiv>
              <Tag size="md" color="blue">{game.details.category}</Tag>
              <Tag size="md" color="green">{game.details.system}</Tag>
              {game.prices.discount > 0 && (<Tag size="md" color="red">-{game.prices.discount}%</Tag>)}
            </TagDiv>
            <InfoDiv>
              <h2>{game.name}</h2>
              <p>{game.description}</p>
            </InfoDiv>
            <ButtonDiv>
              <Button href={`/gameDetails/${game.id}`} title={"Ver Jogo"}>
                <TbListDetails />
              </Button>
              {isInCart ? (
                <Button title="Jogo já está no carrinho" disabled>
                  <FaThumbsUp />
                </Button>
              ) : (
                <Button onClick={() => { dispatch(addToCart(mapGameToCartItem(game))); toast.success("Adicionado ao carrinho com sucesso!") }} title="Adicionar ao carrinho">
                  <HiShoppingCart />
                </Button>
              )}
            </ButtonDiv>
          </HeroImageContent>
        </HeroContainer >
      )}
    </>
  )
}
