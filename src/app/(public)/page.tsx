'use client'

import { Category } from "@/components/ui/Category/Category";
import { ComingSoonGamesList } from "@/components/ui/ComingSoonGames/ComingSoonGames";
import { Gamelist } from "@/components/ui/GameList/GameList";
import { Hero } from "@/components/ui/Hero/Hero";
import { getCategoriesFromGames } from "@/hooks/getCategoriesFromGames";
import Loading from "../loading";

import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { fetchGames, fetchSoonGames } from "@/redux/slices/gameSlice";
import { GameType } from "@/types/GameType";
import { useEffect, useState } from 'react';

export default function Home() {
  const dispatch = useAppDispatch()

  const { gamesList, soonGamesList, loading } = useAppSelector(state => state.games)
  const [highlightedGame, setHighlightedGame] = useState<GameType | null>(null)

  useEffect(() => {
    dispatch(fetchGames())
    dispatch(fetchSoonGames())

  }, [dispatch])

  useEffect(() => {
    if (gamesList.length > 0) {
      const discountedGames = gamesList.filter(game => game.prices.discount > 0)
      const randomIndex = Math.floor(Math.random() * discountedGames.length)
      setHighlightedGame(discountedGames[randomIndex])
    }
  }, [gamesList])


  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <section id="home">
        {highlightedGame && <Hero game={highlightedGame} />}
      </section>
      <section id="games">
        <Gamelist title="Games" $bgColor="light" allGames={gamesList} />
      </section>
      <section id="coming-soon">
        <ComingSoonGamesList title="Em Breve" $bgColor="dark" soonGames={soonGamesList} />
      </section>
      <section id="category">
        <Category title="Categorias" $bgColor="light" categoryList={getCategoriesFromGames(gamesList)} />
      </section>
    </div>
  )
}
