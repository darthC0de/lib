/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Form } from '@unform/web';

interface TitleProps {
  padding: string;
}

export const Hidden = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonHidden = styled.button`
  background: #e4e6ef70 !important;
  padding: 6px 12px !important;
  margin-top: 1.2rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  height: 30px !important;
  transition: all 0.3s !important;

  &:hover {
    background: #e4e6ef !important;
  }
`;

export const HiddenContainer = styled.div`
  transition: all 0.1s;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Title = styled.div<TitleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.padding} 1.3rem;

  h1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #404040;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.3rem;
  width: 100%;

  .secundaryButton.buttonFooter {
    min-width: 100px;
    height: 38px;
    font-size: 0.875rem;
    padding: 0 16px;
  }
  .dangerButton.buttonFooter {
    min-width: 100px;
    height: 38px;
    font-size: 0.875rem;
    padding: 0 16px;
  }

  .buttonFooter {
    & + .buttonFooter {
      margin: 0 1rem;
    }
  }
`;
export const AdvancedFilter = styled.div`
  position: relative;

  .filter-box {
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: -17px;
      left: 91%;
      transform: translate(-50%);
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent white transparent;
    }
    display: block;
    top: 55px;
    right: 0;
    padding: 24px;
    background: #ffffff;
    -webkit-box-shadow: 0px 2px 38px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 38px -20px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 38px -20px rgba(0, 0, 0, 0.75);
    border-radius: 16px;
    width: 500px;
    z-index: 100000;
    .filter-content {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Container = styled(Form)`
  width: 100%;
  margin: 0;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 7px 15px rgb(0 0 0 / 7%);

  .labelInput {
    color: #404040;
    margin: 0 2px 7px 7px;
    font-weight: 400;
    font-size: 13px;
  }
  .containerFilter {
    display: flex;
    justify-content: center;
    .filter-Btn-Create {
      margin-left: 12px;
      @media (max-width: 640px) {
        font-size: 10px;
        margin-left: 16px;
      }
    }
    .filter-Btn-Create + .filter-Btn-Create {
      margin-left: 1rem;
    }
  }
  .MuiIconButton-label {
    justify-content: center;
  }
  .filter-row {
    position: relative;

    .advancedContent {
      display: flex;
      align-items: center;

      p {
        color: #404040;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        line-height: 21px;
        font-size: 14px;
      }

      .filter-header {
        width: 100%;
        border-bottom: 0.5px solid #e1e1e1;
        padding: 1rem;
        display: flex;
        align-items: center;
        color: #404040;
        justify-content: space-between;
      }
      .filter-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 640px) {
          width: 280px;
          justify-content: center;
        }
        &:after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          top: -20px;
          left: 96.5%;
          transform: translate(-50%);
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #ffffff transparent;
        }
        position: absolute;
        top: 55px;
        right: 0;
        border: 0.5px solid #ffffff;
        background: #fff;
        -webkit-box-shadow: 0px 7px 15px rgb(0 0 0 / 7%);
        -moz-box-shadow: 0px 7px 15px rgb(0 0 0 / 7%);
        box-shadow: 0px 7px 15px rgb(0 0 0 / 7%);
        border-radius: 5px;
        width: 500px;
        z-index: 100000;
        .filter-content {
          width: 100%;
          height: 100%;
        }
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
    color: #b0b0b0;
    border: 0.5px solid #afafaf;
    outline: none;
  }
  & .MuiInputLabel-root {
    color: #b0b0b0;
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
    color: #b0b0b0;
    border: 0.5px solid #afafaf;
    outline: none;
  }
  & .MuiInputLabel-root {
    color: #b0b0b0;
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
    color: #b0b0b0;
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
    color: #b0b0b0;
    transition: all 0.3s;
  }
  .MuiCheckbox-root {
    .MuiSvgIcon-root {
      color: #408cfe;
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
    background: #28ce6b;
    color: #f9f9f9;
    border-radius: 5px;
    border: 0.5px solid rgba(37, 75, 132, 0.25);
    font-family: Poppins, sans-serif;
    box-shadow: none;
    font-weight: 500;
    text-transform: capitalize;
  }
  .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-fullWidth.dangerButton {
    background: #f43605;
    color: #f9f9f9;
    border-radius: 5px;
    border: 0.5px solid rgba(37, 75, 132, 0.25);
    font-family: Poppins, sans-serif;
    box-shadow: none;
    font-weight: 500;
    text-transform: capitalize;
  }
  .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-fullWidth.primaryButton {
    background: #408cfe;
    color: #f9f9f9;
    border-radius: 5px;
    border: 0.5px solid rgba(37, 75, 132, 0.25);
    font-family: Poppins, sans-serif;
    box-shadow: none;
    font-weight: 500;
    text-transform: capitalize;
  }
  .MuiButtonBase-root.MuiButton-root.MuiButton-contained.secundaryButton {
    background: #28ce6b;
    color: #f9f9f9;
    border-radius: 5px;
    border: 0.5px solid rgba(37, 75, 132, 0.25);
    font-family: Poppins, sans-serif;
    box-shadow: none;
    font-weight: 500;
    text-transform: capitalize;
  }
  .MuiButtonBase-root.MuiButton-root.MuiButton-contained.primaryButton {
    background: #408cfe;
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

  /* TODO: Control Search */

  /* .sel__control {
    transition: none;
    background: #ffffff !important;
    border-radius: 5px;
    border: 0.5px solid #AFAFAF !important;

    .sel__value-container {
      .sel__placeholder {
        font-size: 13px;
        color: #B0B0B0;
      }
      .sel__single-value {
        font-size: 13px;
        color: #555555;
      }
    }
  } */
  .sel__control {
    .sel__input {
      color: #555555;
      font-size: 13px;
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
        background: #408cfe;
        color: #ffffff;
      }

      .sel__option--is-focused {
        background: #408cfe;
        color: #ffffff;
      }
    }
  }
`;

interface InputContainerProps {
  width?: number;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${props => `${props.width}%`};
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  &:nth-of-type(n + 1) {
    margin-top: 1.2rem;
  }

  .labelInput {
    color: #404040;
    margin: 0 2px 7px 7px;
    font-weight: 400;
    font-size: 13px;
  }

  @media screen and (max-width: 980px) {
    width: 50% !important;

    & + &:nth-of-type(n + 3) {
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 610px) {
    width: 100% !important;

    & + & {
      margin-top: 16px;
    }
  }
`;
