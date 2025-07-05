import { SectionContainer, SectionContent, SectionTitle } from "./SectionStyles"

type SectionProps = {
  title: string
  $bgColor: 'light' | 'dark'
  children?: React.ReactNode
}

export default function Section({ title, $bgColor, children }: SectionProps) {
  return (
    <SectionContainer $bgColor={$bgColor}>
      <SectionContent className="container">
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContent>
    </SectionContainer>
  )
}
