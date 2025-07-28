'use client'

import { CloseButton, OverlayDarck } from "@/styles/globalStyles";
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
}

interface ModalState extends GalleryItem {
  isOpen: boolean
}


export default function Gallery({ itemImage, game, }: GalleryProps) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: 'image',
    url: ''
  })

  const getItemImage = (item: GalleryItem) => {
    if (item.type === "image" && item.url) {
      return item.url;
    }

    return game.media.cover || "/default-cover.png";
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
              style={{ objectFit: "cover" }}
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

