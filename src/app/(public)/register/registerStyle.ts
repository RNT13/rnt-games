import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const RegisterContent = styled.div`
  padding: 18px;
  width: 400px;
  height: auto;
  background-color: ${theme.colors.baseBlue.light30};
  border: 1px solid ${theme.colors.baseBlue.dark};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  text-align: center;
`

export const RegisterHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.baseBlue.dark};
  margin-bottom: 12px;

  h2 {
    margin-bottom: 12px;
  }
`

export const RegisterForm = styled.form`
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

    svg {
      font-size: 24px;
    }
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

export const RegisterFooter = styled.div`
  margin-top: 12px;
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
