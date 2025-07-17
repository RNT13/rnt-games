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
  padding: 8px;
  border-radius: 12px 12px 0 0;

  span {
    text-decoration: line-through;
  }

  button {
    width: 100%;
  }
`

export const Galery = styled.div`
  display: flex;
  gap: 12px;
`

export const GaleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 3px solid ${theme.colors.baseBlue.light20};

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    svg {
      font-size: 32px;
      color: ${theme.colors.baseBlue.light20};
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const GaleryModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`

export const GaleryModalContent = styled.div`
  position: relative;
  border-radius: 12px;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 32px;
    color: ${theme.colors.baseCyan.base};
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
