'use client'

import AllGamesList from "@/components/ui/AllGamesList/AllGamesList";
import { ErrorMessage } from "@/components/ui/ErrorMessage/ErrorMessage";
import { useGetGamesListQuery, useGetUpcomingGamesQuery } from "@/redux/slices/apiSlice";


export default function AllGames() {
  const { data: gamesList = [], isLoading: isGamesLoading, isFetching: isGamesFetching, error: gamesListError } = useGetGamesListQuery();

  const { data: soonGamesList = [], isLoading: isSoonLoading, isFetching: isSoonFetching, error: soonGamesError } = useGetUpcomingGamesQuery();

  const isLoading = isGamesLoading || isSoonLoading || isGamesFetching || isSoonFetching;
  const hasError = !!gamesListError || !!soonGamesError;


  return hasError ? (
    <ErrorMessage message="Erro ao carregar os jogos. Tente novamente mais tarde." />
  ) : (
    <AllGamesList
      games={gamesList}
      soonGames={soonGamesList}
      isLoading={isLoading}
    />
  );

}


