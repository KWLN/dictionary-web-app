import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div({
  '& > *:not(:last-child)': {
    marginBottom: '40px',
  },
});

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const LoadingSpinner = styled.div(
  {
    margin: '0 auto',
    width: '48px',
    height: '48px',
    border: '5px solid #757575',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    boxSizing: 'border-box',
  },
  css`
    animation: ${rotation} 1s linear infinite;
  `
);
