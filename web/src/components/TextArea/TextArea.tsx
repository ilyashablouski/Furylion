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
    setTextAreaHeight('35px');
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
      {/*TODO: Delete if no need*/}
      {/*<TextAreaLabel*/}
      {/*  htmlFor={placeholder}*/}
      {/*  isActive={isActiveTextArea}*/}
      {/*  // error={errors}*/}
      {/*>*/}
      {/*  {placeholder}*/}
      {/*</TextAreaLabel>*/}
      <InputTextArea
        isActive={isActiveTextArea}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isModal={isModal}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
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
  padding: 17px 0;
  resize: none;
  width: 100%;
  height: ${(props) => props.textAreaHeight};
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;
  border-bottom: 1.77px solid ${colors.white};
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  color: ${colors.white};
  overflow: hidden;

  &::placeholder {
    color: ${colors.white};
  }
`;
//TODO: Delete if no need
// const TextAreaLabel = styled.label<{ isActive: boolean }>`
//   position: absolute;
//   left: 0;
//   bottom: 8px;
//   font-weight: 400;
//   font-size: 21px;
//   line-height: 100%;
//   transition: all 0.15s ease-in-out;
//   opacity: ${(props) => (props.isActive ? '0' : '1')};
// `;

export default TextArea;
