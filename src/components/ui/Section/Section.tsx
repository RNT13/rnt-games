import { Button } from "@/components/ui/Button/Button"
import { FaArrowRight } from "react-icons/fa"
import { Row, SectionContainer, SectionContent, SectionTitle } from "./SectionStyles"

interface SectionProps {
  title: string
  $bgColor: 'light' | 'dark'
  children?: React.ReactNode
  href?: string
}

export default function Section({ title, $bgColor, children, href }: SectionProps) {
  return (
    <SectionContainer $bgColor={$bgColor} >
      <SectionContent className="container">
        <Row>
          <SectionTitle>{title}</SectionTitle>
          {href && (
            <Button href={href}>
              <h3>Ver todos</h3>
              <FaArrowRight />
            </Button>
          )}
        </Row>
        {children}
      </SectionContent>
    </SectionContainer>
  )
}
