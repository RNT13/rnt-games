import { OverlayBlur } from "@/styles/globalStyles";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "../Button/Button";
import { RegisterWindowContainer, RegisterWindowContent, RegisterWindowFooter, RegisterWindowForm, RegisterWindowHeader } from "./RegisterWindowStyles";

type RegisterWindowProps = {
  onClick: () => void
}

export const RegisterWindow = ({ onClick }: RegisterWindowProps) => {
  return (
    <RegisterWindowContainer >
      <OverlayBlur onClick={onClick} />
      <RegisterWindowContent>
        <RegisterWindowHeader>
          <h2>Crie sua conta</h2>
          <Button title="" onClick={onClick}>
            <IoIosCloseCircle />
          </Button>
        </RegisterWindowHeader>
        <RegisterWindowForm>
          <label htmlFor="name">
            Nome de usuário
            <input name="name" id="name" type="text" placeholder="Seu nome de usuário" />
          </label>
          <label htmlFor="email">
            E-mail
            <input name="email" id="email" type="email" placeholder="seu@email.com" />
          </label>
          <label htmlFor="password">
            Senha
            <input name="password" id="password" type="password" placeholder="Sua senha" />
          </label>
          <Button type="submit">Criar conta</Button>
        </RegisterWindowForm>
        <RegisterWindowFooter>
          <p>Já tem conta? <a href="#">Clique aqui</a></p>
        </RegisterWindowFooter>
      </RegisterWindowContent>
    </RegisterWindowContainer>
  )
}
