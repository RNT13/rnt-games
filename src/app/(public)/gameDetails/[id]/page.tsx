import NotFound from "@/app/not-found";
import Details from "@/components/ui/Details/Details";
import { games } from "@/models/gameModels";

type detailsProps = {
  params: {
    id: string
  }
}

export default function GameDetails({ params }: detailsProps) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    return <NotFound />;
  }

  return (
    <Details game={game} />
  )
}
