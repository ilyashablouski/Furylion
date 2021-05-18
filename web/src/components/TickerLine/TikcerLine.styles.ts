import styled, { css } from 'styled-components';

import { StringFieldType } from '@/typings/common';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import PlainPicture from '@/components/Picture';

export const ScrollerItem = styled.li<{ isLabelTicket?: boolean }>`
  ${(props) =>
    props.isLabelTicket &&
    css`
      display: flex;
    `}
`;

export const Row = styled.div<{ isBottom?: boolean }>`
  ${(props) =>
    props.isBottom &&
    css`
      margin-top: -6%;

      @media (min-width: 1367px) {
        margin-top: -3%;
      }
      ${media.tabletSmall(css`
        margin-top: 4%;
      `)}
    `}
`;

export const Container = styled.div<{
  backgroundTicket?: StringFieldType;
  rotateTicket?: StringFieldType;
  sizeTicket?: StringFieldType;
  isReversed?: boolean;
  isAbove?: boolean;
  isLabelTicket?: boolean;
}>`
  margin: 0 -20px;
  display: flex;
  align-items: center;
  height: 150px;
  ${(props) =>
    props.isAbove &&
    css`
      position: relative;
      z-index: 2;
    `}

  ${(props) =>
    props.isLabelTicket &&
    css`
      height: auto !important;
      transform: none !important;

      ${LogosWrapper} {
        height: auto;
      }
    `}

  background: ${(props) =>
    props.backgroundTicket ? `${props.backgroundTicket}` : `${colors.white}`};

  transform: rotate(
    ${(props) => (props.rotateTicket ? `${props.rotateTicket}deg` : '0deg')}
  );

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'middle' &&
    css`
      ${media.tabletSmallOnly(css`
        height: 98px;
      `)}

      ${media.mobile(css`
        height: 65px;
      `)}
    `}
`;

export const ScrollerInner = styled.div`
  position: relative;
  display: flex;
`;

export const LogosWrapper = styled.div<{
  sizeTicket?: StringFieldType;
  isLabelTicket?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}

  ${(props) =>
    props.sizeTicket === 'middle' &&
    css`
      ${media.tabletSmallOnly(css`
        height: 98px;
      `)}

      ${media.mobile(css`
        height: 65px;
      `)}
    `}

  ${(props) =>
    props.isLabelTicket &&
    css`
      ${media.tabletSmall(css`
        display: none;

        &:first-child {
          display: flex;
        }
      `)}
    `}
`;

export const Logo = styled(PlainPicture)`
  padding: 0 50px;

  ${media.tabletSmallOnly(css`
    padding: 0 35px;
  `)}
  ${media.mobile(css`
    padding: 0 15px;
  `)}
  img {
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    max-height: 90px;
    max-width: initial;

    ${media.tabletSmallOnly(css`
      max-height: 55px;
    `)}

    ${media.mobile(css`
      max-height: 25px;
    `)}
  }
`;
