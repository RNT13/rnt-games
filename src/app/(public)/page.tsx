'use client'

import Footer from "@/components/layout/Footer/Footer"
import Header from "@/components/layout/Header/Header"
import Section from "@/components/layout/Section/Section"
import { Gamelist } from "@/components/ui/GameList/GameList"
import { Hero } from "@/components/ui/Hero/Hero"
import { games } from "@/models/gameModels"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gamelist title={"Game"} $bgColor={"dark"} games={games} />
      <Section title="Seção 1" $bgColor="light">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad optio ipsam quis ipsum numquam veritatis repellendus unde architecto consectetur repudiandae nam quaerat deleniti exercitationem doloremque, nostrum consequatur accusamus! Amet!</p>
      </Section>
      <Section title="Seção 2" $bgColor="dark">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, minima id totam et enim, qui cupiditate necessitatibus ea alias sequi labore. Quisquam aspernatur obcaecati ex adipisci quibusdam minima ea?</p>
      </Section>
      <Section title="Seção 3" $bgColor="light">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere iusto voluptatum, nesciunt amet accusamus, sint perspiciatis voluptatibus labore suscipit reprehenderit, dolore deserunt autem asperiores recusandae velit necessitatibus mollitia ullam! Odit!</p>
      </Section>
      <Section title="Seção 2" $bgColor="dark">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, minima id totam et enim, qui cupiditate necessitatibus ea alias sequi labore. Quisquam aspernatur obcaecati ex adipisci quibusdam minima ea?</p>
      </Section>
      <Footer />
    </>
  )
}
