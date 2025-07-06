import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export type SectionProps = {
  $bgColor: 'light' | 'dark'
}

export const SectionContainer = styled.section<Omit<SectionProps, 'light' | 'dark'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
  color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
`

export const SectionContent = styled.div`
  width: 100%;
  padding: 32px 0;
`

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`
