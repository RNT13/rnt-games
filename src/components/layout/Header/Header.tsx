import { Button } from "@/components/ui/Button/Button";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { HeaderCart, HeaderContainer, HeaderLogin, HeaderLogo, HeaderNav, HeaderRegister, HeaderRight, HeaderUl } from "./HeaderStyles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNav className="container">
        <HeaderLogo>
          <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} />
        </HeaderLogo>
        <HeaderUl>
          <li>
            <Button href="#home" title="Home" />
          </li>
          <li>
            <Button href="#games" title="Games" />
          </li>
          <li>
            <Button href="#coming-soon" title="Coming Soon" />
          </li>
          <li>
            <Button href="#category" title="Category" />
          </li>
        </HeaderUl>
        <HeaderRight>
          <HeaderCart>
            <Button title="">
              <HiShoppingCart />
              <span>0</span>
            </Button>
          </HeaderCart>
          <HeaderLogin>
            <Button href="/#" title="Login" />
          </HeaderLogin>
          <HeaderRegister>
            <Button href="/#" title="Register" />
          </HeaderRegister>
        </HeaderRight>
      </HeaderNav>
    </HeaderContainer>
  )
}
