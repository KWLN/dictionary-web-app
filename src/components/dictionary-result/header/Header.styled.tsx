import styled from 'styled-components';
import playIcon from './assets/icon-play.svg';
import playIconHovered from './assets/icon-play-hovered.svg';

export const HeaderContainer = styled.div({
  display: 'flex',
});

export const WordDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const PronunciationButton = styled.button({
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
