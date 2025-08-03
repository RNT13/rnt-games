import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FormCardContainer = styled.div``

export const FormCardContent = styled.div`
  padding: 24px;
  border-radius: 12px;
  margin: 24px 0;
  background-color: ${theme.colors.baseBlue.light30};

  h2 {
    color: ${theme.colors.baseBlue.dark30};
  }
`
