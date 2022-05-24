/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface inputErrorProps {
  inputName: string;
  message: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  iconError?: string;
  iconSuccess?: string;
  width?: number | string;
  handleInputError?(data: inputErrorProps): void;
  messageErrorOnBlur?: string;
  isDisabled?: boolean;
}

const DateInput: React.FC<InputProps> = ({
  name,
  handleInputError,
  messageErrorOnBlur,
  isDisabled,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue: (ref, value) => {
        // console.log(value);
        ref.value = value;
        clearError();
      },
    });
  }, [fieldName, registerField, clearError]);

  const handleBlur = useCallback(
    event => {
      if (!event.target.value) {
        if (!!handleInputError && !!messageErrorOnBlur) {
          handleInputError({
            inputName: name,
            message: messageErrorOnBlur,
          });
        }
      } else return;
    },
    [handleInputError, messageErrorOnBlur, name]
  );

  return (
    <Container>
      <div className="input-wrapper">
        {/* @ts-ignore */}
        <input
          name={name}
          type="date"
          ref={inputRef}
          defaultValue={defaultValue}
          onBlur={handleBlur}
          disabled={isDisabled}
          onFocus={() => {
            clearError();
          }}
          {...rest}
        />
      </div>
    </Container>
  );
};

export default DateInput;
