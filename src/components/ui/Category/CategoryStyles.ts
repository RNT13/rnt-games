import { theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export type CardProps = {
  $bgColor: 'light' | 'dark'
}

export const CategoryContainer = styled.div`
  width: 100%;
`

export const CategoryContent = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(6, 1fr);
`

export const CategoryCard = styled.div<CardProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.dark40 : theme.colors.baseBlue.light30)};
  color: ${props => (props.$bgColor === 'light' ? theme.colors.baseBlue.light30 : theme.colors.baseBlue.dark30)};
  overflow: hidden;
  transition: ${transitions.default};

  &:hover {
    box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
    transform: translateY(-2px);
    transition: ${transitions.default};
  }
`

export const CategoryCardHeader = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CategoryCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px 8px;

  p {
    font-size: 12px;
  }

  h4 {
    font-size: 18px;
  }
`

export const CategoryCardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
`
