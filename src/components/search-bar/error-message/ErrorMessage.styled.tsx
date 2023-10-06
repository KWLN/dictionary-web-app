import styled from 'styled-components';
import { typography } from '../../../constants/tokens';

export const Message = styled.p((props) => ({
  ...typography.headingSmall,
  margin: 0,
  color: props.theme.colors.error,
}));
