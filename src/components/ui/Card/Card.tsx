import { GameType } from "@/types/GameType"
import { FaStar } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { Button } from "../Button/Button"
import { Tag } from "../Tag/Tag"
import { CardBody, CardCategory, CardContainer, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardPrice, CardStars, CardTags, CardTitle } from "./CardStyles"

type CardProps = {
  game: GameType
}

export const Card = ({ game }: CardProps) => {
  console.log(game)
  return (
    <CardContainer>
      <CardContent>
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
              {game.description}
            </p>
            <div>
              <CardCategory>
                <Tag color="blue" size="sm" >
                  {game.details.category}
                </Tag>
              </CardCategory>
              <CardStars>
                <span>
                  <FaStar />
                  {game.details.rating}
                </span>
              </CardStars>
            </div>
          </CardDescription>

        </CardBody>
        <CardFooter>
          <div>
            <CardPrice>R${game.prices.current.toFixed(2).replace('.', ',')}</CardPrice>
          </div>
          <div>
            <Button title="Ver jogo" />
            <Button title="">
              <HiShoppingCart />
            </Button>
          </div>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
