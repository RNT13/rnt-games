import { addToCart } from "@/redux/slices/cartSlice"
import { RootState } from "@/redux/store"
import { GameType } from "@/types/GameType"
import { mapGameToCartItem } from "@/utils/cartHelper"
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
              {game.details.category}
            </Tag>
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
              <CardPrice>R${game.prices.current.toFixed(2).replace('.', ',')}</CardPrice>
            </div>
          )}
          <CardButtonDiv>
            <Button href={`/gameDetails/${game.id}`} title="Detalhes" >
              <TbListDetails />
            </Button>

            {game.release_date === 'COMING SOON' ? (
              <Button title="Em Breve" disabled>
                <FaHourglassHalf />
              </Button>
            ) : isInCart ? (
              <Button title="No carrinho" disabled>
                <FaThumbsUp />
              </Button>
            ) : (
              <Button onClick={() => dispatch(addToCart(mapGameToCartItem(game)))} title="Comprar">
                <HiShoppingCart />
              </Button>
            )}

          </CardButtonDiv>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
