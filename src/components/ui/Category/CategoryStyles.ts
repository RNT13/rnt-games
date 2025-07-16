import { styled } from 'styled-components'

export const CategoryContainer = styled.div`
  width: 100%;
`

export const CategoryContent = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(6, 1fr);
`
