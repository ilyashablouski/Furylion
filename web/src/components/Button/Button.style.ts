import styled, { css } from 'styled-components';

import { CssSnippet } from '@tager/web-components';

import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';

import { ButtonVariant } from './Button.types';

const variantCssMap: Record<ButtonVariant, CssSnippet> = {
  skew: css`
    position: relative;
    padding: 23px 25px;
    font-size: 24px;
    transform: skew(-15deg);

    background: ${colors.red};
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.red};
    }
  `,

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

  'cut-top': css`
    padding: 25px 24px 25px 35px;
    font-size: 20px;
    clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
    text-align: end;

    ${media.tabletSmallOnly(css`
      padding: 20px 15px 20px 20px;
      font-size: 14px;
    `)}

    ${media.mobile(css`
      padding: 17px 15px 17px 20px;
      font-size: 16px;
    `)}
  `,
  'cut-bottom': css`
    padding: 25px 35px 25px 24px;
    font-size: 20px;
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
    text-align: start;

    ${media.tabletSmallOnly(css`
      padding: 20px 20px 20px 15px;
      font-size: 14px;
    `)}

    ${media.mobile(css`
      padding: 17px 20px 17px 15px;
      font-size: 16px;
    `)}
  `,

  'white-dark': css`
    background: ${colors.white};
    color: ${colors.dark};

    &:hover {
      background: ${colors.dark};
      color: ${colors.white};
    }
  `,

  'white-red': css`
    background: ${colors.white};
    color: ${colors.red};

    &:hover {
      background: ${colors.red};
      color: ${colors.white};
    }
  `,

  dark: css`
    background: ${colors.dark};
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.dark};
    }
  `,

  red: css`
    background: ${colors.red};
    color: ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.red};
    }
  `,

  w100: css`
    width: 100%;
  `,

  large: css`
    padding: 23px;
  `,
};

export const StyledButton = styled.button<{
  variant?: ButtonVariant;
  variants?: Array<ButtonVariant>;
}>`
  padding: 23px 25px;
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
  transition: all 150ms ease-in-out;

  ${(props) =>
    typeof props.variant === 'string'
      ? variantCssMap[props.variant]
      : props.variant};

  ${(props) =>
    Array.isArray(props.variants)
      ? props.variants.map((variant) => variantCssMap[variant])
      : props.variants};
`;
