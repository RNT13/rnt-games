'use client'

import { Button } from "@/components/ui/Button/Button";
import { Cart } from "@/components/ui/Cart/Cart";
import { CartWrapper } from "@/components/ui/CartWrapper/CartWrapper";
import { login } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { HeaderCart, HeaderContainer, HeaderLogin, HeaderLogo, HeaderNav, HeaderRegister, HeaderRight, HeaderUl, HeaderUserAvatar, UserAvatar } from "./HeaderStyles";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isCartOpen, setIsCartOpen] = useState(false)
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
      <CartWrapper isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart onClick={() => setIsCartOpen(false)} />
      </CartWrapper>
      <HeaderNav className="container">
        <HeaderLogo>
          <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} />
        </HeaderLogo>
        <HeaderUl>
          <li><Button href="/" title="Home" /></li>
          <li><Button href="/#games" title="Games" /></li>
          <li><Button href="/#coming-soon" title="Em Breve" /></li>
          <li><Button href="/#category" title="Categorias" /></li>
          <li><Button href="/pricing" title="Planos" /></li>
        </HeaderUl>
        <HeaderRight>
          <HeaderCart>
            <Button onClick={() => setIsCartOpen(true)} title="">
              <HiShoppingCart />
              <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </Button>
          </HeaderCart>
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
      </HeaderNav>
    </HeaderContainer>
  )
}
