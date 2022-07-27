import styled from 'styled-components';

export const Container = styled.div`
  .input-wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    border: 1px solid #afafaf;
    border-radius: 4px;
    padding-right: 0;

    &:hover {
      transition: border 0.5s;
      border: 1px solid #afafaf;
    }

    input {
      flex: 1;
      height: 100%;
      line-height: 64px;
      background: transparent;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 13px;
      color: #555555;

      &:hover {
        border: 1px solid #afafaf;
      }

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
`;
