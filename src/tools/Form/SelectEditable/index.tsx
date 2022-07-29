/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, ReactNode } from 'react';
import CreatableSelect from 'react-select/creatable';
import {
  ActionMeta,
  FormatOptionLabelMeta,
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
// import  from 'react-select';
import EditIcon from '@material-ui/icons/Edit';
import { useField } from '@unform/core';

import { Container, ButtonEditOptionSelect } from './styles';

interface inputErrorProps {
  inputName: string;
  message: string;
}

// @ts-ignore
interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  hasChanged?(value: number | null): void;
  handleInputError?(data: inputErrorProps): void;
  messageErrorOnBlur?: string;
  onChangeEvent?: (newValue: any, actionMeta: ActionMeta<SelectProps>) => void;
  onCreateOption?: (inputValue: string) => void;
  formatOptionLabel?: (
    value: OptionTypeBase,
    label: FormatOptionLabelMeta<OptionTypeBase, false>,
  ) => ReactNode;
  editAction?: (
    value: string,
    label: FormatOptionLabelMeta<SelectProps, false>,
  ) => void;
  isLoading?: boolean;
}

const SelectEditable: React.FC<Props> = ({
  name,
  hasChanged,
  handleInputError,
  onChangeEvent,
  onCreateOption,
  formatOptionLabel,
  editAction,
  messageErrorOnBlur,
  isLoading = false,
  ...rest
}) => {
  const selectRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  const handleBlur = React.useCallback(
    event => {
      if (!event.target.value) {
        if (!!handleInputError && !!(messageErrorOnBlur ?? '')) {
          handleInputError({
            inputName: name,
            message: messageErrorOnBlur!,
          });
        }
      }
    },
    [handleInputError, messageErrorOnBlur, name],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      setValue: (ref, value) => {
        ref.select.setValue(value);
        clearError();
      },
    });
  }, [fieldName, registerField, rest.isMulti, clearError, handleBlur]);

  // const customStyles = {
  //   option: (provided: object) => ({
  //     ...provided,
  //     zIndex: 100,
  //   }),
  // };

  const formatOptionLabelFN = ({ value, label }: any) => {
    if (formatOptionLabel) {
      return formatOptionLabel(value, label);
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>{label}</div>
        {editAction && (
          <ButtonEditOptionSelect type="button">
            <EditIcon
              color="secondary"
              style={{ fontSize: 13 }}
              onClick={() => editAction(value, label)}
            />
            {/* {customAbbreviation} */}
          </ButtonEditOptionSelect>
        )}
      </div>
    );
  };

  return (
    <Container error={!!error}>
      {/* @ts-ignore */}
      <CreatableSelect
        hideSelectedOptions={false}
        inputMode="text"
        // @ts-ignore
        formatOptionLabel={formatOptionLabelFN}
        onBlur={handleBlur}
        onFocus={() => {
          clearError();
        }}
        isDisabled={isLoading}
        onCreateOption={onCreateOption}
        onChange={(newValue: any, actionMeta: ActionMeta<SelectProps>) => {
          if (hasChanged) {
            clearError();
            hasChanged(newValue?.value);
          }
          if (onChangeEvent) {
            onChangeEvent(newValue, actionMeta);
          }
        }}
        classNamePrefix="sel"
        closeMenuOnSelect
        isClearable
        {...rest}
      />
    </Container>
  );
};

export default SelectEditable;
