import NotFound from "@/app/not-found";
import Details from "@/components/ui/Details/Details";
import { allGames } from "@/models/gameModels";

export type detailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GameDetails({ params }: detailsProps) {
  const { id } = await params;
  const game = allGames.find((g) => g.id === id);

  if (!game) {
    return <NotFound />;
  }

  return (
    <Details game={game} />
  )
}
