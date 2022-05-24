import styled from 'styled-components';

export const Container = styled.div<TranferListItemProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .itemList {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background: ${props =>
      props.selected ? '#408CFE' : 'transparent'};

    & + .itemList {
      margin-top: 0.5rem;
    }
  }

  .block {
    max-width: 45%;
    flex: 1;
    align-self: flex-start;

    &:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    h1 {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #212121;
      margin-bottom: 8px;
      align-self: flex-start;
    }

    .list {
      max-width: 450px;
      width: 100%;
      height: ${props => props.height ? `${props.height}px` : '300px'};
      max-height: 400px;
      min-height: 250px;
      border-radius: 9px;
      border: 1px solid #ccc;
      box-shadow: 0 0 15px 5px rgb(0 0 0 / 7%);
      background: #FFF;
      padding: 16px;
      overflow-y: auto;
    }

    &:last-child {
      .list {
        background: #FFF;
      }
    }

    .input-option {
      display: flex;
      align-items: center;
      align-self: flex-start;
      margin-top: 24px;
      background: transparent;

      p {
        font-size: 12px;
      }

      input {
        margin-left: 16px;
        width: 18px;
        height: 18px;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;

    button {
      width: 32px;
      height: 32px;
      background: #f3f6f9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 20px;
      }

      & + button {
        margin-top: 4px;
      }

      &:nth-of-type(2) {
        margin-bottom: 20px;
      }
    }

    .rounded {
      transform: rotate(-180deg);
    }
  }

  @media screen and (max-width: 610px) {
    flex-direction: column;

    .block {
      max-width: 100%;
      width: 100%;
      align-self: flex-start !important;

      &:last-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h1 {
          position: relative;
          left: 0%;
        }
      }
    }

    .buttons {
      width: 40%;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
      margin: 16px 0;

      button {
        margin: 0 !important;
        margin: 0 8px;
      }
    }
  }
`;

interface TranferListItemProps {
  selected?: boolean;
  height?: number;
}

export const TranferListItem = styled.div<TranferListItemProps>`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  transition: none;
  justify-content: space-between;
  border-radius: 5px;
  background: ${props =>
    props.selected ? '#408CFE' : 'transparent'};

  .iconItem {
    display: flex;
    .MuiSvgIcon-colorPrimary {
      transition: none !important;
      color: ${props =>
        props.selected ? '#fff' : '#408CFE'} !important;
    }
  }

  &:hover {
    background: #408CFE;
    cursor: pointer;

    p {
      color: #fff;
    }
    .MuiSvgIcon-colorPrimary {
      color: #fff !important;
      transition: none !important;
    }
  }

  & + button {
    margin-top: 8px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${props => (props.selected ? '#fff' : '#464e5f')};
    margin-left: 0.7rem;
  }

  .icon {
    width: 24px;
    height: 24px;
    background: transparent;

    img {
      max-width: 100%;
    }
  }
`;
