'use client'

import { Category } from "@/components/ui/Category/Category";
import { ErrorMessage } from "@/components/ui/ErrorMessage/ErrorMessage";
import { Gamelist } from "@/components/ui/GameList/GameList";
import { Hero } from "@/components/ui/Hero/Hero";
import { HeroSkeleton } from "@/components/ui/Hero/HeroSkeleton";
import { SoonGamesList } from "@/components/ui/SoonGames/SoonGames";
import { getCategoriesFromGames } from "@/hooks/getCategoriesFromGames";
import { useGetFeaturedGameQuery, useGetGamesListQuery, useGetUpcomingGamesQuery } from "@/redux/slices/apiSlice";


export default function Home() {
  const { data: gamesList = [], isLoading: isGamesListLoading, error: gamesListError } = useGetGamesListQuery();
  const { data: featuredGame, isLoading: isFeaturedGameLoading, error: featuredGameError } = useGetFeaturedGameQuery();
  const { data: soonGamesList = [], isLoading: isSoonGamesListLoading, error: soonGamesListError } = useGetUpcomingGamesQuery();


  return (
    <div>
      {featuredGameError ? (
        <ErrorMessage message="Erro ao carregar jogo em destaque." />
      ) : isFeaturedGameLoading ? (
        <HeroSkeleton />
      ) : (
        !featuredGame ? null : <Hero game={featuredGame} id="home" />
      )}

      {gamesListError ? (
        <ErrorMessage message="Erro ao carregar a lista de jogos." />
      ) : (
        <Gamelist title="Todos os Jogos" $bgColor="dark" allGames={gamesList} isLoading={isGamesListLoading} id="allGames"
        />
      )}

      {soonGamesListError ? (
        <ErrorMessage message="Erro ao carregar Em breve" />
      ) : (
        <SoonGamesList title="Em breve" $bgColor="light" soonGames={soonGamesList} isLoading={isSoonGamesListLoading} id="soonGames" />
      )}

      {gamesListError ? (
        <ErrorMessage message="Erro ao carregar categorias dos jogos" />
      ) : (
        <Category title="Categorias" $bgColor="light" categoryList={getCategoriesFromGames(gamesList)} isLoading={isGamesListLoading} id="category" />
      )}

    </div >
  )
}
