/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Container, Tags } from './styles';

interface inputErrorProps {
  inputName: string;
  message: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: string;
  iconError?: string;
  width?: number | string;
  handleInputError?(data: inputErrorProps): void;
  messageErrorOnBlur?: string;
  isDisabled?: boolean;
}

const InputMultiple: React.FC<InputProps> = ({
  name,
  handleInputError,
  icon,
  iconError,
  messageErrorOnBlur,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);
  const [success, setSuccess] = useState(false);
  const [valueList, setValueList] = useState<string[]>([]);

  useEffect(() => {
    // @ts-ignore
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      // @ts-ignore
      getValue(ref) {
        return valueList;
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setValue: (ref, value) => {
        ref.value = value;
        setValueList([]);
        setSuccess(false);
        clearError();
      },
    });
  }, [fieldName, registerField, clearError, valueList]);

  const handleBlur = useCallback(
    event => {
      if (!event.target.value) {
        if (!!handleInputError && !!messageErrorOnBlur) {
          handleInputError({
            inputName: name,
            message: messageErrorOnBlur,
          });
        }
      } else setSuccess(true);
    },
    [handleInputError, messageErrorOnBlur, name],
  );

  const handleRemoveItem = useCallback(
    (item: string) => {
      setValueList(valueList.filter(data => data !== item));
    },
    [valueList, setValueList],
  );
  const renderData = useCallback(() => {
    const show: any[] = [];
    let arr: any[] = [];
    valueList.map((item, index) => {
      if (arr.length === 3) {
        show.push(arr);
        arr = [item];
        if (index === valueList.length - 1) {
          show.push(arr);
        }
        return;
      }
      if (index === valueList.length - 1) {
        arr.push(item);
        show.push(arr);
        return;
      }
      arr.push(item);
    });

    return show;
  }, [valueList]);
  return (
    <>
      {valueList.length > 0 &&
        renderData().map((items, idx) => (
          <Tags key={Math.random() * 20}>
            {items.map((value: any) => (
              <p key={value}>
                {value}
                <span onClick={() => handleRemoveItem(value)}>X</span>
              </p>
            ))}
          </Tags>
        ))}
      <Container error={!!error} success={success}>
        <div className="input-wrapper">
          <input
            name={name}
            ref={inputRef}
            defaultValue={defaultValue}
            onBlur={handleBlur}
            onFocus={() => {
              clearError();
              setSuccess(false);
            }}
            onKeyPress={(evt: any) => {
              if (evt.key === 'Enter') {
                evt.preventDefault();
                if (evt.target.value !== '') {
                  setValueList([...valueList, evt.target.value]);
                  evt.target.value = '';
                }
              }
              clearError();
            }}
            {...rest}
          />
          {!!icon && (
            <div className="icon">
              <img src={error ? iconError || icon : icon} alt={name} />
            </div>
          )}
        </div>
        {!!error && messageErrorOnBlur && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default InputMultiple;
