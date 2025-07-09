import { Button } from "@/components/ui/Button/Button";
import { Cart } from "@/components/ui/Cart/Cart";
import { CartWrapper } from "@/components/ui/CartWrapper/CartWrapper";
import { LoginWindow } from "@/components/ui/LoginWindow/LoginWindow";
import { ModalWrapper } from "@/components/ui/ModalWrapper/ModalWrapper";
import { RegisterWindow } from "@/components/ui/RegisterWindow/RegisterWindow";
import Image from "next/image";
import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { HeaderCart, HeaderContainer, HeaderLogin, HeaderLogo, HeaderNav, HeaderRegister, HeaderRight, HeaderUl } from "./HeaderStyles";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)


  return (
    <HeaderContainer>
      <ModalWrapper isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginWindow onClick={() => setIsLoginOpen(false)} />
      </ModalWrapper>
      <ModalWrapper isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterWindow onClick={() => setIsRegisterOpen(false)} />
      </ModalWrapper>
      <CartWrapper isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart onClick={() => setIsCartOpen(false)} />
      </CartWrapper>
      <HeaderNav className="container">
        <HeaderLogo>
          <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} />
        </HeaderLogo>
        <HeaderUl>
          <li><Button href="#home" title="Home" /></li>
          <li><Button href="#games" title="Games" /></li>
          <li><Button href="#coming-soon" title="Coming Soon" /></li>
          <li><Button href="#category" title="Category" /></li>
        </HeaderUl>
        <HeaderRight>
          <HeaderCart>
            <Button onClick={() => setIsCartOpen(true)} title="">
              <HiShoppingCart />
              <span>0</span>
            </Button>
          </HeaderCart>
          <HeaderLogin>
            <Button title="Login" onClick={() => setIsLoginOpen(true)} />
          </HeaderLogin>
          <HeaderRegister>
            <Button title="Register" onClick={() => setIsRegisterOpen(true)} />
          </HeaderRegister>
        </HeaderRight>
      </HeaderNav>
    </HeaderContainer>
  )
}
