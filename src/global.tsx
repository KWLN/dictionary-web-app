import { createGlobalStyle } from 'styled-components';
import { ColorTokens } from './constants/tokens';

export type ColorMode = 'light' | 'dark';
export type FontFamily = 'Inconsolata' | 'Inter' | 'Lora';

export type Theme = {
  colorMode: ColorMode;
  colors: ColorTokens['light'] | ColorTokens['dark'];
  fontFamily: FontFamily;
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  button {
    /*
     * The following removes all default styles from a button.
     * Source: https://clubmate.fi/button-reset
     */
    background: none;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0;
  }
  `;
