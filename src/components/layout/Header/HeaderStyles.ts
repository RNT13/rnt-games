import { media, theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

interface MenuWindowProps {
  $isOpen: boolean
}

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 15;

  ${media.tablet}, ${media.mobile} {
    flex-direction: column;
  }
`

export const HeaderNav = styled.nav`
  height: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(100deg, ${theme.colors.baseBlue.dark40}, ${theme.colors.baseBlue.dark20});
  border-bottom: 5px solid ${theme.colors.baseBlue.dark};
  ${transitions.default};
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderMenu = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 24px;
    color: ${theme.colors.baseBlue.light30};
  }

  ${media.tablet}, ${media.mobile} {
    display: flex;
  }
`

export const HeaderMenuWindow = styled.div<MenuWindowProps>`
  width: 100%;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderLogo = styled.div``

export const HeaderUlDiv = styled.div`
  ${media.tablet}, ${media.mobile} {
    display: none;
  }
`

export const HeaderUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
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

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    cursor: pointer;
    transition: ${transitions.default};
    color: ${theme.colors.baseBlue.light40};

    &:hover {
      color: ${theme.colors.baseCyan.light};
      background-color: transparent;
      border: none;
      box-shadow: none;
      transition: ${transitions.default};
    }

    svg {
      width: 35px;
      height: 35px;
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
