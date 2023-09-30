import styled from 'styled-components';

export const Container = styled.div({
  '& > *:not(:last-child)': {
    marginBottom: '40px',
  },
});
