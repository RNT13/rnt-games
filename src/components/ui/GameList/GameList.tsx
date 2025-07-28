import Section from "@/components/ui/Section/Section"
import { GameType } from "@/types/GameType"
import { Card } from "../Card/Card"
import { CardSkeleton } from "../Card/CardSkeleton"
import { GameListContainer, GameListContent } from "./GameListStyles"

interface GameListProps {
  $bgColor: 'light' | 'dark'
  allGames: GameType[]
  id: string
  title: string
  isLoading?: boolean
}

export const Gamelist = ({ $bgColor, allGames, title, isLoading, id }: GameListProps) => {
  return (
    <GameListContainer id={id}>
      <Section $bgColor={$bgColor} href="/allGames" title={title} >
        <GameListContent>
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            allGames.slice(0, 4).map((game) => (<Card key={game.id} game={game} $bgColor={$bgColor} />))
          )}
        </GameListContent>
      </Section>
    </GameListContainer>
  );
};

