import React, { useEffect } from 'react';

import { useMedia } from '@tager/web-core';

import { breakpoints } from '@/constants/theme';

import * as S from './TextArea.style';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  invalid?: boolean;
  required?: boolean;
  autoHeight?: boolean;
  isSentSuccess?: boolean;
};

export type TextAreaRef = HTMLTextAreaElement;

function TextArea(
  {
    className,
    disabled,
    required,
    invalid,
    autoHeight,
    onChange,
    isSentSuccess,
    ...rest
  }: Props,
  ref: React.Ref<TextAreaRef>
) {
  const isDesktop = useMedia(`(min-width: ${breakpoints.desktop}px)`);
  const isLaptop = useMedia(`(min-width: ${breakpoints.laptop}px)`);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (autoHeight) {
      const textAreaElement = event.target;
      textAreaElement.style.height = '37px';
      textAreaElement.style.height = `${textAreaElement.scrollHeight + 2}px`;

      if (textAreaElement.value === '') {
        isDesktop
          ? (textAreaElement.style.height = '37px')
          : isLaptop
          ? (textAreaElement.style.height = '37px')
          : (textAreaElement.style.height = '37px');
      }

      if (isSentSuccess) {
        textAreaElement.style.height = '37px';
      }
    }

    if (onChange) {
      onChange(event);
    }
  }

  return (
    <S.TextArea
      className={className}
      ref={ref}
      disabled={disabled}
      onChange={handleChange}
      invalid={invalid}
      {...rest}
    />
  );
}

export default React.forwardRef<TextAreaRef, Props>(TextArea);
