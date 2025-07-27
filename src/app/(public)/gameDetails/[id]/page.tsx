'use client';

import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import Details from "@/components/ui/Details/Details";
import { useGetGameByIdQuery } from "@/redux/slices/apiSlice";
import { use } from "react";

type DetailsProps = {
  params: Promise<{ id: string }>
};

export default function GameDetails({ params }: DetailsProps) {
  const { id } = use(params);
  const { data: game, isLoading } = useGetGameByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!game) {
    return <NotFound />;
  }

  return <Details game={game} />;

}
