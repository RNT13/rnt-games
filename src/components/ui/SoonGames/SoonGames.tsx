'use client'

import Section from "@/components/ui/Section/Section"
import { GameType } from "@/types/GameType"
import { Card } from "../Card/Card"
import { CardSkeleton } from "../Card/CardSkeleton"
import { SoonGamesListContainer, SoonGamesListContent } from "./SoonGamesStyles"

interface SoonGamesProps {
  $bgColor: 'light' | 'dark'
  soonGames: GameType[]
  id?: string
  title: string
  isLoading?: boolean
}

export const SoonGamesList = ({ $bgColor, soonGames, title, isLoading }: SoonGamesProps) => {
  return (
    <SoonGamesListContainer>
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

