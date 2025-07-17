// utils/parseRawgToGame.ts
import { GameType } from "@/types/GameType";
import { RawgGame } from "@/types/RawgGame";
import { CheapSharkGame } from "@/types/CheapSharkType";

export function parseToGameType(
  rawg: RawgGame,
  price: CheapSharkGame | null
): GameType {
  return {
    id: rawg.id.toString(),
    name: rawg.name,
    description: rawg.slug, // ou use outro campo
    release_date: rawg.released,
    destaque: false,
    media: {
      thumbnail: rawg.background_image,
      cover: rawg.background_image,
      imageUrl: rawg.background_image,
    },
    details: {
      system: "PC",
      category: "Action",
      developer: rawg.developers?.[0]?.name || "",
      publisher: rawg.publishers?.[0]?.name || "",
      rating: rawg.rating.toString(),
    },
    prices: {
      discount: price ? Number(price.cheapest) : 0,
      original: 100, // fixo, ou calcule
      current: price ? Number(price.cheapest) : 0,
    },
  };
}
