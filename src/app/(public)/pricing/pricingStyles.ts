import { media, theme, transitions } from '@/styles/theme'
import { styled } from 'styled-components'

export const PricingContainer = styled.div``

export const PricingContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  > h2 {
    font-size: 32px;
    margin: 50px 0;
  }
`

export const PricingPlan = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 16px;

  ${media.tablet},${media.mobile} {
    grid-template-columns: 1fr;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.baseBlue.dark50};
  }

  .free {
    background-image: linear-gradient(180deg, ${theme.colors.baseRed.dark08} 0%, ${theme.colors.baseRed.dark02} 100%);
    border: 5px solid ${theme.colors.baseRed.base};
    transition: ${transitions.default};

    &:hover {
      transition: ${transitions.default};
      transform: translateY(-3px);
      background-image: linear-gradient(90deg, ${theme.colors.baseRed.light02} 0%, ${theme.colors.baseRed.dark08} 100%);
    }
  }

  .freeButton {
    background-image: linear-gradient(90deg, ${theme.colors.baseRed.light02} 0%, ${theme.colors.baseRed.dark08} 100%);
    border: 1px solid ${theme.colors.baseRed.base};

    &:hover {
      background-image: linear-gradient(180deg, ${theme.colors.baseRed.light02} 0%, ${theme.colors.baseRed.dark08} 100%);
    }
  }

  .premium {
    background-image: linear-gradient(180deg, ${theme.colors.baseGreen.light02} 0%, ${theme.colors.baseGreen.dark04} 50%);
    border: 5px solid ${theme.colors.baseGreen.base};
    transition: ${transitions.default};

    &:hover {
      transition: ${transitions.default};
      transform: translateY(-3px);
      background-image: linear-gradient(90deg, ${theme.colors.baseGreen.light02} 0%, ${theme.colors.baseGreen.dark08} 100%);
    }
  }

  .premiumButton {
    background-image: linear-gradient(90deg, ${theme.colors.baseGreen.light02} 0%, ${theme.colors.baseGreen.dark04} 50%);
    border: 1px solid ${theme.colors.baseGreen.base};
    transition: ${transitions.default};

    &:hover {
      background-image: linear-gradient(180deg, ${theme.colors.baseGreen.light02} 0%, ${theme.colors.baseGreen.dark08} 100%);
    }
  }

  .pro {
    background-image: linear-gradient(180deg, ${theme.colors.baseBlue.light} 0%, ${theme.colors.baseBlue.dark08} 100%);
    border: 5px solid ${theme.colors.baseBlue.base};
    transition: ${transitions.default};

    &:hover {
      transition: ${transitions.default};
      transform: translateY(-3px);
      background-image: linear-gradient(90deg, ${theme.colors.baseBlue.light02} 0%, ${theme.colors.baseBlue.dark08} 100%);
    }
  }

  .proButton {
    background-image: linear-gradient(90deg, ${theme.colors.baseBlue.light} 0%, ${theme.colors.baseBlue.dark08} 100%);
    border: 1px solid ${theme.colors.baseBlue.light20};

    &:hover {
      background-image: linear-gradient(180deg, ${theme.colors.baseBlue.light02} 0%, ${theme.colors.baseBlue.dark08} 100%);
    }
  }
`

export const PricingPlanCard = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;

  ${media.tablet} {
    width: 100%;
    max-width: 100%;
  }
`

export const PricingCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    span {
      display: flex;
      padding: 4px 8px;
      border-radius: 8px;
      border: 1px solid ${theme.colors.baseGreen.light30};
      color: ${theme.colors.baseGreen.light30};
      margin-bottom: 12px;
    }
  }

  h2 {
    font-size: 32px;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  width: 100%;

  button {
    width: 100%;
    max-width: 350px;
    height: 50px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.mobile} {
      font-size: 16px;
      height: 44px;
    }
  }
`

export const PricingCardBody = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    gap: 12px;

    svg {
      color: ${theme.colors.baseGreen.base};
    }

    .svgRed {
      color: ${theme.colors.baseRed.dark20};
    }
  }
`
