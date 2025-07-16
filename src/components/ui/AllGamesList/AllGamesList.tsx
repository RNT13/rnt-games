'use client'

import { Card } from "@/components/ui/Card/Card";
import Section from "@/components/ui/Section/Section";
import { TitleH2 } from "@/styles/globalStyles";
import { GameType } from "@/types/GameType";
import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button";
import { AllGamesContainer, AllGamesContent, AllGamesNav, NavSearchBar, NavUl, NavWrapper, SeachButton, SectionCardWrapper } from "./AllGamesListStyles";

type AllGamesProps = {
  games: GameType[]
  soonGames: GameType[]
}

export default function AllGames({ games, soonGames }: AllGamesProps) {
  return (
    <AllGamesContainer >
      <AllGamesContent >
        <TitleH2>Veja todos os jogos</TitleH2>
        <AllGamesNav className="container">
          <NavUl>
            <li><Button href="/allGames#games" title="Games" /></li>
            <li><Button href="/allGames#coming-soon" title="Em Breve" /></li>
            <li><Button href="/#category" title="Categorias" /></li>
          </NavUl>
          <NavSearchBar>
            <NavWrapper>
              <input name="search" type="text" placeholder="Pesquisar" />
              <SeachButton name="search" type="submit" >
                <FaSearch />
              </SeachButton>
            </NavWrapper>
          </NavSearchBar>
        </AllGamesNav>
        <Section className="firstSection" $bgColor="light" title="Games">
          <SectionCardWrapper>
            {games.map((game) => (<Card key={game.id} game={game} $bgColor="light" />))}
          </SectionCardWrapper>
        </Section>
        <Section $bgColor="dark" title="Em Breve" >
          <SectionCardWrapper>
            {soonGames.map((game) => (<Card key={game.id} game={game} $bgColor="dark" />))}
          </SectionCardWrapper>
        </Section>
        <Section id="aventura" $bgColor="light" title="Aventura" />
        <Section id="acao" $bgColor="dark" title="Ação" />
        <Section id="rpg" $bgColor="light" title="RPG" />
        <Section id="plataforma" $bgColor="dark" title="Plataforma" />
        <Section id="corrida" $bgColor="light" title="Corrida" />
        <Section id="esporte" $bgColor="dark" title="Esporte" />
        <Section id="estrategia" $bgColor="light" title="Estratégia" />
        <Section id="simulacao" $bgColor="dark" title="Simulação" />
        <Section id="outro" $bgColor="light" title="Outro" />
      </AllGamesContent >
    </AllGamesContainer >
  )
}
