import styled from 'styled-components';
import { typography } from '../../constants/tokens';

export const FieldContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const InputWrapper = styled.div({
  position: 'relative',
});

export const Input = styled.input<{ $isInvalid: boolean }>((props) => ({
  boxSizing: 'border-box',
  border: 'none',
  borderRadius: '16px',
  height: '64px',
  width: '100%',
  // Right padding has extra 24+16px to account for icon.
  // 24px comes the normal padding, 16px comes from the icon width.
  // This ensures the input text does not overlap with the icon and has sufficient spacing.
  padding: '20px 64px 20px 24px',
  background: props.theme.colors.input,

  ...typography.headingSmall,
  fontWeight: 700,

  outline: props.$isInvalid ? `1px solid ${props.theme.colors.error}` : 'none',

  '&:active, &:focus': {
    outline: `1px solid ${props.$isInvalid ? props.theme.colors.error : props.theme.colors.accent}`,
  },

  '&::placeholder': {
    color: props.theme.colors.textPrimary,
    opacity: 0.25,
  },
}));

export const Icon = styled.img({
  position: 'absolute',
  top: '50%',
  right: '24px',
  transform: 'translateY(-50%)',
});
