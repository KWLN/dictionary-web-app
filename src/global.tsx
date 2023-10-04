import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
    color: #2d2d2d;
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
