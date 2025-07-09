import { CloseButton, OverlayBlur } from "@/styles/globalStyles";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
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
          <CloseButton title="" onClick={onClick}>
            <IoIosCloseCircle />
          </CloseButton>
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
          <Button>
            <FaFacebook />
            Entrar com Facebook
          </Button>
          <Button>
            <AiFillInstagram />
            Entrar com Instagram
          </Button>
          <Button>
            <FaGithub />
            Entrar com GitHub
          </Button>
        </RegisterWindowForm>
        <RegisterWindowFooter>
          <p>Já tem conta? <a href="#">Clique aqui</a></p>
        </RegisterWindowFooter>
      </RegisterWindowContent>
    </RegisterWindowContainer>
  )
}
