'use client'

import { CloseButton, OverlayDarck } from "@/styles/globalStyles";
import { GalleryItem, GameType } from "@/types/GameType";
import Image from "next/image";
import { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { GalleryContainer, GalleryContent, GalleryIcon, GalleryModal, GalleryModalContent } from "./GalleryStyles";


type GalleryProps = {
  itemImage: GalleryItem[]
  game: GameType
  defaultCover?: string
}

interface ModalState extends GalleryItem {
  isOpen: boolean
}


export default function Gallery({ itemImage, defaultCover, game, }: GalleryProps) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: 'image',
    url: ''
  })

  const getItemImage = (itemImage: GalleryItem) => {
    if (!itemImage?.url) return defaultCover || "/placeholder.png";
    if (itemImage.type === "image") return itemImage.url;
    return defaultCover || "/placeholder.png";
  };

  const getItemImageIcon = (itemImage: GalleryItem) => {
    return itemImage.type === "image" ? <FaSearchPlus /> : <FaPlay />;
  };

  return (
    <GalleryContainer>
      {itemImage.map((image, index) => (
        <GalleryContent key={image.url} onClick={() => setModal({ isOpen: true, type: image.type, url: image.url })}>
          {getItemImage(image) && (
            <Image
              src={getItemImage(image)!}
              alt={`Mídia ${index + 1} de ${game.name ?? "jogo"}`}
              width={100}
              height={100}
            />
          )}
          <GalleryIcon>
            <OverlayDarck />
            {getItemImageIcon(image)}
          </GalleryIcon>
        </GalleryContent>
      ))}
      {modal && (
        <ModalWrapper isOpen={modal.isOpen} onClose={() => setModal({ isOpen: false, type: 'image', url: '' })}  >
          <GalleryModal>
            <GalleryModalContent>
              {modal.type === 'image' ? (
                <Image src={modal.url} alt={game.name} width={1920} height={1080} />
              ) : (
                <iframe src={modal.url} ></iframe>
              )}
              <CloseButton onClick={() => setModal({ isOpen: false, type: 'image', url: '' })}>
                <IoIosCloseCircle />
              </CloseButton>
            </GalleryModalContent>
          </GalleryModal>
        </ModalWrapper>
      )}

    </GalleryContainer >
  );
}

