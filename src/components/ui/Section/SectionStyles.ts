import { media, theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export type SectionProps = {
  $bgColor: 'light' | 'dark'
}

export const SectionContainer = styled.div<Omit<SectionProps, 'light' | 'dark'>>`
  padding: 48px 0;
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
    gap: 8px;
    color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light30)};
    transition: ${transitions.default};
  }

  ${media.tablet}, ${media.mobile} {
    padding: 70px 0;
  }
`

export const SectionContent = styled.div``

export const SectionTitle = styled.h2`
  font-size: 32px;
`

export const Row = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 40px;
  }

  ${media.tablet}, ${media.mobile} {
    flex-direction: column;
    align-items: start;
    margin: 48px 0 24px 0;
  }
`
