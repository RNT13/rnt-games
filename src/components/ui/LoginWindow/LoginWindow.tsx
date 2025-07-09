import { CloseButton, OverlayBlur } from "@/styles/globalStyles";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "../Button/Button";
import { LoginWindowContainer, LoginWindowContent, LoginWindowFooter, LoginWindowForm, LoginWindowHeader } from "./LoginWindowStyles";

type LoginWindowProps = {
  onClick: () => void
}

export const LoginWindow = ({ onClick }: LoginWindowProps) => {
  return (
    <LoginWindowContainer >
      <OverlayBlur onClick={onClick} />
      <LoginWindowContent>
        <LoginWindowHeader>
          <h2>Entre na sua conta</h2>
          <CloseButton title="" onClick={onClick}>
            <IoIosCloseCircle />
          </CloseButton>
        </LoginWindowHeader>
        <LoginWindowForm>
          <label htmlFor="email">
            E-mail
            <input name="email" id="email" type="email" placeholder="seu@email.com" />
          </label>
          <label htmlFor="password">
            Senha
            <input name="password" id="password" type="password" placeholder="Sua senha" />
          </label>
          <Button href="/dashboard" type="submit">Entar</Button>
        </LoginWindowForm>
        <LoginWindowFooter>
          <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
          <p>Ainda nao possui uma conta? <a href="#">Clique aqui</a></p>
        </LoginWindowFooter>
      </LoginWindowContent>
    </LoginWindowContainer>
  )
}
