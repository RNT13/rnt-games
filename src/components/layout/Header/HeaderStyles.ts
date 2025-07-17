import { theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  background: linear-gradient(100deg, ${theme.colors.baseBlue.dark40}, ${theme.colors.baseBlue.dark20});
  border-bottom: 5px solid ${theme.colors.baseBlue.dark};
  position: sticky;
  top: 0;
  z-index: 15;
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

  a {
    background-color: transparent;
    border: transparent;
    color: ${theme.colors.baseBlue.light40};
    transition: ${transitions.default};

    &:hover {
      background-color: transparent;
      border: transparent;
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
      transition: ${transitions.default};
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const HeaderCart = styled.div`
  button {
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
      font-weight: 900;
      top: 0px;
      right: 4px;
      width: 20px;
      height: 20px;
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

  a {
    background-color: ${theme.colors.baseGreen.dark20};
    border: 2px solid ${theme.colors.baseGreen.dark20};
    color: ${theme.colors.baseGreen.light50};

    &:hover {
      background-color: ${theme.colors.baseGreen.dark30};
      border: 2px solid ${theme.colors.baseGreen.dark30};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
    }
  }
`

export const HeaderRegister = styled.div`
  display: flex;
  gap: 12px;

  a {
    background-color: ${theme.colors.baseBlue.dark30};
    border: 2px solid ${theme.colors.baseBlue.dark30};
    color: ${theme.colors.baseBlue.light50};

    &:hover {
      background-color: ${theme.colors.baseBlue.dark40};
      border: 2px solid ${theme.colors.baseBlue.dark40};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
    }
  }
`

export const HeaderUserAvatar = styled.div``

export const UserAvatar = styled.div`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
