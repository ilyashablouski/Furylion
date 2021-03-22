import React from 'react';
import styled from 'styled-components';

import Picture from '@/components/Picture';
import { ImageType } from '@/typings/model';

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
  float: right;
  width: 48.6vw;
  height: 100%;
  clip-path: polygon(69% 0, 100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(69% 0, 100% 0, 100% 100%, 0 100%);
`;

const ImageContainer = styled(Picture)`
  position: static;
  min-height: 750px;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    min-height: 750px;
    height: 100%;
    object-fit: cover;
  }
`;

export default TechLeft;
