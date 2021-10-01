import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useModal } from '@tager/web-components';

import { ReactComponent as AuthorTextIcon } from '@/assets/svg/vacancies/author-text.svg';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';

import VideoReviewModal from './VideoModal';
import { SlideComponentProps } from './SlideComponent.types';

function SlideComponent({
  swiper,
  url,
  text,
  author,
  authorPosition,
  videoPreviewImage,
  videoButtonText,
  onEnded,
  onPause,
  onPlay,
}: SlideComponentProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoModal = useModal();

  useEffect(() => {
    if (!swiper) {
      return;
    }

    swiper.on('slideChange', () => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.pause();
    });
  }, [swiper]);

  function openVideoModal() {
    videoModal(VideoReviewModal, {
      videoUrl: url,
      author: author,
      authorPosition: authorPosition,
      videoPreviewImage: videoPreviewImage,
      onModalClose: onPause,
    });

    if (onPlay) {
      onPlay();
    }
  }

  return (
    <Content>
      <Left>
        <VideoContainer>
          <Video
            ref={videoRef}
            poster={videoPreviewImage.url ?? ''}
            controls
            preload="metadata"
            muted
            onPlay={onPlay}
            onPause={onPause}
            onEnded={onEnded}
            src={url ?? ''}
          />
        </VideoContainer>
      </Left>
      <Right>
        <Top>
          <AuthorTextIcon />
          <AuthorText>{text}</AuthorText>
        </Top>
        <Bottom>
          <Author>{author}</Author>
          <AuthorPosition>{authorPosition}</AuthorPosition>
        </Bottom>

        <ModalButton onClick={openVideoModal}>
          <PreviewImage
            src={videoPreviewImage.url}
            src2x={videoPreviewImage.url_2x}
            srcWebp={videoPreviewImage.url_webp}
            srcWebp2x={videoPreviewImage.url_webp_2x}
          />
          <ButtonText>{videoButtonText}</ButtonText>
        </ModalButton>
      </Right>
    </Content>
  );
}

export default SlideComponent;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: auto;
  position: relative;
`;

const Left = styled.div`
  position: relative;
  flex: 0 0 501px;
  max-width: 501px;
  padding: 15px;
  background: ${colors.white};
  z-index: 0;

  ${media.tabletSmallOnly(css`
    flex: 1 1 600px;
    max-width: 600px;
  `)}

  ${media.mobile(css`
    display: none;
  `)}
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 4;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: ${colors.black};
  object-fit: cover;

  &::-webkit-media-controls-fullscreen-button {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  background: ${colors.white};
  margin-left: 20px;
  padding: 52px;

  ${media.tablet(css`
    margin-left: 0;
    padding: 20px 30px;
  `)}

  ${media.mobile(css`
    padding: 20px;
  `)}
`;

const Top = styled.div`
  display: flex;

  svg {
    flex: 0 0 58px;

    ${media.mobile(css`
      flex: auto;
    `)}
  }

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const AuthorText = styled.p`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.dark};
  margin-left: 24px;
  max-width: 523px;

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 20px;
  `)}

  ${media.mobile(css`
    font-size: 20px;
    max-width: none;
  `)}
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  ${media.mobile(css`
    margin-bottom: 120px;
  `)}
`;

const ModalButton = styled.div`
  display: none;

  ${media.mobile(css`
    display: flex;
    position: absolute;
    bottom: 20px;
    align-items: center;
    justify-content: flex-start;
    max-width: 280px;
    padding: 10px;
    border: 1px dashed ${colors.dark};
  `)}
`;

const PreviewImage = styled(Picture)`
  img {
    width: 54px;
    height: 80px;
    object-fit: cover;
  }
`;

const ButtonText = styled.span`
  font-size: 12px;
  line-height: 160%;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  color: ${colors.dark};
  margin-left: 20px;
`;

const Author = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.dark};

  ${media.tablet(css`
    font-size: 20px;
  `)}

  ${media.mobile(css`
    line-height: 130%;
  `)}
`;

const AuthorPosition = styled(Author)`
  line-height: 120%;
  margin-top: 8px;

  ${media.tablet(css`
    line-height: 160%;
  `)}

  ${media.mobile(css`
    line-height: 130%;
  `)}
`;
