'use client'

import Footer from "@/components/layout/Footer/Footer"
import Header from "@/components/layout/Header/Header"
import { Category } from "@/components/ui/Category/Category"
import { ComingSoonGamesList } from "@/components/ui/ComingSoonGames/ComingSoonGames"
import { Gamelist } from "@/components/ui/GameList/GameList"
import { Hero } from "@/components/ui/Hero/Hero"
import { SoonGames, games, mockCategories } from "@/models/gameModels"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gamelist title="Games" $bgColor={"light"} games={games} />
      <ComingSoonGamesList title="Coming Soon" $bgColor={"dark"} soonGames={SoonGames} />
      <Category title="Category" $bgColor="light" categories={mockCategories} />
      <Footer />
    </>
  )
}
