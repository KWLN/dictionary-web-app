import styled from 'styled-components';

// The "handle" is the circular knob on the toggle that moves between the on/off states
const TOGGLE_HANDLE_DIAMETER = '20px';
const TOGGLE_PADDING = '3px';

export const Container = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
});

export const ToggleButton = styled.button({
  display: 'flex',
  alignItems: 'center',
});

// Implementation inspired by https://kittygiraudel.com/2021/04/05/an-accessible-toggle/#button-variant
export const ToggleDisplay = styled.span<{ isDarkModeEnabled: boolean }>((props) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  height: `calc(${TOGGLE_HANDLE_DIAMETER} + ${TOGGLE_PADDING} * 2)`,
  width: `calc(${TOGGLE_HANDLE_DIAMETER} * 2 + ${TOGGLE_PADDING} * 2)`,
  boxSizing: 'content-box',

  position: 'relative',
  borderRadius: '100vh',
  backgroundColor: props.isDarkModeEnabled ? '#A445ED' : '#757575',

  cursor: 'pointer',
  transitionDuration: '250ms',

  // This renders the handle/knob
  '&::before': {
    content: '""',
    height: TOGGLE_HANDLE_DIAMETER,
    width: TOGGLE_HANDLE_DIAMETER,
    borderRadius: '50%',

    position: 'absolute',
    zIndex: '2',
    top: '50%',
    left: TOGGLE_PADDING,
    transform: props.isDarkModeEnabled ? 'translate(100%, -50%)' : 'translate(0, -50%)',

    backgroundColor: '#FFFFFF',
    transition: 'inherit',
  },
}));
