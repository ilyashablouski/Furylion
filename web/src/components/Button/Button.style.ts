import styled, { css } from 'styled-components';

import { CssSnippet } from '@tager/web-components';

import { ButtonVariant } from './Button.types';

const variantCssMap: Record<ButtonVariant, CssSnippet> = {
  contained: css`
    background-color: #24292e;
    opacity: 0.95;
    color: white;
    border: 1px solid #24292e;

    &:hover {
      background-color: black;
    }
  `,
  outlined: css`
    background-color: white;
    color: #24292e;
    border: 1px solid #24292e;

    &:hover {
      background-color: #24292e;
      opacity: 0.95;
      color: white;
    }
  `,
};

export const StyledButton = styled.button<{ variant?: ButtonVariant }>`
  display: inline-block;
  line-height: 100%;
  font-size: 24px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  white-space: nowrap;
  appearance: none;
  text-transform: uppercase;
  cursor: pointer;

  ${(props) =>
    typeof props.variant === 'string'
      ? variantCssMap[props.variant]
      : props.variant};
`;
