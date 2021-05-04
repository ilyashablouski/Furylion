import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import Picture from '@/components/Picture';
import { DoYouWantSectionItemType } from '@/typings/model';
import Link from '@/components/Link';
import { handleLinkFeedbackClick } from '@/utils/common';

type Props = {
  galleryItems: Array<DoYouWantSectionItemType>;
};

function ImagesRow({ galleryItems }: Props) {
  return (
    <Container>
      {galleryItems.length > 0 &&
        galleryItems.map((galleryItem, index) => (
          <PictureItem key={index}>
            {galleryItem.action === 'scroll' ? (
              <ItemLink
                as="a"
                href={galleryItem.link ?? '#'}
                onClick={handleLinkFeedbackClick}
              />
            ) : (
              <ItemLink to={galleryItem.link ?? '#'} target="_blank" />
            )}

            <Picture
              mobileSmall={convertThumbnailToPictureImage(galleryItem.image)}
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
  position: relative;
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

const ItemLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export default ImagesRow;
