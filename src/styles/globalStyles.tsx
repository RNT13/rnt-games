'use client'

import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.baseBlue.light40};
    color: ${theme.colors.baseBlue.light50};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }

  .overlayBlur {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 10;
    pointer-events: none;
  }

  .overlayDarck {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  pointer-events: none;
  }
`;
