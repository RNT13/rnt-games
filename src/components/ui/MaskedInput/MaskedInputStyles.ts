import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const MaskedInputContainer = styled.div`
  width: 100%;
  input {
    padding: 8px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 2px solid ${theme.colors.baseBlue.light20};

    &:focus {
      outline: none;
      border: 2px solid ${theme.colors.baseBlue.dark};
    }

    &.error {
      border: 2px solid ${theme.colors.baseRed.base};
      background-color: ${theme.colors.baseRed.light02};
    }
  }
`
