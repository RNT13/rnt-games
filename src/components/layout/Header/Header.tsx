'use client'

import { Button } from "@/components/ui/Button/Button";
import { Cart } from "@/components/ui/Cart/Cart";
import { CartWrapper } from "@/components/ui/CartWrapper/CartWrapper";
import { login } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { scrollToWithOffset } from "@/utils/ScrollUtils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, HeaderCart, HeaderContainer, HeaderLogin, HeaderLogo, HeaderMenu, HeaderMenuWindow, HeaderNav, HeaderRegister, HeaderRight, HeaderUl, HeaderUlDiv, HeaderUserAvatar, Row, UserAvatar } from "./HeaderStyles";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(login())
    }
  }, [dispatch])

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <HeaderContainer>
      <HeaderNav >
        <Row className="container">
          <HeaderLogo>
            <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} priority />
          </HeaderLogo>

          <HeaderUlDiv>
            <HeaderUl >
              <li><Button href="/" title="Home">Home</Button></li>
              <li><Button href="/#games" title="Games" >Games</Button></li>
              <li><Button href="/#SoonGames" title="Em Breve">Em Breve</Button></li>
              <li><Button href="/#category" title="Categorias" >Categorias</Button></li>
              <li><Button href="/pricing" title="Planos" >Planos</Button></li>
            </HeaderUl>
          </HeaderUlDiv>

          <HeaderRight>

            <HeaderCart>
              <Button onClick={() => setIsCartOpen(true)}>
                <HiShoppingCart />
                <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </Button>
            </HeaderCart>

            <CartWrapper isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
              <Cart onClick={() => setIsCartOpen(false)} />
            </CartWrapper>

            {isAuthenticated ? (
              <HeaderUserAvatar>
                <UserAvatar>
                  <a href="/dashboard" title="Ir para o dashboard">
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={40} height={40} />
                  </a>
                </UserAvatar>
              </HeaderUserAvatar>
            ) : (
              <HeaderButtons>
                <HeaderLogin>
                  <Button href="/sign-in" title="Fazer Login" >Login</Button>
                </HeaderLogin>
                <HeaderRegister>
                  <Button href="/register" title="Fazer Cadastro" >Cadastro</Button>
                </HeaderRegister>
              </HeaderButtons>
            )}

          </HeaderRight>
        </Row>

        <HeaderMenu>
          <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <HeaderMenuWindow className="container" $isOpen={isMenuOpen} >
            <HeaderUl>
              <li><Button title="Home" onClick={() => { setIsMenuOpen(false); scrollToWithOffset('home', 150) }} >Home</Button></li>
              <li><Button title="Games" onClick={() => { setIsMenuOpen(false); scrollToWithOffset('games', 150) }} >Games</Button></li>
              <li><Button title="Em Breve" onClick={() => { setIsMenuOpen(false); scrollToWithOffset('SoonGames', 150) }} >Em Breve</Button></li>
              <li><Button title="Categorias" onClick={() => { setIsMenuOpen(false); scrollToWithOffset('category', 150) }} >Categorias</Button></li>
              <li><Button href="/pricing" title="Planos" onClick={() => setIsMenuOpen(false)} >Planos</Button></li>
            </HeaderUl>
          </HeaderMenuWindow>
        </HeaderMenu>

      </HeaderNav>
    </HeaderContainer >
  )
}
