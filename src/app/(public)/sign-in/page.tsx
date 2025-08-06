'use client'

import { Button } from "@/components/ui/Button/Button";
import { MaskedInput } from "@/components/ui/MaskedInput/MaskedInput";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useLoginUserMutation } from "@/redux/slices/apiSlice";
import { login } from "@/redux/slices/authSlice";
import { MaskedInputCheck } from "@/utils/maskedInputCheck";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import * as yup from 'yup';
import { SignInContainer, SignInContent, SignInFooter, SignInForm, SignInHeader } from "./sign-inStyles";



export default function SignIn() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
      password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await loginUser(values).unwrap() // Chama o endpoint

        dispatch(login(response.user)) // Atualiza o Redux

        router.push(`/dashboard/${response.user.id}`)

        toast.success('Login realizado com sucesso!');
      } catch {
        toast.error('E-mail ou senha incorretos');
      }
    }
  })

  const [loginUser, { isLoading, isError }] = useLoginUserMutation()

  return (
    <SignInContainer>
      <SignInContent>

        <SignInHeader>
          <h2>Entre na sua conta</h2>
          {isError && <p className="error">E-mail ou senha incorretos</p>}
        </SignInHeader>

        <FormikProvider value={form}>
          <SignInForm onSubmit={form.handleSubmit}>
            <label htmlFor="email">
              E-mail
              <MaskedInput type="email" name="email" id="email" placeholder="Digite seu e-mail" className={MaskedInputCheck('email', form) ? 'error' : ''} />
            </label>
            <label htmlFor="password">
              Senha
              <MaskedInput type="password" name="password" id="password" placeholder="Digite sua senha" className={MaskedInputCheck('password', form) ? 'error' : ''} />
            </label>
            <Button disabled={isLoading} type="submit">
              {isLoading ? 'Entrando ...' : 'Entrar'}
            </Button>
          </SignInForm>
        </FormikProvider>

        <SignInFooter>
          <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
          <p>Ainda não possui uma conta? <a href="/register">Clique aqui</a></p>
        </SignInFooter>

      </SignInContent>
    </SignInContainer>
  );
}

