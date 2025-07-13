'use client'

import { Button } from "@/components/ui/Button/Button"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { RegisterContainer, RegisterContent, RegisterFooter, RegisterForm, RegisterHeader } from "./registerStyle"

export default function Register() {
  return (
    <RegisterContainer >
      <RegisterContent>
        <RegisterHeader>
          <h2>Crie sua conta</h2>
        </RegisterHeader>
        <RegisterForm>
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
        </RegisterForm>
        <RegisterFooter>
          <p>Já tem conta? <a href="/sign-in">Clique aqui</a></p>
        </RegisterFooter>
      </RegisterContent>
    </RegisterContainer>
  )
}
