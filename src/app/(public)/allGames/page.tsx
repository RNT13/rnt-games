import AllGamesList from "@/components/ui/AllGamesList/AllGamesList";
import { games, soonGames } from "@/models/gameModels";

export default function AllGames() {
  return (
    <AllGamesList games={games} soonGames={soonGames} />
  )
}
