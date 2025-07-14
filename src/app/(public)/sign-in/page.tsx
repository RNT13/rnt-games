'use client'

import { Button } from "@/components/ui/Button/Button";
import { login } from "@/redux/slices/authSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SignInContainer, SignInContent, SignInFooter, SignInForm, SignInHeader } from "./sign-inStyles";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toastShown = useRef(false);

  useEffect(() => {
    const isLogout = searchParams.get('logout') === '1';
    if (isLogout && !toastShown.current) {
      toast.success("Deslogado com sucesso!");
      toastShown.current = true;
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simula token
    const fakeToken = 'fake-token-123';

    // Salva o token localmente
    localStorage.setItem('token', fakeToken);
    document.cookie = `token=${fakeToken}; path=/`;

    // Atualiza Redux
    dispatch(login());

    // Redireciona com ?login=1 apenas para exibir o toast lá no dashboard
    router.push('/dashboard?login=1');
  };


  return (
    <SignInContainer>
      <SignInContent>
        <SignInHeader>
          <h2>Entre na sua conta</h2>
        </SignInHeader>
        <SignInForm onSubmit={handleLogin}>
          <label htmlFor="email">
            E-mail
            <input name="email" id="email" type="email" value={email} placeholder="seu@email.com" onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Senha
            <input name="password" id="password" type="password" value={password} placeholder="Sua senha" onChange={e => setPassword(e.target.value)}
            />
          </label>
          <Button type="submit">Entrar</Button>
        </SignInForm>
        <SignInFooter>
          <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
          <p>Ainda não possui uma conta? <a href="/register">Clique aqui</a></p>
        </SignInFooter>
      </SignInContent>
    </SignInContainer>
  );
}
