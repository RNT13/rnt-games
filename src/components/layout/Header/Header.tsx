'use client'

import { Button } from "@/components/ui/Button/Button";
import { Cart } from "@/components/ui/Cart/Cart";
import { CartWrapper } from "@/components/ui/CartWrapper/CartWrapper";
import { login } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { HeaderCart, HeaderContainer, HeaderLogin, HeaderLogo, HeaderMenu, HeaderMenuWindow, HeaderNav, HeaderRegister, HeaderRight, HeaderUl, HeaderUlDiv, HeaderUserAvatar, Row, UserAvatar } from "./HeaderStyles";

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
            <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} />
          </HeaderLogo>

          <HeaderUlDiv>
            <HeaderUl >
              <li><Button href="/" title="Home" /></li>
              <li><Button href="/#games" title="Games" /></li>
              <li><Button href="/#coming-soon" title="Em Breve" /></li>
              <li><Button href="/#category" title="Categorias" /></li>
              <li><Button href="/pricing" title="Planos" /></li>
            </HeaderUl>
          </HeaderUlDiv>

          <HeaderRight>

            <HeaderCart>
              <Button onClick={() => setIsCartOpen(true)} title="">
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
                  <a href="/dashboard">
                    <Image src="/armoredCoreGame.jpg" alt="avatar" width={40} height={40} />
                  </a>
                </UserAvatar>
              </HeaderUserAvatar>
            ) : (
              <>
                <HeaderLogin>
                  <Button href="/sign-in" title="Login" />
                </HeaderLogin>
                <HeaderRegister>
                  <Button href="/register" title="Register" />
                </HeaderRegister>
              </>
            )}
          </HeaderRight>
        </Row>

        <HeaderMenu>
          <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <HeaderMenuWindow className="container" $isOpen={isMenuOpen} >
            <HeaderUl>
              <li><Button href="/" title="Home" onClick={() => setIsMenuOpen(false)} /></li>
              <li><Button href="/#games" title="Games" onClick={() => setIsMenuOpen(false)} /></li>
              <li><Button href="/#coming-soon" title="Em Breve" onClick={() => setIsMenuOpen(false)} /></li>
              <li><Button href="/#category" title="Categorias" onClick={() => setIsMenuOpen(false)} /></li>
              <li><Button href="/pricing" title="Planos" onClick={() => setIsMenuOpen(false)} /></li>
            </HeaderUl>
          </HeaderMenuWindow>
        </HeaderMenu>

      </HeaderNav>
    </HeaderContainer>
  )
}
