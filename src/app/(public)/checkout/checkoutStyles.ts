import { Button } from '@/components/ui/Button/Button'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

type StylesProps = {
  $maxWidth?: string
  $marginTop?: string
  $marginBottom?: string
  $isActive?: boolean
}

export const CheckoutContainer = styled.div<StylesProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.baseBlue.dark30};

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

export const CartEmpty = styled.div`
  padding: 24px;
  margin: 0 24px;
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${theme.colors.baseBlue.light30};
  font-weight: 600;

  h2,
  p {
    color: ${theme.colors.baseBlue.dark30};
    margin-bottom: 24px;
  }
`

export const CartEmptyImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Row = styled.div<StylesProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${props => props.$marginTop || 'auto'};
  margin-bottom: ${props => props.$marginBottom || 'auto'};

  ${media.mobile} {
    flex-direction: column;
  }
`

export const TabDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

export const TabStyledButton = styled(Button)<{ $isActive?: boolean }>`
  background-color: ${props => (props.$isActive ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light08)};
  border: 1px solid ${props => (props.$isActive ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light08)};

  &:hover {
    background-color: ${props => (props.$isActive ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light08)};
    border: 1px solid ${props => (props.$isActive ? theme.colors.baseBlue.dark30 : theme.colors.baseBlue.light08)};
  }

  svg {
    font-size: 24px;
  }

  ${media.mobile} {
    width: 100%;
  }
`

export const InputGroup = styled.div<StylesProps>`
  width: 100%;
  flex: auto;
  max-width: ${props => props.$maxWidth || 'auto'};

  small {
    color: ${theme.colors.baseRed.base};
    background-color: ${theme.colors.baseRed.light02};
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    display: block;
    width: 100%;
  }

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

    &.error {
      border: 2px solid ${theme.colors.baseRed.base};
      background-color: ${theme.colors.baseRed.light02};
    }
  }

  ${media.mobile} {
    max-width: 100%;
    margin-bottom: 12px;
  }
`

export const Disclaimer = styled.div`
  margin-top: 24px;
  font-size: 12px;
  text-align: start;
`
