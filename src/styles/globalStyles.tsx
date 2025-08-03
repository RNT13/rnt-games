'use client'

import styled, { createGlobalStyle } from 'styled-components';
import { media, theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.colors.baseBlue.dark20};
    color: ${theme.colors.baseBlue.dark50};
  }


  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;

    ${media.tablet} {
      width: 90%;
      padding: 0 ;
    }

    ${media.mobile} {
      width: 95%;
      padding: 0 ;
    }
  }
`;


export const OverlayBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 100;
`

export const OverlayDarck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`

export const CloseButton = styled.button`
  border-radius: 50%;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: ${theme.colors.baseBlue.dark20};
  }

  &:hover {
    svg {
      color: ${theme.colors.baseBlue.light};
    }
  }
`

export const TitleH2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.baseBlue.light30};
`

export const TitleH3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${theme.colors.baseBlue.dark30};
`

export const MinorTextH4 = styled.h3`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  color: ${theme.colors.baseBlue.dark30};
`
