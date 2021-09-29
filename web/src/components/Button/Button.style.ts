import styled, { css } from 'styled-components';

import { CssSnippet } from '@tager/web-components';

import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import curveBgRedSmallUrl from '@/assets/svg/curve-button-redSm.svg';
import curveBgRedUrl from '@/assets/svg/curve-button-red.svg';
import curveBgWhiteUrl from '@/assets/svg/curve-button-whiteSm.svg';
import curveBgDarkSmallUrl from '@/assets/svg/curve-btn-darkSm.svg';
import curveBgDarkDesktopUrl from '@/assets/svg/curve-btn-darkDesktop.svg';
import curveBgDarkMobileUrl from '@/assets/svg/curve-btn-darkMobile.svg';
import Link from '@/components/Link';

import { ButtonVariant } from './Button.types';

const variantCssMap: Record<ButtonVariant, CssSnippet> = {
  skew: css`
    position: relative;
    padding: 23px 25px;
    font-size: 24px;
    transform: skew(-15deg);
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

    ${media.tabletSmall(css`
      padding: 20px 15px 20px 20px;
      font-size: 14px;
    `)}

    ${media.mobile(css`
      font-size: 16px;
    `)}
  `,
  'cut-bottom': css`
    padding: 25px 35px 25px 24px;
    font-size: 20px;
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
    text-align: start;

    ${media.tabletSmall(css`
      padding: 20px 20px 20px 15px;
      font-size: 14px;
    `)}

    ${media.mobile(css`
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

  'white-black': css`
    background: ${colors.white};
    color: ${colors.black};

    &:hover {
      background: ${colors.black};
      color: ${colors.white};
    }
  `,

  redWhite: css`
    background: ${colors.white};
    color: ${colors.dark};

    &:hover {
      background: ${colors.red};
      color: ${colors.white};
    }
  `,

  redTransparent: css`
    background: ${colors.red};
    color: ${colors.white};

    &:hover {
      background: #871216ff;
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
  darkRed: css`
    background: ${colors.red};
    color: ${colors.white};

    &:hover {
      background: ${colors.dark};
    }
  `,
  redDark: css`
    background: ${colors.dark};
    color: ${colors.white};

    &:hover {
      background: ${colors.red};
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

  dashed: css`
    padding: 22px 25px;
    background: transparent;
    color: ${colors.white};
    border: 1px dashed ${colors.white};

    &:hover {
      background: ${colors.white};
      color: ${colors.dark};
    }
  `,

  curve: css`
    position: relative;
    padding: 0;
    height: 70px;
    font-size: 20px;
    width: 405px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 405px;
    z-index: 1;

    &:hover {
      opacity: 0.75;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      max-width: 405px;
      z-index: -1;
    }
  `,

  'curve-red': css`
    color: ${colors.white};

    @media (min-width: 768px) {
      font-size: 24px;
    }

    &:before {
      content: url(${curveBgRedUrl});

      ${media.mobile(css`
        content: url(${curveBgRedSmallUrl});
      `)}
    }
  `,

  'curve-white': css`
    color: ${colors.dark};
    font-size: 20px;

    &:before {
      content: url(${curveBgWhiteUrl});
    }
  `,

  'curve-dark': css`
    font-size: 24px;
    color: ${colors.white};

    &:hover {
      opacity: 0.8;
    }

    &:before {
      content: url(${curveBgDarkDesktopUrl});

      ${media.mobile(css`
        content: url(${curveBgDarkMobileUrl});
      `)}
    }
  `,

  'curve-dark-small': css`
    color: ${colors.white};

    &:before {
      content: url(${curveBgDarkSmallUrl});
    }
  `,
};

const baseButtonStyles = css`
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
`;

export const StyledButton = styled.button<{
  variant?: ButtonVariant;
  variants?: Array<ButtonVariant>;
}>`
  ${baseButtonStyles}

  ${(props) =>
    typeof props.variant === 'string'
      ? variantCssMap[props.variant]
      : props.variant};

  ${(props) =>
    Array.isArray(props.variants)
      ? props.variants.map((variant) => variantCssMap[variant])
      : props.variants};
`;

export const StyledLink = styled(Link)<{
  variant?: ButtonVariant;
  variants?: Array<ButtonVariant>;
}>`
  ${baseButtonStyles}

  ${(props) =>
    typeof props.variant === 'string'
      ? variantCssMap[props.variant]
      : props.variant};

  ${(props) =>
    Array.isArray(props.variants)
      ? props.variants.map((variant) => variantCssMap[variant])
      : props.variants};
`;
