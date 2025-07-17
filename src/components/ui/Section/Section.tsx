import { Button } from "@/components/ui/Button/Button"
import { FaArrowRight } from "react-icons/fa"
import { Row, SectionContainer, SectionContent, SectionTitle } from "./SectionStyles"

interface SectionProps {
  title: string
  $bgColor: 'light' | 'dark'
  children?: React.ReactNode
  href?: string
  className?: string
}

export default function Section({ title, $bgColor, children, href, className }: SectionProps) {
  return (
    <SectionContainer $bgColor={$bgColor} className={className} >
      <SectionContent className="container">
        <Row>
          <SectionTitle>{title}</SectionTitle>
          {href && (
            <Button className="sectionButton" href={href}>
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
