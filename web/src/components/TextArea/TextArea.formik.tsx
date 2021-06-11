import React, { useCallback } from 'react';
import { useField, FieldConfig } from 'formik';

import FormControl from '@/components/FormControl';

import TextArea from './TextArea';

type FormikFieldProps = Pick<FieldConfig, 'name'>;
type TextAreaProps = Omit<React.ComponentProps<typeof TextArea>, 'name'>;

type Props = FormikFieldProps &
  TextAreaProps & {
    parse?: (value: string, previousValue: string) => string;
    hideError?: boolean;
    error?: string;
    clearErrorOnChange?: boolean;
    isSentSuccess?: boolean;
  };

function TextAreaFormik({
  className,
  name,
  id,
  parse,
  error: customError,
  hideError,
  clearErrorOnChange,
  isSentSuccess,
  ...rest
}: Props) {
  const [field, meta, helpers] = useField<string>({ name });

  const error = customError ?? meta.touched ? meta.error : '';

  const { value, onChange, onBlur } = field;
  const { setValue, setError } = helpers;

  const handleChange = useCallback(
    (event) => {
      if (clearErrorOnChange) {
        setError('');
      }
      if (parse) {
        const parsedValue = parse(event.target.value, value);
        if (parsedValue !== value) {
          setValue(parsedValue);
        }
      } else {
        onChange(event);
      }
    },
    [clearErrorOnChange, parse, onChange, setError, value, setValue, onChange]
  );

  return (
    <FormControl className={className} error={error}>
      <TextArea
        id={id}
        invalid={Boolean(error)}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        isSentSuccess={isSentSuccess}
        {...rest}
      />
    </FormControl>
  );
}

export default TextAreaFormik;
