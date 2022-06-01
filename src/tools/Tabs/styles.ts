import styled from 'styled-components';

export const TabContainer = styled.div`
  .tab-title {
    color: ${props =>
      props.theme.colors ? props.theme.colors.title : '#404040'};
  }
`;

export const Container = styled.div`
  background: ${props =>
    props.theme.colors ? props.theme.colors.background : '#fff'};
  border-radius: 15px;
  flex-grow: 1;

  .MuiPaper-root {
    background: transparent;
    box-shadow: none;
  }
`;
