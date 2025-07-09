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
  position: relative;
  color: ${theme.colors.baseBlue.light50};
  border-bottom: 1px solid ${theme.colors.baseBlue.light30};
  margin-bottom: 12px;

  svg {
    color: ${theme.colors.baseBlue.light40};
  }
`

export const CartBody = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
`

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${theme.colors.baseBlue.light30};
  margin-top: 12px;

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
