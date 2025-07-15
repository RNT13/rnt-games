import NotFound from "@/app/not-found";
import Details from "@/components/ui/Details/Details";
import { games } from "@/models/gameModels";

type detailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GameDetails({ params }: detailsProps) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <NotFound />;
  }

  return (
    <Details game={game} />
  )
}
