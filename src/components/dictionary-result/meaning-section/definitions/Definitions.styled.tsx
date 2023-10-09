import styled from 'styled-components';
import { typography } from '../../../../constants/tokens';

export const Heading = styled.h3((props) => ({
  marginBottom: '24px',
  color: props.theme.colors.textSecondary,
  fontSize: '16px',
  fontWeight: 400,

  '@media (min-width: 768px)': {
    ...typography.headingSmall,
  },
}));

export const List = styled.ul({
  listStyle: 'none',
  paddingLeft: '48px',
  paddingRight: '48px',
  fontSize: '15px',
  lineHeight: '24px',

  '@media (min-width: 768px)': {
    ...typography.bodyMedium,
  },
});

export const ListItem = styled.li({
  '&::before': {
    content: '"•"',
    color: '#8F19E8',
    position: 'absolute',
    marginLeft: '-29px',
  },

  '&:not(:last-of-type)': {
    marginBottom: '12px',
  },
});

export const DefinitionRow = styled.p({});

export const ExampleRow = styled.p((props) => ({
  marginTop: '12px',
  color: props.theme.colors.textSecondary,
}));
