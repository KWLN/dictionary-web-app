import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    fontFamily: 'Inter, sans-serif',
    color: '#2d2d2d',
  },

  button: {
    /*
     * The following removes all default styles from a button.
     * Source: https://clubmate.fi/button-reset
     */
    background: 'none',
    borderWidth: '0',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    padding: '0',
  },
});
