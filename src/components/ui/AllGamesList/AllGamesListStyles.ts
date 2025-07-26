import { media, theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const AllGamesContainer = styled.div`
  width: 100%;
`

export const AllGamesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;

  > h2 {
    font-size: 32px;
    margin: 40px 0;
  }

  section {
    width: 100%;
  }
`

export const AllGamesNav = styled.nav`
  padding: 24px;
  background-color: ${theme.colors.baseBlue.dark30};
  color: ${theme.colors.baseBlue.light30};
  border-radius: 12px;
  margin-bottom: 50px;
`

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  cursor: pointer;

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

export const NavSearchBar = styled.div``

export const NavWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 24px auto;

  input {
    width: 100%;
    height: 46px;
    border-radius: 50px;
    padding: 0 60px 0 16px;
    font-weight: 700;
    background-color: ${theme.colors.baseBlue.dark30};
    color: ${theme.colors.baseBlue.light30};
    border: 3px solid ${theme.colors.baseBlue.light30};
    transition: ${transitions.default};

    &::placeholder {
      color: ${theme.colors.baseBlue.light30};
      transition: ${transitions.default};
    }

    &:focus {
      border-color: ${theme.colors.baseBlue.dark};
      outline: none;
      background-color: ${theme.colors.baseBlue.light};
      color: ${theme.colors.baseBlue.dark30};
      transition: ${transitions.default};

      &::placeholder {
        color: ${theme.colors.baseBlue.dark};
        transition: ${transitions.default};
      }
    }
  }

  &:focus-within button {
    background-color: ${theme.colors.baseBlue.light};
    color: ${theme.colors.baseBlue.light30};
    border-color: ${theme.colors.baseBlue.dark};
  }
`

export const SeachButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  background-color: ${theme.colors.baseBlue.dark30};
  color: ${theme.colors.baseBlue.light30};
  border: 3px solid ${theme.colors.baseBlue.light30};
  transition: ${transitions.default};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.baseBlue.dark30};
    color: ${theme.colors.baseBlue.light30};
    border: 3px solid ${theme.colors.baseBlue.light30};
  }
`

export const SectionCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`
