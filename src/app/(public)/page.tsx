'use client'

import { Category } from "@/components/ui/Category/Category";
import { ComingSoonGamesList } from "@/components/ui/ComingSoonGames/ComingSoonGames";
import { Gamelist } from "@/components/ui/GameList/GameList";
import { Hero } from "@/components/ui/Hero/Hero";
import { getCategoriesFromGames } from "@/hooks/getCategoriesFromGames";
import { useGetFeaturedGameQuery, useGetGamesListQuery, useGetSoonGamesListQuery } from "@/redux/slices/apiSlice";


export default function Home() {

  const { data: gamesList = [], isLoading: isGamesLoading } = useGetGamesListQuery()
  const { data: soonGamesList = [], isLoading: isSoonGamesLoading } = useGetSoonGamesListQuery()
  const { data: getFeaturedGame } = useGetFeaturedGameQuery()

  return (
    <div>
      <section id="home">
        {getFeaturedGame && <Hero game={getFeaturedGame} />}
      </section>
      <section id="games">
        {!isGamesLoading && (
          <Gamelist title="Games" $bgColor="light" allGames={gamesList} />
        )}
      </section>
      <section id="coming-soon">
        {!isSoonGamesLoading && (
          <ComingSoonGamesList title="Em Breve" $bgColor="dark" soonGames={soonGamesList} />
        )}
      </section>
      <section id="category">
        {!isGamesLoading && (
          <Category title="Categorias" $bgColor="light" categoryList={getCategoriesFromGames(gamesList)} />
        )}
      </section>
    </div>
  )
}
