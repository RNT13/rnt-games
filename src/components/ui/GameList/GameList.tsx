import Section from "@/components/layout/Section/Section"
import { GameType } from "@/types/GameType"
import { Card } from "../Card/Card"
import { GameListContainer, GameListContent } from "./GameListStyles"

type GameListProps = {
  title: string
  $bgColor: 'light' | 'dark'
  games: GameType[]
  id?: string
}

export const Gamelist = ({ title, $bgColor, games }: GameListProps) => {
  return (
    <GameListContainer>
      <Section title={title} $bgColor={$bgColor}  >
        <GameListContent>
          {games.map((game) => (
            <Card game={game} key={game.id} />
          ))}
        </GameListContent>
      </Section>
    </GameListContainer>
  );
};

