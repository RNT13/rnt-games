import Section from "@/components/ui/Section/Section"
import { GameType } from "@/types/GameType"
import { Card } from "../Card/Card"
import { GameListContainer, GameListContent } from "./GameListStyles"

interface GameListProps {
  $bgColor: 'light' | 'dark'
  games: GameType[]
  id?: string
  title: string
}

export const Gamelist = ({ $bgColor, games, title }: GameListProps) => {
  return (
    <GameListContainer>
      <Section $bgColor={$bgColor} href="/allGames" title={title}>
        <GameListContent>
          {games.slice(0, 4).map((game) => (
            <Card key={game.id} game={game} $bgColor={$bgColor} />
          ))}
        </GameListContent>
      </Section>
    </GameListContainer>
  );
};

