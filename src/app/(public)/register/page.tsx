'use client'

import { Button } from "@/components/ui/Button/Button";
import { MaskedInput } from "@/components/ui/MaskedInput/MaskedInput";
import { useRegisterUserMutation } from "@/redux/slices/apiSlice";
import { TitleH2 } from "@/styles/globalStyles";
import { checkInputHasError } from "@/utils/maskedInputCheck";
import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import * as yup from 'yup';
import { RegisterContainer, RegisterContent, RegisterFooter, RegisterForm, RegisterHeader } from "./registerStyle";

export default function Register() {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup.string().min(5, 'Minimo de 5 caracteres').required('Campo obrigatório'),
      email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
      password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      setUserName(values.name)
      await registerUser(values)
    }
  })

  const [registerUser, { isLoading, isSuccess, isError }] = useRegisterUserMutation()

  const [userName, setUserName] = useState('')

  return (
    <RegisterContainer >
      {isSuccess
        ? (
          <RegisterContent>
            <RegisterHeader>
              <TitleH2>
                Usuário <br /> {userName} <br /> criado com sucesso!
              </TitleH2>
            </RegisterHeader>
            <RegisterFooter>
              <Button href="/sign-in">
                <FaArrowLeft />
                Ir para Login
              </Button>
            </RegisterFooter>
          </RegisterContent>
        )
        : isError
          ? (
            <RegisterContent>
              <RegisterHeader>
                <TitleH2>
                  Usuário <br /> {userName} <br /> Já cadastrado!
                </TitleH2>
              </RegisterHeader>
              <RegisterFooter>
                <Button href="/sign-in">
                  <FaArrowLeft />
                  Ir para Login
                </Button>
              </RegisterFooter>
            </RegisterContent>
          )
          : (
            <RegisterContent>
              <RegisterHeader>
                <h2>Crie sua conta</h2>
              </RegisterHeader>
              <FormikProvider value={form}>
                <form onSubmit={form.handleSubmit}>
                  <RegisterForm>
                    <label htmlFor="name">
                      Nome de usuário
                      <MaskedInput
                        name="name"
                        placeholder="Digite seu nome de usuário"
                        className={checkInputHasError('name', form) ? 'error' : ''}
                      />
                    </label>
                    <label htmlFor="email">
                      E-mail
                      <MaskedInput
                        name="email"
                        placeholder="Digite seu e-mail"
                        className={checkInputHasError('email', form) ? 'error' : ''}
                      />
                    </label>
                    <label htmlFor="password">
                      Senha
                      <MaskedInput
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                        className={checkInputHasError('password', form) ? 'error' : ''}
                      />
                    </label>
                    <Button type="submit" disabled={isLoading} title="Crie sua conta">
                      <MdCreateNewFolder />
                      {isLoading ? 'Criando...' : 'Crie sua conta'}
                    </Button>
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
                </form>
              </FormikProvider>
              <RegisterFooter>
                <p>Já tem conta? <a href="/sign-in">Clique aqui</a></p>
              </RegisterFooter>
            </RegisterContent>
          )
      }
    </RegisterContainer >
  )
}
