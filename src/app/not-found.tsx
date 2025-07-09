
import { Button } from "@/components/ui/Button/Button";
import { NotFoundContainer, NotFoundContent, NotFoundImage } from "./not-found.styles";

export default function NotFound() {

  return (
    <NotFoundContainer className="container">
      <NotFoundContent >
        <h2>Parece que algo quebrou...</h2>
        <NotFoundImage src="/404.png" alt="ilustração de controle quebrado" width={600} height={600} />
        <p>Desculpe, a página que você está procurando não foi encontrada.</p>
        <Button title="Voltar para a página inicial" href="/" type="button" />
      </NotFoundContent >
    </NotFoundContainer >
  )
}
