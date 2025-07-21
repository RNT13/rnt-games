'use client'

import Loading from "@/app/loading";
import AllGamesList from "@/components/ui/AllGamesList/AllGamesList";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { fetchGames, fetchSoonGames } from "@/redux/slices/gameSlice";
import { useEffect } from "react";

export default function AllGames() {
  const dispatch = useAppDispatch()

  const { gamesList, soonGamesList, loading } = useAppSelector(state => state.games)

  useEffect(() => {
    dispatch(fetchGames())
    dispatch(fetchSoonGames())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  return (
    <AllGamesList games={gamesList} soonGames={soonGamesList} />
  )
}
