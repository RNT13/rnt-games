import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export type SectionProps = {
  $bgColor: 'light' | 'dark'
}

export const SectionContainer = styled.div<Omit<SectionProps, 'light' | 'dark'>>`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
  color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};

  h3 {
    color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
  }

  svg {
    font-size: 24px;
    color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
  }

  .sectionButton {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
`

export const SectionContent = styled.div`
  margin-bottom: 40px;
`

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`

export const Row = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 48px;
  }
`
