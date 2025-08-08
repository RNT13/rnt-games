import { TitleH2 } from "@/styles/globalStyles"
import { FormCardContainer, FormCardContent } from "./FormCardStyles"

type FormCardProps = {
  children: React.ReactNode
  title: string
}

export const FormCard = ({ children, title }: FormCardProps) => {
  return (
    <FormCardContainer className="container">
      <FormCardContent >
        <TitleH2>{title}</TitleH2>
        {children}
      </FormCardContent>
    </FormCardContainer>
  )
}
