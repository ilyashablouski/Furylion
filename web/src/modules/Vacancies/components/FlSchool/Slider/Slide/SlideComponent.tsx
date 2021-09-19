import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as AuthorTextIcon } from '@/assets/svg/vacancies/author-text.svg';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

import { SlideComponentProps } from './SlideComponent.types';

function SlideComponent({
  swiper,
  url,
  text,
  author,
  authorPosition,
  onEnded,
  onPause,
  onPlay,
}: SlideComponentProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return (
    <Content>
      <Left>
        <VideoContainer>
          <Video
            ref={videoRef}
            controls={true}
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
    position: absolute;
    right: 0;
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
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: ${colors.black};
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
