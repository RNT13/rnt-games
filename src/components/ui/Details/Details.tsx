'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { addToCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { OverlayDarck, TitleH2, TitleH3 } from "@/styles/globalStyles";
import { mapGameToCartItem } from "@/utils/cartUtils";
import { formatToBRL } from "@/utils/converterUtils";
import toast from "react-hot-toast";
import { FaHourglassHalf, FaThumbsUp } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from "../Button/Button";
import Gallery from "../Gallery/Gallery";
import Section from "../Section/Section";
import { Tag } from "../Tag/Tag";
import { DetailsContainer, DetailsContent, DetailsHero, DetailsHeroContainer, DetailsHeroInfo, HeroImage, TagDiv } from "./DetailsStyles";

type detailsProps = {
  game: GameType
}


export default function Details({ game }: detailsProps) {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state: RootState) => state.cart);
  const isInCart = items.some(item => item.id === +game.id);

  return (
    <DetailsContainer>
      <DetailsHero>
        <OverlayDarck />
        <HeroImage src={`${game.media.cover}`} alt={game.name} width={1920} height={1080} priority />
        <DetailsHeroContainer className="container">
          <TagDiv>
            <Tag size="md" color="blue">{game.details.category}</Tag>
            <Tag size="md" color="green">{game.details.system}</Tag>
            {game.prices.discount > 0 && (<Tag size="md" color="red">-{game.prices.discount}%</Tag>)}
          </TagDiv>
          <DetailsHeroInfo >
            <TitleH2>{game.name}</TitleH2>

            {new Date(game.releaseDate) > new Date() ? (
              <TitleH3>Em breve</TitleH3>
            ) : game.prices.discount > 0 ? (
              <TitleH3><span>de {formatToBRL(game.prices.old)}</span> <br /> por {formatToBRL(game.prices.current)}</TitleH3>
            ) : (
              <TitleH3>Por apenas {formatToBRL(game.prices.current)}</TitleH3>
            )}

            {new Date(game.releaseDate) > new Date() ? (
              <Button title="Em Breve" disabled>
                <FaHourglassHalf />
                Em Breve
              </Button>
            ) : isInCart ? (
              <Button title="No carrinho" disabled>
                <FaThumbsUp />
                Jogo no carrinho
              </Button>
            ) : (
              <Button onClick={() => { dispatch(addToCart(mapGameToCartItem(game))); toast.success(`${game.name} Adicionado ao carrinho com sucesso!`) }} title={`Comprar ${game.name}`}>
                <HiShoppingCart />
                Comprar Jogo
              </Button>
            )}

          </DetailsHeroInfo>
        </DetailsHeroContainer>
      </DetailsHero>
      <DetailsContent >
        <Section $bgColor="dark" title="Sobre o jogo">
          <p>{game.description}</p>
        </Section>
        <Section $bgColor="light" title="Mais informações">
          <p>
            <b>Sistema:</b> {game.details?.system}
            <br />
            <b>Desenvolvedora:</b> {game.details?.developer}
            <br />
            <b>Publicadora:</b> {game.details?.publisher}
            <br />
          </p>
        </Section>
        <Section $bgColor="dark" title="Galeria">

          <Gallery game={game} itemImage={game.media.gallery} />

        </Section>
      </DetailsContent>
    </DetailsContainer >
  )
}
