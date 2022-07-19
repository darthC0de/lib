import styled, { css } from 'styled-components';

interface ContainerProps {
  error: boolean;
  success: boolean;
}

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: 14px;
    line-height: 14px;
    background-color: #408cfe;
    color: #f9f9f9;
    border-radius: 5px;
    padding: 3px 6px;
    margin: 2px;
    span {
      display: none;
    }
    &:hover span {
      display: inline-block;
      cursor: pointer;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  .input-wrapper {
    width: 100%;
    height: 38px;
    display: flex;
    border: 1px solid #afafaf;
    border-radius: 5px;
    &:focus-within {
      box-shadow: 0 0 0 0.5px #2684ff;
      border: 0.5px solid #2684ff;
    }
    input {
      flex: 1;
      height: 100%;
      line-height: 64px;
      border-radius: 5px;
      background: #ffffff;
      padding-left: 10px;
      font-size: 13px;
      overflow: auto;
      color: #555555;
      ${props =>
        props.error &&
        css`
          border-color: ${!props.error ? '#2684ff' : '#e12325'};
          box-shadow: 0 0 0 0.5px ${!props.error ? '#2684ff' : '#e12325'};
        `}

      &::placeholder {
        font-size: 13px;
        line-height: 45px;
        font-weight: 400;
        color: #b0b0b0;
      }
    }

    .icon {
      width: 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
      }
    }
  }

  .error {
    text-align: left;
    padding: 4px;

    p {
      font-size: 13px;
      color: #e12325;
    }
  }
`;
