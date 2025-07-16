import Section from "@/components/ui/Section/Section"
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
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <ComingSoonGamesListContent>
          {soonGames.slice(0, 3).map((soonGames) => (
            <Card game={soonGames} key={soonGames.id} $bgColor={$bgColor} />
          ))}
        </ComingSoonGamesListContent>
      </Section>
    </ComingSoonGamesListContainer>
  );
};

