import styled from 'styled-components';
import { typography } from '../../../constants/tokens';
import NewWindowIcon from './assets/icon-new-window.svg';

export const Container = styled.footer({
  ...typography.bodySmall,
});

export const Divider = styled.hr((props) => ({
  display: 'flex',
  alignSelf: 'center',
  height: '1px',
  width: '100%',
  border: 0,
  background: props.theme.colors.divider,
}));

export const Source = styled.div({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'row',
});

export const Label = styled.p((props) => ({
  color: props.theme.colors.textSecondary,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
}));

export const SourceUrl = styled.a((props) => ({
  marginLeft: '20px',
  color: props.theme.colors.textPrimary,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',

  '&::after': {
    marginLeft: '8px',
    content: `url(${NewWindowIcon})`,
  },
}));
