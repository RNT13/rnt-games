'use client'

import { addToCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { CloseButton, OverlayDarck, TitleH2, TitleH3 } from "@/styles/globalStyles";
import { GameType } from "@/types/GameType";
import { mapGameToCartItem } from "@/utils/cartHelper";
import Image from "next/image";
import { useState } from "react";
import { FaHourglassHalf, FaSearchPlus, FaThumbsUp } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import Section from "../Section/Section";
import { Tag } from "../Tag/Tag";
import { DetailsContainer, DetailsContent, DetailsHero, DetailsHeroContainer, DetailsHeroInfo, Galery, GaleryItem, GaleryModal, GaleryModalContent, HeroImage, TagDiv } from "./DetailsStyles";

type detailsProps = {
  game: GameType
}

export default function Details({ game }: detailsProps) {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === +game.id);


  return (
    <DetailsContainer>
      <DetailsHero>
        <OverlayDarck />
        <HeroImage src={`${game.media.cover}`} alt={game.name} width={1920} height={1080} />
        <DetailsHeroContainer className="container">
          <TagDiv>
            <Tag size="md" color="blue">{game.details.category}</Tag>
            <Tag size="md" color="green">{game.details.system}</Tag>
            {game.prices.discount > 0 && (<Tag size="md" color="red">-{game.prices.discount}%</Tag>)}
          </TagDiv>
          <DetailsHeroInfo >
            <TitleH2>{game.name}</TitleH2>

            {game.release_date === 'COMING SOON' ? (
              <TitleH3>Em breve</TitleH3>
            ) : game.prices.discount > 0 ? (
              <TitleH3><span>de R$ {game.prices.original}</span> <br /> por R$ {game.prices.current}</TitleH3>
            ) : (
              <TitleH3>Por apenas R$ {game.prices.current}</TitleH3>
            )}

            {game.release_date === 'COMING SOON' ? (
              <Button title="Em Breve" disabled>
                <FaHourglassHalf />
              </Button>
            ) : isInCart ? (
              <Button title="No carrinho" disabled>
                <FaThumbsUp />
              </Button>
            ) : (
              <Button onClick={() => dispatch(addToCart(mapGameToCartItem(game)))} title="Comprar">
                <HiShoppingCart />
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
          <Galery>
            <GaleryItem onClick={() => setIsOpen(true)}>
              <OverlayDarck />
              <Image src={game.media.thumbnail} alt={game.name} width={100} height={100} />
              <div>
                <FaSearchPlus />
              </div>
            </GaleryItem>

            <GaleryItem onClick={() => setIsOpen(true)}>
              <OverlayDarck />
              <Image src={game.media.thumbnail} alt={game.name} width={100} height={100} />
              <div>
                <FaSearchPlus />
              </div>
            </GaleryItem>

            <GaleryItem onClick={() => setIsOpen(true)}>
              <OverlayDarck />
              <Image src={game.media.thumbnail} alt={game.name} width={100} height={100} />
              <div>
                <FaSearchPlus />
              </div>
            </GaleryItem>

            <GaleryItem onClick={() => setIsOpen(true)}>
              <OverlayDarck />
              <Image src={game.media.thumbnail} alt={game.name} width={100} height={100} />
              <div>
                <FaSearchPlus />
              </div>
            </GaleryItem>

            <GaleryItem onClick={() => setIsOpen(true)}>
              <OverlayDarck />
              <Image src={game.media.thumbnail} alt={game.name} width={100} height={100} />
              <div>
                <FaSearchPlus />
              </div>
            </GaleryItem>

            <GaleryItem onClick={() => setIsOpen(true)}>
              <OverlayDarck />
              <Image src={game.media.thumbnail} alt={game.name} width={100} height={100} />
              <div>
                <FaSearchPlus />
              </div>
            </GaleryItem>
          </Galery>

          <ModalWrapper isOpen={isOpen} onClose={() => setIsOpen(false)} >
            <GaleryModal>
              <GaleryModalContent>
                <Image src={game.media.thumbnail} alt={game.name} width={1920} height={1080} />
                <CloseButton onClick={() => setIsOpen(false)}>
                  <IoIosCloseCircle />
                </CloseButton>
              </GaleryModalContent>
            </GaleryModal>
          </ModalWrapper>
        </Section>
      </DetailsContent>
    </DetailsContainer >
  )
}
