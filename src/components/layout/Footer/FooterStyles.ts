import { theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 32px 0;
  background: linear-gradient(100deg, ${theme.colors.baseBlue.dark20}, ${theme.colors.baseBlue.dark40});
  border-top: 5px solid ${theme.colors.baseBlue.dark};
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const FooterLogo = styled.div``

export const FooterUl = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;

  a {
    padding: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.baseBlue.dark};
    border: 2px solid ${theme.colors.baseBlue.dark};
    color: ${theme.colors.baseBlue.light50};
    transition: ${transitions.default};

    svg {
      font-size: 32px;
    }

    &:hover {
      background-color: ${theme.colors.baseBlue.dark40};
      border: 2px solid ${theme.colors.baseBlue.dark40};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
      transition: ${transitions.default};
    }
  }
`

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.baseBlue.light20};
`

export const FooterCopy = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.baseBlue.light20};
`
