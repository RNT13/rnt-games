import Section from "@/components/ui/Section/Section"
import { GameType } from "@/types/GameType"
import { Card } from "../Card/Card"
import { GameListContainer, GameListContent } from "./GameListStyles"

interface GameListProps {
  $bgColor: 'light' | 'dark'
  allGames: GameType[]
  id?: string
  title: string
}

export const Gamelist = ({ $bgColor, allGames, title }: GameListProps) => {
  return (
    <GameListContainer>
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <GameListContent>
          {allGames.slice(0, 4).map((allGames) => (
            <Card key={allGames.id} game={allGames} $bgColor={$bgColor} />
          ))}
        </GameListContent>
      </Section>
    </GameListContainer>
  );
};

