import styled from 'styled-components';
import { typography } from '../../../constants/tokens';

export const Container = styled.div({
  '& > *:not(:last-child)': {
    marginBottom: '40px',
  },
});

export const SectionHeader = styled.div({
  display: 'flex',
});

export const PartOfSpeech = styled.h2({
  ...typography.headingMedium,
  fontWeight: 700,
  fontStyle: 'italic',
});

export const Divider = styled.hr((props) => ({
  marginLeft: '20px',
  display: 'flex',
  alignSelf: 'center',
  height: '1px',
  width: '100%',
  border: 0,
  background: props.theme.colors.divider,
}));
