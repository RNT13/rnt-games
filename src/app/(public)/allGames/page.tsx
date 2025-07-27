'use client'

import AllGamesList from "@/components/ui/AllGamesList/AllGamesList";
import { useGetGamesListQuery, useGetSoonGamesListQuery } from "@/redux/slices/apiSlice";


export default function AllGames() {
  const { data: gamesList = [], isLoading: isGamesLoading, isFetching: isGamesFetching } = useGetGamesListQuery();

  const { data: soonGamesList = [], isLoading: isSoonLoading, isFetching: isSoonFetching } = useGetSoonGamesListQuery();

  const isLoading = isGamesLoading || isSoonLoading || isGamesFetching || isSoonFetching;

  return (
    <AllGamesList games={gamesList} soonGames={soonGamesList} isLoading={isLoading} />
  );
}


