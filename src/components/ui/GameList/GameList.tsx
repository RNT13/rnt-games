import Section from "@/components/layout/Section/Section"
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
      <Section $bgColor={$bgColor} href="/#" title={title}>
        <GameListContent>
          {games.slice(0, 8).map((game) => (
            <Card game={game} key={game.id} $bgColor={$bgColor} />
          ))}
        </GameListContent>
      </Section>
    </GameListContainer>
  );
};

