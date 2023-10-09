import styled from 'styled-components';
import { typography } from '../../../../constants/tokens';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
});

export const Heading = styled.h3((props) => ({
  flex: '1 1 0',
  color: props.theme.colors.textSecondary,
  fontSize: '16px',
  fontWeight: 400,

  '@media (min-width: 768px)': {
    ...typography.headingSmall,
  },
}));

export const WordList = styled.ul({
  marginLeft: '22px',
  listStyle: 'none',
  flex: '6 6 0',
});

export const WordListItem = styled.li((props) => ({
  display: 'inline-block',
  cursor: 'pointer',
  color: props.theme.colors.accent,
  fontSize: '16px',
  fontWeight: 700,

  '@media (min-width: 768px)': {
    ...typography.headingSmall,
    fontWeight: 700,
  },

  '&:not(:last-of-type)': {
    marginRight: '4px',
  },

  '&:not(:last-of-type)::after': {
    content: '", "',
    color: props.theme.colors.textSecondary,
  },
}));
