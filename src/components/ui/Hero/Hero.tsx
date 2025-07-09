import { OverlayDarck } from "@/styles/globalStyles"
import { Button } from "../Button/Button"
import { ButtonDiv, HeroContainer, HeroImage, HeroImageContent, InfoDiv, TagDiv } from "./HeroStyles"

export const Hero = () => {
  return (
    <HeroContainer aria-label="Seção principal de destaque" >
      <OverlayDarck />
      <HeroImage src="/rnt-games-hero.png" alt="Banner principal do site RNT Games" width={1920} height={1080} />
      <HeroImageContent className="container">
        <TagDiv>
          <span>RS 199</span>
          <span>-25%</span>
        </TagDiv>
        <InfoDiv>
          <h2>Nome do Jogo</h2>
          <p>Descrição do jogo com 2 linhas Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum aliquid facilis libero id magnam in repellendus ut. Eaque cupiditate reiciendis sunt consequatur porro iste architecto fugit quam nemo voluptas.</p>
        </InfoDiv>
        <ButtonDiv>
          <Button title={"Ver catálogo"}></Button>
          <Button title={"Adicionar ao carrinho"}></Button>
        </ButtonDiv>
      </HeroImageContent>
    </HeroContainer>
  )
}
