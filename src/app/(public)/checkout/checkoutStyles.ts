import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

type StylesProps = {
  $maxWidth?: string
  $marginTop?: string
  $marginBottom?: string
}

export const CheckoutContainer = styled.div<StylesProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .marginTop {
    margin-top: ${props => props.$marginTop || 'auto'};
  }
`

export const CheckoutContent = styled.div`
  h2,
  h3 {
    margin-bottom: 24px;
  }
`

export const Row = styled.div<StylesProps>`
  width: 100%;
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${props => props.$marginTop || 'auto'};
  margin-bottom: ${props => props.$marginBottom || 'auto'};

  button,
  a {
    display: flex;
    justify-content: center;

    svg {
      font-size: 24px;
    }
  }
`

export const InputGroup = styled.div<StylesProps>`
  width: 100%;
  flex: auto;
  max-width: ${props => props.$maxWidth || 'auto'};

  label {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    display: block;
    margin-bottom: 4px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid ${theme.colors.baseBlue.light20};

    &:focus {
      outline: none;
      border: 2px solid ${theme.colors.baseBlue.dark20};
    }
  }
`
