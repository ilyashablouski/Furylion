import React from 'react';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}
