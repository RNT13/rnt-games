'use client'

import { Category } from "@/components/ui/Category/Category";
import { Gamelist } from "@/components/ui/GameList/GameList";
import { Hero } from "@/components/ui/Hero/Hero";
import { HeroSkeleton } from "@/components/ui/Hero/HeroSkeleton";
import { SoonGamesList } from "@/components/ui/SoonGames/SoonGames";
import { getCategoriesFromGames } from "@/hooks/getCategoriesFromGames";
import { useGetFeaturedGameQuery, useGetGamesListQuery, useGetSoonGamesListQuery } from "@/redux/slices/apiSlice";


export default function Home() {

  const { data: gamesList = [], isLoading: isGamelistLoading, isFetching: isGamesFetching } = useGetGamesListQuery()
  const { data: soonGamesList = [], isLoading: isSoonGamesListLoading, isFetching: isSoonGamesFetching } = useGetSoonGamesListQuery()
  const { data: getFeaturedGame, isLoading: isFeaturedGameLoading, isFetching: isFeaturedGameFetching } = useGetFeaturedGameQuery()

  const isLoading = isGamelistLoading || isSoonGamesListLoading || isGamesFetching || isSoonGamesFetching || isFeaturedGameLoading || isFeaturedGameFetching

  return (
    <div>
      <section id="home">
        {isFeaturedGameLoading ? (<HeroSkeleton />) : (getFeaturedGame && <Hero game={getFeaturedGame} />)}
      </section>
      <section id="games">
        {gamesList && (<Gamelist title="Games" $bgColor="light" allGames={gamesList} isLoading={isLoading} />)}
      </section>
      <section id="SoonGames">
        {soonGamesList && (<SoonGamesList title="Em Breve" $bgColor="dark" soonGames={soonGamesList} isLoading={isLoading} />)}
      </section>
      <section id="category">
        {gamesList && (<Category title="Categorias" $bgColor="light" categoryList={getCategoriesFromGames(gamesList)} isLoading={isLoading} />)}
      </section>
    </div>
  )
}
