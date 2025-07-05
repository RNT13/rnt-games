import { Button } from "@/components/ui/Button/Button";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { HeaderCart, HeaderContainer, HeaderLogin, HeaderLogo, HeaderNav, HeaderRight, HeaderUl } from "./HeaderStyles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNav className="container">
        <HeaderLogo>
          <Image src="/rnt-games-logo.png" alt="logo" width={120} height={40} />
        </HeaderLogo>
        <HeaderUl>
          <li>
            <Button href="/#" title="Link 1" />
          </li>
          <li>
            <Button href="/#" title="Link 2" />
          </li>
          <li>
            <Button href="/#" title="Link 3" />
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
            <Button href="/#" title="Register" />
          </HeaderLogin>
        </HeaderRight>
      </HeaderNav>
    </HeaderContainer>
  )
}
