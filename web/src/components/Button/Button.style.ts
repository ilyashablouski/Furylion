import styled, { css } from 'styled-components';

import { CssSnippet } from '@tager/web-components';

import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';

import { ButtonVariant } from './Button.types';

const variantCssMap: Record<ButtonVariant, CssSnippet> = {
  'cut-top': css`
    padding-right: 24px;
    padding-left: 35px;
    font-size: 20px;
    clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
    text-align: end;
    ${media.tabletSmall(css`
      padding-right: 15px;
      padding-left: 20px;
      font-size: 14px;
    `)}
  `,
  'cut-bottom': css`
    padding-left: 24px;
    padding-right: 35px;
    font-size: 20px;
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
    text-align: start;

    ${media.tabletSmall(css`
      padding-left: 15px;
      padding-right: 20px;
      font-size: 14px;
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
};

export const StyledButton = styled.button<{
  variant?: ButtonVariant;
  variants?: Array<ButtonVariant>;
}>`
  padding: 25px;
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

  ${(props) =>
    Array.isArray(props.variants)
      ? props.variants.map((variant) => variantCssMap[variant])
      : props.variants};
`;
