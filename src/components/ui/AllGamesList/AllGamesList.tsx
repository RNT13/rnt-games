'use client'

import { Card } from "@/components/ui/Card/Card";
import Section from "@/components/ui/Section/Section";
import { TitleH2 } from "@/styles/globalStyles";
import { ChangeEvent, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "../Button/Button";
import { CardSkeleton } from "../Card/CardSkeleton";
import { AllGamesContainer, AllGamesContent, AllGamesNav, NavSearchBar, NavUl, NavWrapper, SeachButton, SectionCardWrapper } from "./AllGamesListStyles";

type AllGamesProps = {
  games: GameType[]
  soonGames: GameType[]
  isLoading?: boolean
}


export default function AllGamesList({ games, soonGames, isLoading }: AllGamesProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = useMemo(() => {
    if (!searchTerm.trim()) return []
    return games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm, games])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <AllGamesContainer >
      <AllGamesContent >
        <TitleH2>Veja todos os jogos</TitleH2>
        <div className="container">
          <AllGamesNav >

            <NavUl>
              {Array.from(new Set(games.map(game => game.details.category)))
                .map((category) => {
                  const id = category.toLowerCase().replace(/\s/g, "-");
                  return (
                    <li key={id}>
                      <Button
                        href={`/allGames#${id}`}
                        title={category}
                      >{category}</Button>
                    </li>
                  );
                })}
            </NavUl>

            <NavSearchBar>
              <NavWrapper>
                <input
                  name="search"
                  type="text"
                  placeholder="Pesquisar"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <SeachButton name="search" type="submit">
                  <FaSearch />
                </SeachButton>
              </NavWrapper>
            </NavSearchBar>
          </AllGamesNav>
        </div>

        {/* mostra jogos filtrados */}
        {filteredGames.length > 0 && (
          <Section $bgColor="dark" title={`Resultados para "${searchTerm}"`}>
            <SectionCardWrapper>
              {filteredGames.map((game) => (
                <Card key={game.id} game={game} $bgColor="dark" />
              ))}
            </SectionCardWrapper>
          </Section>
        )}

        {/* mostra jogos por categoria */}
        {generateCategorySections({ games, soonGames, isLoading })}

      </AllGamesContent >
    </AllGamesContainer >
  )
}

function generateCategorySections({ games, isLoading }: AllGamesProps) {
  const gamesByCategory: Record<string, GameType[]> = {}

  games.forEach((game) => {
    const category = game.details.category.toLowerCase()
    if (!gamesByCategory[category]) gamesByCategory[category] = []
    gamesByCategory[category].push(game)
  })

  return Object.entries(gamesByCategory).map(([category, games], index) => {
    const isDark = index % 2 === 1
    const id = category.toLowerCase().replace(/\s/g, "-")

    return (
      <section key={id} id={id} >
        <Section $bgColor={isDark ? "dark" : "light"} title={capitalize(category)}>
          <SectionCardWrapper>
            {isLoading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              games.map((game) => (
                <Card key={game.id} game={game} $bgColor={isDark ? "dark" : "light"} />
              ))
            )}
          </SectionCardWrapper>
        </Section>
      </section>
    )
  })
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
