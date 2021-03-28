import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { FieldConfig, FormikErrors, useField } from 'formik';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type FormikFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'name' | 'type'
>;

type Props = FormikFieldProps & {
  placeholder: string;
  name: string;
  parse?: (value: string, previousValue: string) => string;
  type?: string;
  isModal: boolean;
  isSuccessSend: boolean;
  isRequired: boolean;
  errors?: boolean;
};

function TextArea({
  name,
  type,
  placeholder,
  parse,
  isModal,
  isSuccessSend,
  isRequired,
  errors,
  ...rest
}: Props) {
  const [isActiveTextArea, setIsActiveTextArea] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');

  const [field, meta, helpers] = useField<string>({ name, type });

  useEffect(() => {
    if (!value) return;
    setIsActiveTextArea(true);
  }, []);

  useEffect(() => {
    setIsActiveTextArea(false);
    setTextAreaHeight('40px');
  }, [isSuccessSend]);

  function handleFocus() {
    setIsActiveTextArea(true);
  }

  function handleBlur(event: unknown) {
    if (!value) setIsActiveTextArea(false);
    if (field.onBlur) {
      field.onBlur(event);
    }
  }

  const { value, onChange, onBlur } = field;
  const { setValue } = helpers;

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [value]);

  const handleChange = useCallback(
    (event) => {
      if (parse) {
        const parsedValue = parse(event.target.value, value);
        if (parsedValue !== value) {
          setValue(parsedValue);
        }
      } else {
        onChange(event);
      }
      setTextAreaHeight('auto');
    },
    [parse, value, setValue, onChange]
  );

  return (
    <>
      <TextAreaLabel
        htmlFor={placeholder}
        isActive={isActiveTextArea}
        // error={errors}
      >
        {placeholder} {isRequired ? <span>*</span> : null}
      </TextAreaLabel>
      <InputTextArea
        isActive={isActiveTextArea}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isModal={isModal}
        value={value}
        name={name}
        onChange={handleChange}
        id={placeholder}
        rows={1}
        ref={textAreaRef}
        textAreaHeight={textAreaHeight}
        // error={errors}
      />
    </>
  );
}

const InputTextArea = styled.textarea<{
  isActive: boolean;
  isModal: boolean;
  textAreaHeight: string;
  // error: boolean;
}>`
  resize: none;
  width: ${(props) => (props.isModal ? '100%' : '660px')};
  overflow: hidden;
  height: ${(props) => props.textAreaHeight};
  border: none;
  padding: 10px 15px 4px 0;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;

  color: rgba(38, 38, 38, 0.7);
`;

const TextAreaLabel = styled.label<{ isActive: boolean }>`
  position: absolute;
  left: 0;
  bottom: 8px;
  opacity: ${(props) => (props.isActive ? '0' : '1')};
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;

  span {
    transition: color 150ms ease-in-out;
  }
`;

export default TextArea;
