import styled from 'styled-components';

export const Page = styled.div({
  padding: '24px 24px',

  '@media (min-width: 768px)': {
    padding: '58px 40px',
  },

  '@media (min-width: 1440px)': {
    padding: '58px 352px',
  },
});

export const PageHeader = styled.header({
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '@media (min-width: 768px)': {
    marginBottom: '52px',
  },
});

export const Logo = styled.img({});

export const Controls = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

export const Divider = styled.hr((props) => ({
  margin: '0 26px',
  height: '100%',
  width: '1px',
  border: 0,
  background: props.theme.colors.divider,
}));

export const PageContent = styled.div({
  marginTop: '24px',

  '@media (min-width: 768px)': {
    marginTop: '48px',
  },
});
