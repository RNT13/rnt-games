import { useAppDispatch } from "@/hooks/useAppDispatch"
import { addToCart } from "@/redux/slices/cartSlice"
import { RootState } from "@/redux/store"
import { OverlayDarck } from "@/styles/globalStyles"
import { mapGameToCartItem } from "@/utils/cartUtils"
import { formatToBRL } from "@/utils/converterUtils"
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
  id: string
}

export const Hero = ({ game, id }: HeroProps) => {
  const dispatch = useAppDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === +game.id);

  return (
    <HeroContainer aria-label="Seção principal de destaque" id={id} >
      <OverlayDarck />
      {game.media && (
        <HeroImage src={game.media.cover} alt={game.name} fill priority />
      )}
      <HeroImageContent className="container">
        <TagDiv>
          {game.details && (
            <Tag size="md" color="blue">{game.details.category}</Tag>
          )}
          {game.details && (
            <Tag size="md" color="green">{game.details.system}</Tag>
          )}
          {game.prices?.discount > 0 && (<Tag size="md" color="red">-{game.prices.discount}%</Tag>)}
        </TagDiv>
        <InfoDiv>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          {game.prices && (
            <h3>De <span>{formatToBRL(game.prices.old)}</span> <br /> Por apenas <span>{formatToBRL(game.prices.current)}</span></h3>
          )}
        </InfoDiv>
        <ButtonDiv>
          <Button href={`/gameDetails/${game.id}`} title={`Ver detalhes de ${game.name}`}>
            <TbListDetails />
            Ver Detalhes
          </Button>
          {isInCart ? (
            <Button title="Jogo já está no carrinho" disabled>
              <FaThumbsUp />
              Jogo já está no carrinho
            </Button>
          ) : (
            <Button onClick={() => { dispatch(addToCart(mapGameToCartItem(game))); toast.success(`${game.name} Adicionado ao carrinho com sucesso!`) }} title={`Adicionar ${game.name} ao carrinho`}>
              <HiShoppingCart />
              Adicionar ao carrinho
            </Button>
          )}
        </ButtonDiv>
      </HeroImageContent>
    </HeroContainer >
  )
}
