import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const LoginWindowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
`

export const LoginWindowContent = styled.div`
  position: absolute;
  padding: 18px;
  width: 400px;
  height: 400px;
  background-color: ${theme.colors.baseBlue.light30};
  border: 1px solid ${theme.colors.baseBlue.dark};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  text-align: center;
  z-index: 101;
`

export const LoginWindowHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.baseBlue.dark};

  button {
    border-radius: 50%;
    padding: 0;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: transparent;
    border: transparent;

    svg {
      font-size: 24px;
      color: ${theme.colors.baseBlue.dark};
    }

    &:hover {
      background-color: transparent;
      border: transparent;
      box-shadow: none;
      transform: none;
    }
  }

  h2 {
    margin-bottom: 12px;
  }
`

export const LoginWindowForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;

  button {
    width: 200px;
    display: flex;
    justify-content: center;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

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
    }
  }
`

export const LoginWindowFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 12px;

  a {
    color: ${theme.colors.baseBlue.dark};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
