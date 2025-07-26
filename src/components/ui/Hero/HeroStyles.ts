import { theme, transitions } from '@/styles/theme'
import Image from 'next/image'
import { styled } from 'styled-components'

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeroImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const HeroImageContent = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  z-index: 11;
`

export const TagDiv = styled.div`
  display: flex;
  gap: 10px;

  span:first-child {
    padding: 5px 10px;
    border-radius: 50px;
    background-color: ${theme.colors.baseGreen.dark};
  }

  span:last-child {
    padding: 5px 10px;
    border-radius: 50px;
    background-color: ${theme.colors.baseRed.light};
  }
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${theme.colors.baseBlue.light50};

  h2 {
    margin-top: 24px;
  }

  p {
    width: 400px;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  display: flex;
  gap: 10px;

  button,
  a {
    background-color: ${theme.colors.baseBlue.dark};
    border: 2px solid ${theme.colors.baseBlue.dark};
    font-size: 18px;
    padding: 8px 16px;
    color: ${theme.colors.baseBlue.light50};
    transition: ${transitions.default};

    &:hover {
      background-color: ${theme.colors.baseBlue.dark40};
      border: 2px solid ${theme.colors.baseBlue.dark40};
      box-shadow: 4px 4px 4px ${theme.colors.baseCyan.light};
      color: ${theme.colors.baseCyan.light};
    }
  }
`
