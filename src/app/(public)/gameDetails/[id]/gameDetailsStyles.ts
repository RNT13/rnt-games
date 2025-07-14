import { theme } from '@/styles/theme'
import Image from 'next/image'
import { styled } from 'styled-components'

export const DetailsContainer = styled.div``

export const DetailsContent = styled.div``

export const DetailsHero = styled.div`
  position: relative;
  height: 80vh;
`

export const HeroImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DetailsHeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 10;

  h2,
  h3 {
    color: ${theme.colors.baseBlue.light50};
    margin-bottom: 12px;
  }
`

export const TagDiv = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 24px;
`

export const DetailsHeroInfo = styled.div`
  background-color: ${theme.colors.baseBlue.dark30};
  width: 100%;
  max-width: 300px;
  padding-bottom: 8px;

  span {
    text-decoration: line-through;
  }

  button {
    width: 100%;
  }
`
