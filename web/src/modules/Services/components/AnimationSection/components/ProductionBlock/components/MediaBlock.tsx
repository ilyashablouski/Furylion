import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import ModalVideo from 'react-modal-video';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import { ReactComponent as YoutubeIcon } from '@/assets/svg/youtube-icon.svg';
import { ProductionMediaItemType } from '@/typings/model';
import Link from '@/components/Link';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';
import ModalVideoElement from '@/components/ModalVideoElement';
import { colors } from '@/constants/theme';

type Props = {
  mediaInfo: Array<ProductionMediaItemType>;
  isTop?: boolean;
};

function MediaBlock({ mediaInfo, isTop = true }: Props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      {mediaInfo.map((mediaItem, index) => {
        return (
          <>
            <Item
              key={index}
              isTop={isTop}
              onClick={() => {
                setOpen(true);
                console.log('click');
              }}
            >
              {mediaItem.videoId && (
                <IconWrapper>
                  <YoutubeIcon />
                </IconWrapper>
              )}

              <ImageContainer>
                <Picture
                  mobileSmall={convertThumbnailToPictureImage(mediaItem.image)}
                  className="media-image-block"
                />
              </ImageContainer>
            </Item>
            {mediaItem.videoId && (
              <ModalVideo
                // @ts-ignore
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={mediaItem.videoId}
                onClose={() => setOpen(false)}
              />
            )}
          </>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 20px;

    ${media.tabletSmall(css`
      margin-top: 10px;
    `)}
  }
`;

const Item = styled.div<{ isTop: boolean }>`
  position: relative;
  max-height: 411px;
  img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:first-child {
    ${(props) =>
      props.isTop
        ? css`
            margin-right: -8.7%;
            padding-top: 33.36%;
            flex: 1 1 813px;
            max-width: 813px;
            clip-path: polygon(0 0, 100% 0, 71% 100%, 0 100%);
          `
        : css`
            margin-right: -8.7%;
            padding-top: 33.36%;
            flex: 1 1 712px;
            max-width: 712px;
            clip-path: polygon(0 0, 67% 0, 100% 100%, 0 100%);
          `}
  }

  &:last-child {
    ${(props) =>
      props.isTop
        ? css`
            margin-left: -8.7%;
            padding-top: 33.36%;
            flex: 1 1 632px;
            max-width: 632px;
            clip-path: polygon(37% 0, 100% 0, 100% 100%, 0 100%);
          `
        : css`
            margin-left: -8.7%;
            padding-top: 33.36%;
            flex: 1 1 733px;
            max-width: 733px;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 32% 100%);
          `}
  }
`;

const IconWrapper = styled.i`
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  z-index: 1;
`;

const ImageContainer = styled.div`
  .media-image-block {
    position: static;
  }
`;

export default MediaBlock;
