'use client'

import { Button } from "@/components/ui/Button/Button";
import { Cart } from "@/components/ui/Cart/Cart";
import { CartWrapper } from "@/components/ui/CartWrapper/CartWrapper";
import HeaderAuth from "@/components/ui/HeaderAuth/HeaderAuth";
import { useAppSelector } from "@/hooks/useAppDispatch";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { HeaderCart, HeaderContainer, HeaderLogo, HeaderMenu, HeaderMenuWindow, HeaderNav, HeaderRight, HeaderUl, HeaderUlDiv, Row } from "./HeaderStyles";

export default function Header() {
  const { items } = useAppSelector((state: RootState) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderNav >
        <Row className="container">
          <HeaderLogo>
            <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} priority />
          </HeaderLogo>

          <HeaderUlDiv>
            <HeaderUl >
              <li>
                <Button href="/" title="Home">Home</Button>
              </li>
              <li>
                <Button href="/#allGames" title="Games" >Jogos</Button>
              </li>
              <li>
                <Button href="/#soonGames" title="Em Breve">Em Breve</Button>
              </li>
              <li>
                <Button href="/#category" title="Categorias" >Categorias</Button>
              </li>
              <li>
                <Button href="/pricing" title="Planos" >Planos</Button>
              </li>
            </HeaderUl>
          </HeaderUlDiv>

          <HeaderRight>

            <HeaderCart>
              <Button onClick={() => setIsCartOpen(true)}>
                <HiShoppingCart />
                <span>{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </Button>
            </HeaderCart>

            <CartWrapper isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
              <Cart onClick={() => setIsCartOpen(false)} />
            </CartWrapper>

            <HeaderAuth />

          </HeaderRight>
        </Row>

        <HeaderMenu>
          <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <HeaderMenuWindow className="container" $isOpen={isMenuOpen} >
            <HeaderUl>
              <li><Button href="/" title="Home" onClick={() => { setIsMenuOpen(false) }} >Home</Button></li>
              <li><Button href="/#allGames" title="Games" onClick={() => { setIsMenuOpen(false) }} >Jogos</Button></li>
              <li><Button href="/#soonGames" title="Em Breve" onClick={() => { setIsMenuOpen(false) }} >Em Breve</Button></li>
              <li><Button href="/#category" title="Categorias" onClick={() => { setIsMenuOpen(false) }} >Categorias</Button></li>
              <li><Button href="/pricing" title="Planos" onClick={() => setIsMenuOpen(false)} >Planos</Button></li>
            </HeaderUl>
          </HeaderMenuWindow>
        </HeaderMenu>

      </HeaderNav>
    </HeaderContainer >
  )
}
