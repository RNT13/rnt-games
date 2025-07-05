import { StyledLink } from '@/components/ui/Button/ButtonStyles'
import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 32px 0;
  background: linear-gradient(100deg, ${theme.colors.baseCyan.dark40}, ${theme.colors.baseCyan.dark20});
  border-top: 5px solid ${theme.colors.baseCyan.dark};
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

  ${StyledLink} {
    padding: 10px;
    border-radius: 50%;
    font-size: 24px;
    background-color: ${theme.colors.baseCyan.dark30};
    border: 2px solid ${theme.colors.baseCyan.dark30};

    &:hover {
      background-color: ${theme.colors.baseCyan.light20};
      border: 2px solid ${theme.colors.baseCyan.light20};

      svg {
        color: ${theme.colors.baseCyan.dark30};
      }
    }
  }
`

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.baseCyan.light20};
`

export const FooterCopy = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.baseCyan.light20};
`
