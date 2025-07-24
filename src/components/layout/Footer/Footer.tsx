'use client'

import { Button } from "@/components/ui/Button/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ColumnDiv, FooterContainer, FooterContent, FooterCopy, FooterLogo, FooterText, FooterUl, RowDiv, SocialLinks } from "./FooterStyles";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <FooterContainer>
      <FooterContent className="container">
        <RowDiv>
          <FooterLogo>
            <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} />
          </FooterLogo>
          <SocialLinks>
            <Button href="https://github.com/RNT13" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Button>
            <Button href="https://www.linkedin.com/in/renato-minoita/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Button>
            <Button href="https://www.instagram.com/renatominoita/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Button>
          </SocialLinks>
        </RowDiv>
        <FooterUl>
          <ColumnDiv>
            <FooterText>
              Compre jogos digitais com segurança e rapidez na RNT Games. Encontre os melhores preços em jogos para PC, PlayStation, Xbox, Nintendo Switch e muito mais. Atualizamos nosso catálogo com lançamentos, pré-vendas e promoções exclusivas. Tudo 100% digital e confiável.
            </FooterText>
            <FooterText>
              Loja de jogos online com entrega imediata, suporte ágil e preços acessíveis.
            </FooterText>
            <FooterCopy>
              &copy; {year ?? ""} RNT Projects. All rights reserved.
            </FooterCopy>
          </ColumnDiv>
        </FooterUl>
      </FooterContent>
    </FooterContainer>
  )
}
