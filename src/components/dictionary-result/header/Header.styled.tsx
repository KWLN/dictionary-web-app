import styled, { css } from 'styled-components';
import { typography } from '../../../constants/tokens';

export const HeaderContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const WordDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Word = styled.h1({
  fontSize: '32px',
  fontWeight: '700',

  '@media (min-width: 768px)': {
    ...typography.headingLarge,
  },
});

export const Phonetic = styled.p((props) => ({
  color: props.theme.colors.accent,
  ...typography.bodyMedium,

  '@media (min-width: 768px)': {
    ...typography.headingMedium,
  },
}));

export const PronunciationButton = styled.button(
  {
    alignSelf: 'center',
    borderRadius: '50%',
    cursor: 'pointer',

    '& svg': {
      width: '48px',
      height: '48px',
    },

    '&:active': {
      opacity: 0.75,
    },
  },
  // Using string interpolation for the media query as I
  // couldn't get the nested selector working in the object syntax
  css`
    @media (min-width: 768px) {
      & svg {
        width: 75px;
        height: 75px;
      }
    }
  `
);
