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

export const Divider = styled.hr({
  margin: '0 26px',
  height: '100%',
  width: '1px',
  border: 0,
  background: '#E9E9E9',
});

export const PageContent = styled.div({ marginTop: '48px' });
