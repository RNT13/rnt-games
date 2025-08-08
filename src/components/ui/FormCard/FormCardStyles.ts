import { theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const FormCardContainer = styled.div``

export const FormCardContent = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  background-color: ${theme.colors.baseBlue.light30};
  ${transitions.default};

  h2 {
    color: ${theme.colors.baseBlue.dark30};
  }
`
