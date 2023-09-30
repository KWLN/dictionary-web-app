import styled from 'styled-components';
import { typography } from '../../../constants/tokens';
import NewWindowIcon from './assets/icon-new-window.svg';

export const Container = styled.footer({
  ...typography.bodySmall,
});

export const Divider = styled.hr({
  display: 'flex',
  alignSelf: 'center',
  height: '1px',
  width: '100%',
  border: 0,
  background: '#E9E9E9',
});

export const Source = styled.div({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'row',
});

export const Label = styled.p({
  color: '#757575',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});

export const SourceUrl = styled.a({
  marginLeft: '20px',
  color: '#2D2D2D',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',

  '&::after': {
    marginLeft: '8px',
    content: `url(${NewWindowIcon})`,
  },
});
