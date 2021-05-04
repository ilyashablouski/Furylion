import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';

type Props = {
  imagesGallery: Array<ThumbnailType>;
};

function ImagesRow({ imagesGallery }: Props) {
  return (
    <Container>
      {imagesGallery.length > 0 &&
        imagesGallery.map((image, index) => (
          <PictureItem key={index}>
            <Picture
              mobileSmall={convertThumbnailToPictureImage(image)}
              className="image-item"
            />
          </PictureItem>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PictureItem = styled.div`
  flex: 0 0 135px;
  max-width: 135px;
  height: 240px;
  border-radius: 16px;
  overflow: hidden;
  transform: matrix(0.72, 0.51, -0.95, 0.72, 0, 0) rotate(-20deg);
  box-shadow: 0 100px 80px rgb(0 0 0 / 21%),
    0 52.2782px 44.658px rgb(0 0 0 / 15%),
    0 33.0459px 33.3517px rgb(0 0 0 / 13%), 0 21.118px 26.035px rgb(0 0 0 / 11%),
    0 12.6549px 18.9822px rgb(0 0 0 / 8%), 0 5.97057px 10.6103px rgb(0 0 0 / 6%);
  cursor: pointer;
  will-change: transform;
  transition: all 150ms ease-in-out;

  .image-item {
    height: 100%;
  }
  @media (min-width: 1024px) {
    &:hover {
      transform: matrix(0.72, 0.51, -0.95, 0.72, 0, 0) rotate(-20deg) scale(1.2);
    }
  }

  &:not(:first-child) {
    margin-left: 70px;
  }

  picture {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    image-rendering: -webkit-optimize-contrast;
  }
`;

export default ImagesRow;
