import styled from 'styled-components';
import { typography } from '../../../../constants/tokens';

export const List = styled.ul({
  listStyle: 'none',
  paddingLeft: '48px',
  paddingRight: '48px',

  ...typography.bodyMedium,
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

export const ExampleRow = styled.p({
  marginTop: '12px',
  color: '#757575',
});
