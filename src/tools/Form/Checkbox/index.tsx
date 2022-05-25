import React, { useEffect, useState, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { BiCheck } from 'react-icons/bi';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onClickEvent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  label?: string;
}

const Checkbox: React.FC<InputProps> = ({
  name,
  onClickEvent,
  label,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
      setValue: (ref, value) => {
        if (value) {
          setChecked(!!value);
        }
      },
    });
  }, [fieldName, registerField]);

  const handleClick = React.useCallback(
    async event => {
      setChecked(oldState => !oldState);

      if (onClickEvent) onClickEvent(event);
    },
    [onClickEvent],
  );

  return (
    <div className="containerSearchbox">
      {!!label && <p className="labelInput checkboxLabel">{label}</p>}
      <Container onClick={handleClick} checked={checked}>
        <div className="switch-content">
          {checked && <BiCheck size={16} color="fff" />}
          <input
            type="checkbox"
            checked={checked}
            name={name}
            ref={inputRef}
            defaultValue={defaultValue}
            {...rest}
          />
        </div>
      </Container>
    </div>
  );
};

export default Checkbox;
