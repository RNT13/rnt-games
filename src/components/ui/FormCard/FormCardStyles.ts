import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FormCardContainer = styled.div`
  width: 100vw;
  margin: 24px 0;
`

export const FormCardContent = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: ${theme.colors.baseBlue.light30};

  h2 {
    color: ${theme.colors.baseBlue.dark30};
  }
`
