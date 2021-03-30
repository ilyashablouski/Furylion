import React from 'react';
import styled, { css } from 'styled-components';

import Picture from '@/components/Picture';
import { ImageType } from '@/typings/model';
import { media } from '@/utils/mixin';

type Props = {
  image?: ImageType;
  imageMobile?: ImageType;
};

function TechLeft({ image, imageMobile }: Props) {
  return (
    <Container>
      <ImageContainer
        tabletLarge={{
          src: image?.url,
          src2x: image?.url_2x,
          webp: image?.url_webp,
          webp2x: image?.url_webp_2x,
        }}
        mobileSmall={{
          src: imageMobile?.url,
          src2x: imageMobile?.url_2x,
          webp: imageMobile?.url_webp,
          webp2x: imageMobile?.url_webp_2x,
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  float: right;
  width: 48.6vw;
  height: 100%;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 1;

  ${media.tabletSmallOnly(css`
    width: 67vw;
    clip-path: polygon(74% 0, 100% 0, 100% 100%, 0 100%);
    shape-outside: polygon(74% 0, 100% 0, 100% 100%, 0 100%);
  `)}

  ${media.mobile(css`
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    shape-outside: polygon(100% 0, 0 100%, 100% 100%);
    shape-margin: 10px;
    width: 100vw;
  `)}
`;

const ImageContainer = styled(Picture)`
  position: static;
  min-height: 750px;

  ${media.tabletSmallOnly(css`
    min-height: 663px;
  `)}

  ${media.mobile(css`
    min-height: 626px;
  `)}

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    min-height: 750px;
    height: 100%;
    object-fit: cover;

    ${media.tabletSmallOnly(css`
      min-height: 663px;
    `)}

    ${media.mobile(css`
      min-height: 626px;
    `)}
  }
`;

export default TechLeft;
