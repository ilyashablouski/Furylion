import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import ModalVideo from 'react-modal-video';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import { ReactComponent as YoutubeIcon } from '@/assets/svg/youtube-icon.svg';
import { ProductionMediaItemType } from '@/typings/model';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';
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
        let isVideo: boolean = false;
        if (mediaItem.videoId) {
          isVideo = true;
        }
        return (
          <ItemWrapper
            key={index}
            className={'media-item-' + index}
            isTop={isTop}
          >
            <Item
              onClick={() => {
                setOpen(true);
              }}
              isVideo={isVideo}
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
          </ItemWrapper>
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

const ItemWrapper = styled.div<{ isTop?: boolean }>`
  position: relative;
  max-height: 411px;

  &.media-item-0 {
    ${(props) =>
      props.isTop
        ? css`
            margin-right: -8.7%;
            flex: 0 1 813px;
            max-width: 813px;

            ${Item} {
              padding-top: 50.59%;
              clip-path: polygon(0 0, 100% 0, 71% 100%, 0 100%);
            }
          `
        : css`
            margin-right: -8.7%;
            flex: 0 1 712px;
            max-width: 712px;

            ${Item} {
              padding-top: 57.76%;
              clip-path: polygon(0 0, 67% 0, 100% 100%, 0 100%);
            }
          `}
  }

  &.media-item-1 {
    ${(props) =>
      props.isTop
        ? css`
            margin-left: -8.7%;
            flex: 0 1 632px;
            max-width: 632px;

            ${Item} {
              padding-top: 65.07%;
              clip-path: polygon(37% 0, 100% 0, 100% 100%, 0 100%);
            }
          `
        : css`
            margin-left: -8.7%;

            flex: 0 1 733px;
            max-width: 733px;

            ${Item} {
              padding-top: 56.11%;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 32% 100%);
            }
          `}
  }
`;

const Item = styled.div<{ isVideo: boolean }>`
  //position: relative;
  //max-height: 411px;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 10;

  img {
    transition: all 0.3s ease-in-out !important;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  ${(props) =>
    props.isVideo
      ? css`
          cursor: pointer;
          &:hover {
            opacity: 0.75;
          }
        `
      : null}
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
