import NotFound from "@/app/not-found";
import Details from "@/components/ui/Details/Details";
import { getGameById } from "@/services/api";

type DetailsProps = {
  params: {
    id: string
  }
};

export default async function GameDetails({ params }: DetailsProps) {
  try {
    const game = await getGameById(params.id);

    if (!game) {
      return <NotFound />;
    }

    return <Details game={game} />;
  } catch {
    return <NotFound />;
  }
}
