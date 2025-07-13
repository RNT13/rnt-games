'use client'

import { Button } from "@/components/ui/Button/Button";
import { login } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignInContainer, SignInContent, SignInFooter, SignInForm, SignInHeader } from "./sign-inStyles";



export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const fakeToken = 'fake-token-123';

    // Salva no localStorage
    localStorage.setItem('token', fakeToken);

    // salva no cookie também
    document.cookie = `token=${fakeToken}; path=/`;

    // Atualiza Redux
    dispatch(login());

    // Redireciona
    router.push('/dashboard');
  }

  return (
    <SignInContainer >
      <SignInContent>
        <SignInHeader>
          <h2>Entre na sua conta</h2>
        </SignInHeader>
        <SignInForm onSubmit={handleLogin}>
          <label htmlFor="email">
            E-mail
            <input name="email" id="email" type="email" value={email} placeholder="seu@email.com" onChange={e => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            Senha
            <input name="password" id="password" type="password" value={password} placeholder="Sua senha" onChange={e => setPassword(e.target.value)} />
          </label>
          <Button type="submit">Entar</Button>
        </SignInForm>
        <SignInFooter>
          <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
          <p>Ainda nao possui uma conta? <a href="/register">Clique aqui</a></p>
        </SignInFooter>
      </SignInContent>
    </SignInContainer>
  )
}
