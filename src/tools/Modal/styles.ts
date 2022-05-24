import { Form } from '@unform/web';
import { darken } from 'polished';
import styled from 'styled-components';

interface ImportProps {
  progressBar: boolean;
  progress: boolean;
}

export const Container = styled(Form)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background: rgba(14, 14, 14, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .popup,
  .popupDelete {
    max-width: 500px;
    width: 100%;
    max-height: 750px;
    height: auto;
    background: #fff;
    border-radius: 5px;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    color: #404040;

    .popupHead {
      h5 {
        padding: 1.5rem;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
      }

      border-bottom: 1px solid #E1E1E1;
    }

    .popupBody {
      padding: 1.5rem;
    }

    .popupFooter {
      border-top: 1px solid #E1E1E1;

      .buttons {
        padding: 1rem 1.5rem;
        width: 100%;
        display: flex;
        justify-content: end;

        button {
          padding: 6px 16px;
          font-size: 0.875rem;
          min-width: 64px;
          border: 0.5px solid rgba(37, 75, 132, 0.25);
          border-radius: 5px;
          font-weight: 500;
          color: #f9f9f9;
          background: #408CFE;
          transition: background 0.3s;

          & + button {
            margin-left: 16px;
          }

          &.submit {
            background: #28CE6B;
            color: #f9f9f9;
          }

          &.exclusion {
            background: #ff3b4c;
            color: #f9f9f9;
          }
        }
      }
    }
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background: rgba(14, 14, 14, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  .headerReceive {
    width: 100%;
    padding: 16px;
    border-bottom: 1px solid #E1E1E1;
    h3 {
      color: #404040;
      font-size: 16px;
      line-height: 21px;
      font-weight: 600;
    }
  }

  .popupDelete {
    width: 580px;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-direction: column;

    > p {
      margin-bottom: 1.5rem;
    }

    .buttons {
      margin-left: auto;

      button {
        width: 88px;
        height: 48px;
        border-radius: 4px;
        font-weight: 600;
        color: #989bae;
        background: #e4e6ef;
        transition: background 0.3s;

        &:hover {
          background: ${darken(0.05, '#fff')};
        }

        & + button {
          margin-left: 16px;
        }

        &.submit {
          background: #3699ff;
          color: #fff;

          &:hover {
            background: ${darken(0.05, '#3699ff')};
          }
        }
        &.exclusion {
          background: #ff3b4c;
          color: #f9f9f9;
        }
      }
    }
  }

  .popup {
    max-width: 980px;
    margin: 0 1rem;
    width: 100%;
    background: #fff;
    border-radius: 7px;
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-direction: column;
    max-height: 750px;
    height: auto;

    .popupHeader {
      width: 100%;

      border-bottom: 1px solid #E1E1E1;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h5 {
        padding: 1.5rem;
        font-weight: 600;
        font-size: 16px;
        line-height: 21px;
        color: #404040;
      }

      .contentRightGrid {
        padding: 1.5rem;
        button {
          padding: 0;
          border-radius: none;
          background: none;
        }
      }
    }

    .informations-line {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 0.7rem 0;
      border-bottom: 1px solid #E1E1E1;

      flex-wrap: wrap;

      @media screen and (max-width: 710px) {
        justify-content: flex-start;
      }
    }

    .popUpTable {
      width: 100%;
      height: auto;

      .wrapper {
        width: 100%;

        .wrap {
          overflow-x: clip;
          /* background: #fff; */
          .table {
            border-radius: 5px !important;
            box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.07);
            color: #505050;
            border: none;
            transition: color 0.3s !important;
            transition-duration: 0.3s !important;
            border-color: #E1E1E1;
            transition-delay: 0ms !important;
          }

          .tableWrapperBox {
            height: 100%;
            max-height: 310px;
          }
        }
      }

      .MuiBadge-badge {
        color: red;
        margin: 5px -2px;
      }
      .MuiBadge-anchorOriginTopRightRectangle {
        font-size: 20px;
        z-index: initial;
      }

      .labelInput {
        color: #404040;
        margin: 0 2px 7px 7px;
        font-weight: 400;
        font-size: 13px;
      }

      .MuiBadge-badge {
        color: red;
        margin: 5px -2px;
      }
      .MuiBadge-anchorOriginTopRightRectangle {
        font-size: 20px;
        z-index: initial;
      }

      & .MuiFormControl-marginDense {
        margin: 0;
      }
      & .MuiOutlinedInput-input {
        padding-top: 9px;
        padding-bottom: 9px;
      }
      & .MuiOutlinedInput-root,
      .MuiOutlinedInput-root:focus {
        &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
          border-color: #2684ff;
        }
        border-radius: 5px;
        background: #ffffff;
        color: #B0B0B0;
        border: 0.5px solid rgba(37, 75, 132, 0.1);
        outline: none;
      }
      & .MuiInputLabel-root {
        color: #B0B0B0;
      }
      & .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
      & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-width: 0.5px;
        border-color: #2684ff;
      }

      & .MuiFormControl-marginDense {
        margin: 0;
      }
      & .MuiOutlinedInput-input {
        padding-top: 9px;
        padding-bottom: 9px;
      }
      & .MuiOutlinedInput-root,
      .MuiOutlinedInput-root:focus {
        &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
          border-color: #2684ff;
        }
        border-radius: 5px;
        background: #ffffff;
        color: #B0B0B0;
        border: 0.5px solid rgba(37, 75, 132, 0.1);
        outline: none;
      }
      & .MuiInputLabel-root {
        color: #B0B0B0;
      }
      & .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
      & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-width: 0.5px;
        border-color: #2684ff;
      }
      /* TODO: end modifi */

      .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
      .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
        border: 0.5px solid transparent;
      }
      .MuiOutlinedInput-root:focus .MuiOutlinedInput-notchedOutline {
        box-shadow: 0 0 0 0.5px #2684ff;
      }
      .MuiFormControl-root {
        background: #ffffff;
        border-radius: 5px;
      }
      .MuiInput-input {
        padding: 9px;
        border-bottom: none;
        color: #B0B0B0;
      }
      .MuiInput-root {
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.1);
      }
      .MuiInput-root:focus-within {
        box-shadow: 0 0 0 1px #2684ff;
        border-color: transparent;
        .MuiInputBase-input {
        }
      }
      .MuiSvgIcon-root {
        color: #B0B0B0;
        transition: all 0.3s;
      }
      .MuiCheckbox-root {
        .MuiSvgIcon-root {
          color: #408CFE;
          transition: all 0.3s;
        }
        .MuiTypography-root .MuiFormControlLabel-label .MuiTypography-body1 {
          color: #404040;
        }
      }
      .MuiInput-underline:before {
        content: none;
      }
      .MuiInput-underline:after {
        content: none;
      }

      &
        .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-fullWidth.secundaryButton {
        background: #28CE6B;
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }
      .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-fullWidth.primaryButton {
        background: #408CFE;
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }
      .MuiButtonBase-root.MuiButton-root.MuiButton-contained.secundaryButton {
        background: #28CE6B;
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }
      .MuiButtonBase-root.MuiButton-root.MuiButton-contained.primaryButton {
        background: #408CFE;
        color: #f9f9f9;
        border-radius: 5px;
        border: 0.5px solid rgba(37, 75, 132, 0.25);
        font-family: Poppins, sans-serif;
        box-shadow: none;
        font-weight: 500;
        text-transform: capitalize;
      }

      .sel--is-disabled {
        .sel__control--is-disabled {
          /* background: #ffffff !important; */
          background: #f2f2f2 !important;
          border-color: #e6e6e6 !important;
          /* color: #B0B0B0 !important; */

          .sel__value-container {
            .sel__placeholder {
              color: #808080 !important;
            }
          }
        }
      }

      .sel__menu {
        background: #ffffff;
        color: #606060;

        .sel__menu-list {
          font-size: 13px;
          .sel__option {
            color: #606060;
          }
          .sel__option--is-selected {
            background: #408CFE;
            color: #ffffff;
          }

          .sel__option--is-focused {
            background: #408CFE;
            color: #FFFFFF;
          }
        }
      }
      .labelInput {
        color: #404040;
        margin-left: 5px;
        margin-bottom: 0.7rem;
        font-weight: 400;
        font-size: 13px;
      }
    }

    .popupFooter {
      display: flex;
      width: 100%;
      border-top: 1px solid #E1E1E1;
      margin-top: 1rem;

      .buttons {
        margin-left: auto;

        button {
          padding: 6px 16px;
          font-size: 0.875rem;
          min-width: 64px;
          border: 0.5px solid rgba(37, 75, 132, 0.25);
          border-radius: 5px;
          font-weight: 500;
          color: #f9f9f9;
          background: #408CFE;
          transition: background 0.3s;

          & + button {
            margin-left: 16px;
          }

          &.submit {
            background: #28CE6B;
            color: #f9f9f9;
          }
          &.exclusion {
            background: #ff3b4c;
            color: #f9f9f9;
          }
          &.reset {
            background: #FFBE17;
            color: #f9f9f9;
          }
        }
      }
    }
  }
`;

export const TableContent = styled.div`
  color: #505050;
  border-radius: 5px;
  padding: 1rem;
`;

export const Import = styled.div<ImportProps>`
  width: 100%;
  border-top: 1px solid #E1E1E1;
  .import {
    padding: 1rem 1.5rem;
  }

  .import-loading {
    display: flex;
    flex-direction: column;

    .labelsFile {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      svg {
        font-size: 50px;
      }

      .labels {
        font-size: 14px;
        span {
          padding: 0 0.5rem;
        }
        a {
          display: block;
          padding: 0 0.5rem;
          color: #408CFE;
        }
      }
    }
  }
`;
