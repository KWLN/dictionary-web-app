import styled from 'styled-components';
import { typography } from '../../../../constants/tokens';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
});

export const Heading = styled.h3((props) => ({
  color: props.theme.colors.textSecondary,
  ...typography.headingSmall,
  flex: '1 1 0',
}));

export const WordList = styled.ul({
  marginLeft: '22px',
  listStyle: 'none',
  flex: '6 6 0',
});

export const WordListItem = styled.li((props) => ({
  display: 'inline-block',
  ...typography.headingSmall,
  fontWeight: 700,
  color: props.theme.colors.accent,

  '&:not(:last-of-type)': {
    marginRight: '4px',
  },

  '&:not(:last-of-type)::after': {
    content: '", "',
    color: props.theme.colors.textSecondary,
  },
}));
