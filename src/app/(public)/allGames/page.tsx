'use client'

import AllGamesList from "@/components/ui/AllGamesList/AllGamesList";
import { useGetGamesListQuery, useGetSoonGamesListQuery } from "@/redux/slices/apiSlice";

export default function AllGames() {
  const { data: gamesList = [] } = useGetGamesListQuery()
  const { data: soonGamesList = [] } = useGetSoonGamesListQuery()


  return (
    <AllGamesList games={gamesList} soonGames={soonGamesList} />
  )
}
