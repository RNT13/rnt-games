import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const CartContainer = styled.aside`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  color: ${theme.colors.baseBlue.light50};
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 12px;
  width: 400px;
  height: 100%;
  background-color: ${theme.colors.baseBlue.dark20};
  z-index: 100;
`

export const CartHeader = styled.div`
  height: 10%;
  color: ${theme.colors.baseBlue.light50};

  button {
    border-radius: 50%;
    padding: 0;
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: transparent;
    border: transparent;

    svg {
      font-size: 24px;
      color: ${theme.colors.baseBlue.light30};
    }

    &:hover {
      background-color: transparent;
      border: transparent;
      box-shadow: none;
      transform: none;
    }
  }
`

export const CartBody = styled.div`
  height: 70%;
  overflow: auto;
  scrollbar-width: none;
`

export const CartFooter = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
  }

  div:last-child {
    display: flex;
    justify-content: end;

    button {
      background-color: ${theme.colors.baseBlue.light};
      border: 2px solid ${theme.colors.baseBlue.light};
      color: ${theme.colors.baseBlue.light40};

      &:hover {
        background-color: ${theme.colors.baseBlue.light30};
        border: 2px solid ${theme.colors.baseBlue.light30};
        color: ${theme.colors.baseBlue.dark30};
      }
    }
  }
`
