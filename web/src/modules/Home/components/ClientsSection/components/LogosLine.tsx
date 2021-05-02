import React from 'react';
import styled, { css } from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import PlainPicture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  isTop?: true;
  logosArray?: Array<ThumbnailType>;
};

function LogosLine({ isTop, logosArray }: Props) {
  return (
    <Container isTop={isTop}>
      <LogosWrapper>
        {logosArray
          ? logosArray.map((logo, index) => (
              <Logo
                key={index}
                mobileSmall={convertThumbnailToPictureImage(logo)}
                className="logo-image"
              />
            ))
          : null}
      </LogosWrapper>
    </Container>
  );
}

const Container = styled.div<{ isTop?: boolean }>`
  margin: 0 -20px;
  display: flex;
  align-items: center;
  height: 150px;
  margin-top: ${(props) => (props.isTop ? '0' : '-6%')};
  background: ${(props) => (props.isTop ? `${colors.white}` : `${colors.red}`)};
  transform: ${(props) => (props.isTop ? 'rotate(-3deg)' : 'rotate(3deg)')};

  @media (min-width: 1367px) {
    margin-top: ${(props) => (props.isTop ? '0' : '-3%')};
  }

  ${media.tabletSmall(css`
    margin-top: 3%;
  `)}

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}
`;

const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled(PlainPicture)`
  &.logo-image {
    padding: 0 50px;

    ${media.tabletSmallOnly(css`
      padding: 0 35px;
    `)}

    ${media.mobile(css`
      padding: 0 15px;
    `)}
  }

  img {
    //TODO:Add to all logos images
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    max-height: 90px;

    ${media.tabletSmallOnly(css`
      max-height: 55px;
    `)}

    ${media.mobile(css`
      max-height: 25px;
    `)}
  }
`;

export default LogosLine;
