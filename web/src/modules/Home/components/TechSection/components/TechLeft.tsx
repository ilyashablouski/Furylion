import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';
import { Nullish } from '@tager/web-core';
import { createMediaMixin } from '@tager/web-components';

import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: Nullish<ThumbnailType>;
  imageMobile: Nullish<ThumbnailType>;
};

function TechLeft({ image, imageMobile }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const delayedCall = gsap.delayedCall(0, () => {
      if (!imageRef.current) return null;

      gsap.to(imageRef.current, {
        left: '-15%',
        scrollTrigger: {
          start: 'top 100%',
          end: 'bottom 100%',
          trigger: imageRef.current,
          scrub: true,
        },
      });
    });

    return () => {
      delayedCall.kill();
    };
  }, []);

  return (
    <Container>
      <ImageContainer
        imageRef={imageRef}
        tabletLarge={convertThumbnailToPictureImage(image)}
        mobileSmall={convertThumbnailToPictureImage(imageMobile)}
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

  ${createMediaMixin({ min: 4000 })(css`
    width: 10.6vw;
  `)}

  ${createMediaMixin({ min: 4000 })(css`
    width: 10.6vw;
  `)}

  ${createMediaMixin({ min: 3500 })(css`
    width: 27.6vw;
  `)}

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
  position: relative;
  min-height: 750px;
  width: 100vw;
  background: #a9a9a9;

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
    //transform: translateX(-200px);
    min-height: 750px;
    height: 100%;
    object-fit: cover;
    max-width: initial;

    left: -100%;
    transform: translateX(10%);

    ${media.tabletSmallOnly(css`
      min-height: 663px;
    `)}

    ${media.mobile(css`
      min-height: 626px;
    `)}
  }
`;

export default TechLeft;
