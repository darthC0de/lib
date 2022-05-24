import styled from 'styled-components';

interface ContainerProps {
  checked: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 0.5px solid rgba(37, 75, 132, 0.25);
  background: ${props =>
    props.checked ? props.theme.colors.primary : props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  .switch-content {
    position: relative;

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`;
