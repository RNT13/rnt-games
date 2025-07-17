'use client'

import { Category } from "@/components/ui/Category/Category";
import { ComingSoonGamesList } from "@/components/ui/ComingSoonGames/ComingSoonGames";
import { Gamelist } from "@/components/ui/GameList/GameList";
import { Hero } from "@/components/ui/Hero/Hero";
import { getCategoriesFromGames } from "@/hooks/getCategoriesFromGames";
import { allGames, games, soonGames } from "@/models/gameModels";
import { GameType } from '@/types/GameType';
import { useEffect, useState } from 'react';
import Loading from "../loading";

export default function Home() {
  const [featuredGame, setFeaturedGame] = useState<GameType | null>(null)

  useEffect(() => {
    const destaqueGames = allGames.filter(allGames => allGames.destaque)
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
        <Gamelist title="Games" $bgColor="light" allGames={allGames} />
      </section>
      <section id="coming-soon">
        <ComingSoonGamesList title="Em Breve" $bgColor="dark" soonGames={soonGames} />
      </section>
      <section id="category">
        <section id="category">
          <Category title="Categorias" $bgColor="light" categoryList={getCategoriesFromGames(games)} />
        </section>
      </section>
    </div>
  )
}
