import styled from 'styled-components';

export const Page = styled.div({
  padding: '58px 352px',
});

export const PageHeader = styled.header({
  marginBottom: '52px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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

export const PageContent = styled.div({ marginTop: '48px' });
