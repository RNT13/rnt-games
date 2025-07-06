import { StyledButton, StyledLink } from '@/components/ui/Button/ButtonStyles'
import { theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  background: linear-gradient(100deg, ${theme.colors.baseBlue.dark40}, ${theme.colors.baseBlue.dark20});
  border-bottom: 5px solid ${theme.colors.baseBlue.dark};
`

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.div``

export const HeaderUl = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;

  ${StyledLink} {
    background-color: ${theme.colors.baseBlue.dark};
    border: 2px solid ${theme.colors.baseBlue.dark};
    color: ${theme.colors.baseBlue.light50};
    transition: ${transitions.default};

    &:hover {
      background-color: ${theme.colors.baseBlue.dark40};
      border: 2px solid ${theme.colors.baseBlue.dark40};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
      transition: ${transitions.default};
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  gap: 12px;
`

export const HeaderCart = styled.div`
  ${StyledButton} {
    position: relative;
    background-color: transparent;
    border: none;
    box-shadow: none;

    svg {
      font-size: 32px;
      color: ${theme.colors.baseBlue.light20};
      transition: ${transitions.default};

      &:hover {
        color: ${theme.colors.baseBlue.dark40};
        transition: ${transitions.default};
      }
    }

    span {
      position: absolute;
      font-size: 12px;
      top: 0px;
      right: 4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.baseRed.light};
      color: ${theme.colors.baseBlue.light50};
    }
  }
`

export const HeaderLogin = styled.div`
  display: flex;
  gap: 12px;

  ${StyledLink} {
    background-color: ${theme.colors.baseBlue.dark};
    border: 2px solid ${theme.colors.baseBlue.dark};
    color: ${theme.colors.baseBlue.light50};

    &:hover {
      background-color: ${theme.colors.baseBlue.dark40};
      border: 2px solid ${theme.colors.baseBlue.dark40};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
    }
  }
`
