import styled, { css, keyframes } from 'styled-components';
import { typography } from '../../constants/tokens';

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
    margin: '132px auto 0 auto',
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

export const NoResultState = styled.div({
  marginTop: '132px',
  textAlign: 'center',
});

export const NoResultStateHeading = styled.p({
  ...typography.headingSmall,
  fontWeight: 700,
});

export const NoResultStateDescription = styled.p({
  marginTop: '24px',
  ...typography.bodyMedium,
  color: '#757575',
});
