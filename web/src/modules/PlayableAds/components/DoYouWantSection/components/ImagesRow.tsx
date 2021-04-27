import React from 'react';
import styled from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import Picture from '@/components/Picture';

type Props = {
  imagesGallery: Array<ThumbnailType>;
};

function ImagesRow({ imagesGallery }: Props) {
  return (
    <Container>
      {imagesGallery.length > 0 &&
        imagesGallery.map((image, index) => (
          <PictureItem
            key={index}
            mobileSmall={convertThumbnailToPictureImage(image)}
          />
        ))}
    </Container>
  );
}

export default ImagesRow;

const Container = styled.div``;

const PictureItem = styled(Picture)``;
