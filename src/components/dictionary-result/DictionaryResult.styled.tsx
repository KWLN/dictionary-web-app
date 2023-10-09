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
  (props) => ({
    margin: '132px auto 0 auto',
    width: '48px',
    height: '48px',
    border: `5px solid ${props.theme.colors.textSecondary}`,
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    boxSizing: 'border-box',
  }),
  css`
    animation: ${rotation} 1s linear infinite;
  `
);

export const NoResultState = styled.div({
  marginTop: '132px',
  textAlign: 'center',
});

export const NoResultStateHeading = styled.p({
  fontSize: '16px',
  fontWeight: 700,

  '@media (min-width: 768px)': {
    ...typography.headingSmall,
    fontWeight: 700,
  },
});

export const NoResultStateDescription = styled.p((props) => ({
  marginTop: '24px',
  color: props.theme.colors.textSecondary,
  fontSize: '15px',

  '@media (min-width: 768px)': {
    ...typography.bodyMedium,
  },
}));
