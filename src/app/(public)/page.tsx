'use client'

import { Category } from "@/components/ui/Category/Category"
import { ComingSoonGamesList } from "@/components/ui/ComingSoonGames/ComingSoonGames"
import { Gamelist } from "@/components/ui/GameList/GameList"
import { Hero } from "@/components/ui/Hero/Hero"
import { SoonGames, games, mockCategories } from "@/models/gameModels"

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="games">
        <Gamelist title="Games" $bgColor={"light"} games={games} />
      </section>
      <section id="coming-soon">
        <ComingSoonGamesList title="Coming Soon" $bgColor={"dark"} soonGames={SoonGames} />
      </section>
      <section id="category">
        <Category title="Category" $bgColor="light" categories={mockCategories} />
      </section>
    </div >
  )
}
