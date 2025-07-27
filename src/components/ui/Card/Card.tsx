import { addToCart } from "@/redux/slices/cartSlice"
import { RootState } from "@/redux/store"
import { GameType } from "@/types/GameType"
import { mapGameToCartItem } from "@/utils/cartUtils"
import { formatToBRL } from "@/utils/converterUtils"
import toast from "react-hot-toast"
import { FaHourglassHalf, FaStar, FaThumbsUp } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { TbListDetails } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { Tag } from "../Tag/Tag"
import { CardBody, CardButtonDiv, CardCategory, CardContainer, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardPrice, CardStars, CardTags, CardTitle } from "./CardStyles"

interface CardProps {
  game: GameType
  $bgColor: 'light' | 'dark'
}

export const Card = ({ game, $bgColor }: CardProps) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isInCart = cartItems.some(item => item.id === +game.id)

  return (
    <CardContainer>
      <CardContent $bgColor={$bgColor}>
        <CardHeader>
          <CardImage src={game.media.thumbnail} alt={game.name} width={300} height={300} />
          <CardTags>
            <Tag color="blue" size="sm" >
              {game.details.system}
            </Tag>
            {game.prices.discount && (
              <Tag color="red" size="sm" >
                {game.prices.discount > 0 && `-${game.prices.discount}%`}
              </Tag>
            )}
          </CardTags>
        </CardHeader>
        <CardBody>

          <CardTitle>
            <h2>
              {game.name}
            </h2>
          </CardTitle>

          <CardDescription>
            <p>
              {game.description.length > 100 ? `${game.description.substring(0, 100)}...` : game.description}
            </p>
            <div>
              <CardCategory>
                <Tag color="blue" size="sm" >
                  {game.details.category}
                </Tag>
              </CardCategory>
              {game.details.rating && (
                <CardStars>
                  <span>
                    <FaStar />
                    {game.details.rating}
                  </span>
                </CardStars>
              )}
            </div>
          </CardDescription>

        </CardBody>
        <CardFooter>
          {game.release_date === 'COMING SOON' ? (
            <div>
              <CardPrice>Em Breve</CardPrice>
            </div>
          ) : (
            <div>
              <CardPrice>{formatToBRL(game.prices.current)}</CardPrice>
            </div>
          )}
          <CardButtonDiv>
            <Button href={`/gameDetails/${game.id}`} title={`Ver ${game.name}`}>
              <TbListDetails />
              Detalhes
            </Button>

            {game.release_date === 'COMING SOON' ? (
              <Button title="Em Breve" disabled>
                <FaHourglassHalf />
                Em Breve
              </Button>
            ) : isInCart ? (
              <Button title={`${game.name} já está no carrinho`} disabled>
                <FaThumbsUp />
                No carrinho
              </Button>
            ) : (
              <Button onClick={() => { dispatch(addToCart(mapGameToCartItem(game))); toast.success(`${game.name} Adicionado ao carrinho com sucesso!`) }} title={`Adicionar ${game.name} ao carrinho`}>
                <HiShoppingCart />
                Comprar
              </Button>
            )}

          </CardButtonDiv>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
