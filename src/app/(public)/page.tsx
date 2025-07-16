'use client'

import { Category } from "@/components/ui/Category/Category"
import { ComingSoonGamesList } from "@/components/ui/ComingSoonGames/ComingSoonGames"
import { Gamelist } from "@/components/ui/GameList/GameList"
import { Hero } from "@/components/ui/Hero/Hero"
import { games, mockCategories, soonGames } from "@/models/gameModels"
import { GameType } from '@/types/GameType'
import { useEffect, useState } from 'react'
import Loading from "../loading"

export default function Home() {
  const [featuredGame, setFeaturedGame] = useState<GameType | null>(null)

  useEffect(() => {
    const destaqueGames = games.filter(game => game.destaque)
    const randomIndex = Math.floor(Math.random() * destaqueGames.length)
    setFeaturedGame(destaqueGames[randomIndex])
  }, [])

  if (!featuredGame) {
    return <Loading />
  }

  return (
    <div>
      <section id="home">
        {featuredGame && <Hero game={featuredGame} />}
      </section>
      <section id="games">
        <Gamelist title="Games" $bgColor="light" games={games} />
      </section>
      <section id="coming-soon">
        <ComingSoonGamesList title="Em Breve" $bgColor="dark" soonGames={soonGames} />
      </section>
      <section id="category">
        <Category title="Categorias" $bgColor="light" categories={mockCategories} />
      </section>
    </div>
  )
}
