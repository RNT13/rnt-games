import { GameType } from "@/types/GameType"
import { FaStar } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { Button } from "../Button/Button"
import { Tag } from "../Tag/Tag"
import { CardBody, CardCategory, CardContainer, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardPrice, CardStars, CardTags, CardTitle } from "./CardStyles"

interface CardProps {
  game: GameType
  $bgColor: 'light' | 'dark'
}

export const Card = ({ game, $bgColor }: CardProps) => {
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
          <div>
            <Button href="/gameDetails/:id" title="Ver jogo" />
            <Button title="">
              <HiShoppingCart />
            </Button>
          </div>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
