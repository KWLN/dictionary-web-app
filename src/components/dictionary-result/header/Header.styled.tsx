import styled from 'styled-components';
import playIcon from './assets/icon-play.svg';
import playIconHovered from './assets/icon-play-hovered.svg';
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
  ...typography.headingLarge,
});

export const Phonetic = styled.p((props) => ({
  ...typography.headingMedium,
  color: props.theme.colors.accent,
}));

export const PronunciationButton = styled.button({
  alignSelf: 'center',
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  backgroundImage: `url(${playIcon})`,
  cursor: 'pointer',

  '&:hover': {
    backgroundImage: `url(${playIconHovered})`,
  },

  '&:active': {
    backgroundImage: `url(${playIconHovered})`,
    opacity: 0.75,
  },
});
