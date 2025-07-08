import Section from "@/components/layout/Section/Section"
import { GameType } from "@/types/GameType"
import { Card } from "../Card/Card"
import { ComingSoonGamesListContainer, ComingSoonGamesListContent } from "./ComingSoonGamesStyles"

interface ComingSoonGamesProps {
  $bgColor: 'light' | 'dark'
  soonGames: GameType[]
  id?: string
  title: string
}

export const ComingSoonGamesList = ({ $bgColor, soonGames, title }: ComingSoonGamesProps) => {
  return (
    <ComingSoonGamesListContainer>
      <Section $bgColor={$bgColor} href="/#" title={title}>
        <ComingSoonGamesListContent>
          {soonGames.slice(0, 3).map((SoonGames) => (
            <Card game={SoonGames} key={SoonGames.id} $bgColor={$bgColor} />
          ))}
        </ComingSoonGamesListContent>
      </Section>
    </ComingSoonGamesListContainer>
  );
};

