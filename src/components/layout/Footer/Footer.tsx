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
            <Button href="https://www.linkedin.com/in/renato-luiz-0b072b247/" target="_blank" rel="noopener noreferrer">
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
              RNT Games Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestias facilis, eos suscipit repellat ea quia. A, dolore vero, deleniti asperiores atque cum accusamus adipisci in repellat pariatur delectus possimus?
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
