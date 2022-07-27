import styled from 'styled-components';

interface SelectProps {
  error: boolean;
}
export const ButtonEditOptionSelect = styled.button`
  margin-left: 10px;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div<SelectProps>`
  width: 100%;

  .sel__control {
    transition: none;
    border-radius: 5px;
    border: 0.5px solid ${props => (!props.error ? '#AFAFAF' : '#e12325')};

    box-shadow: ${props => (!props.error ? '' : '0 0 0 0.5px #e12325')};
    background: #ffffff;

    .sel__value-container {
      .sel__placeholder {
        font-size: 13px;
        color: #b0b0b0;
      }
      .sel__single-value {
        font-size: 13px;
        color: #555555;
      }
    }

    .sel__input {
      font-size: 13px;
      color: #555555;
    }
  }

  .sel--is-disabled {
    .sel__control--is-disabled {
      background: #f2f2f2 !important;
      border-color: #e6e6e6 !important;

      .sel__value-container {
        .sel__placeholder {
          color: #808080 !important;
        }
      }
    }
  }
`;
