'use client'

import Section from "@/components/ui/Section/Section"
import { Card } from "../Card/Card"
import { CardSkeleton } from "../Card/CardSkeleton"
import { SoonGamesListContainer, SoonGamesListContent } from "./SoonGamesStyles"

interface SoonGamesProps {
  $bgColor: 'light' | 'dark'
  soonGames: GameType[]
  title: string
  isLoading?: boolean
  id: string
}

export const SoonGamesList = ({ $bgColor, soonGames, title, isLoading, id }: SoonGamesProps) => {
  return (
    <SoonGamesListContainer id={id}>
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <SoonGamesListContent>
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            soonGames.slice(0, 3).map((soonGames) => (
              <Card game={soonGames} key={soonGames.id} $bgColor={$bgColor} />
            ))
          )}
        </SoonGamesListContent>
      </Section>
    </SoonGamesListContainer>
  );
};

