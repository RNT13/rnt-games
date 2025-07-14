import { OverlayDarck } from "@/styles/globalStyles"
import { GameType } from "@/types/GameType"
import { Button } from "../Button/Button"
import { Tag } from "../Tag/Tag"
import { ButtonDiv, HeroContainer, HeroImage, HeroImageContent, InfoDiv, TagDiv } from "./HeroStyles"

type HeroProps = {
  game: GameType
}

export const Hero = ({ game }: HeroProps) => {
  return (
    <>
      {game.destaque && (
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
              <Button title={"Ver catálogo"}></Button>
              <Button title={"Adicionar ao carrinho"}></Button>
            </ButtonDiv>
          </HeroImageContent>
        </HeroContainer>
      )}
    </>
  )
}
