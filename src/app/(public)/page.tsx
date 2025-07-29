'use client'

import { Category } from "@/components/ui/Category/Category";
import { ErrorMessage } from "@/components/ui/ErrorMessage/ErrorMessage";
import { Gamelist } from "@/components/ui/GameList/GameList";
import { Hero } from "@/components/ui/Hero/Hero";
import { HeroSkeleton } from "@/components/ui/Hero/HeroSkeleton";
import { SoonGamesList } from "@/components/ui/SoonGames/SoonGames";
import { getCategoriesFromGames } from "@/hooks/getCategoriesFromGames";
import { useGetFeaturedGameQuery, useGetGamesListQuery, useGetSoonGamesListQuery } from "@/redux/slices/apiSlice";


export default function Home() {

  const { data: gamesList = [], isLoading: isGamelistLoading, error: gamesListError } = useGetGamesListQuery()
  const { data: soonGamesList = [], isLoading: isSoonGamesListLoading, error: soonGamesListError } = useGetSoonGamesListQuery()
  const { data: featuredGame, isLoading: isFeaturedGameLoading, error: featuredGameError } = useGetFeaturedGameQuery()



  return (
    <div>
      {featuredGameError ? (
        <ErrorMessage message="Erro ao carregar jogo em destaque." />
      ) : isFeaturedGameLoading ? (
        <HeroSkeleton />
      ) : (
        featuredGame && <Hero game={featuredGame} id="home" />
      )}

      {gamesListError ? (
        <ErrorMessage message="Erro ao carregar a lista de jogos." />
      ) : (
        <Gamelist title="Todos os Jogos" $bgColor="dark" allGames={gamesList} isLoading={isGamelistLoading} id="allGames"
        />
      )}

      {soonGamesListError ? (
        <ErrorMessage message="Erro ao carregar jogos em breve" />
      ) : (
        <SoonGamesList title="Jogos em breve" $bgColor="light" soonGames={soonGamesList} isLoading={isSoonGamesListLoading} id="soonGames" />
      )}

      {gamesListError ? (
        <ErrorMessage message="Erro ao carregar categorias dos jogos" />
      ) : (
        <Category title="Categorias" $bgColor="light" categoryList={getCategoriesFromGames(gamesList)} isLoading={isGamelistLoading} id="category" />
      )}

    </div >
  )
}
