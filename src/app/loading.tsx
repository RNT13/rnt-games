'use client'

import { LoadingContainer, LoadingContent, LoadingImage } from "./loading.styles";

export default function Loading() {

  return (
    <LoadingContainer className="container">
      <LoadingContent >
        <LoadingImage src="/controle.png" alt="ilustração de controle" width={300} height={300} priority />
        <h2>Carregando...</h2>
      </LoadingContent >
    </LoadingContainer >
  )
}
