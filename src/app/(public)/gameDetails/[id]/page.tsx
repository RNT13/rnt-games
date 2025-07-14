'use client'

import { Button } from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import { Tag } from "@/components/ui/Tag/Tag";
import { OverlayDarck, TitleH2, TitleH3 } from "@/styles/globalStyles";
import { HiShoppingCart } from "react-icons/hi";
import { DetailsContainer, DetailsContent, DetailsHero, DetailsHeroContainer, DetailsHeroInfo, HeroImage, TagDiv } from "./gameDetailsStyles";

export default function GameDetails() {
  return (
    <DetailsContainer>
      <DetailsHero>
        <OverlayDarck />
        <HeroImage src="/rnt-games-hero.png" alt="Banner principal do site RNT Games" width={1920} height={1080} />
        <DetailsHeroContainer className="container">
          <TagDiv>
            <Tag size="md" color="blue">tipo do jogo</Tag>
            <Tag size="md" color="green">Plataforma do jogo</Tag>
          </TagDiv>
          <DetailsHeroInfo >
            <TitleH2>Nome do jogo</TitleH2>
            <TitleH3><span>de R$ 199</span> <br /> por R$ 99</TitleH3>
            <Button title="Adicionar ao carrinho">
              <HiShoppingCart />
            </Button>
          </DetailsHeroInfo>
        </DetailsHeroContainer>
      </DetailsHero>
      <DetailsContent >
        <Section $bgColor="dark" title="Sobre o jogo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam molestiae minus omnis, assumenda corrupti harum accusantium dolore dicta ut delectus asperiores odit eum vero doloremque provident, eveniet dolores unde?</p>
        </Section>
        <Section $bgColor="light" title="Mais informações">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam molestiae minus omnis, assumenda corrupti harum accusantium dolore dicta ut delectus asperiores odit eum vero doloremque provident, eveniet dolores unde?</p>
        </Section>
        <Section $bgColor="dark" title="Galeria"></Section>
      </DetailsContent>
    </DetailsContainer >
  )
}
