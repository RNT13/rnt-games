import { styled } from 'styled-components'

export const ComingSoonGamesListContainer = styled.div`
  width: 100%;
`

export const ComingSoonGamesListContent = styled.ul`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`
