import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useMedia } from '@tager/web-core';

import { ReactComponent as PlayIcon } from '@/assets/svg/play.svg';
import { ReactComponent as VolumeOffIcon } from '@/assets/svg/courses/volume-off.svg';
import { ReactComponent as VolumeOnIcon } from '@/assets/svg/courses/volume-on.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { Review } from '@/modules/Courses/Courses.types';
import { media } from '@/utils/mixin';

function Video({ video, avatar, name, position, preview, swiper }: Review) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setMuted] = useState(true);
  const [isVideoPlay, setVideoPlay] = useState(false);
  const [isAnimationStop, setAnimationStop] = useState(true);
  const [isVideoEnded, setVideoEnded] = useState(false);
  const tabletMedia = useMedia('(max-width: 1259.9px)');
  const videoDurationMs = videoRef.current?.duration! * 1000;

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
      setVideoPlay(false);
      setAnimationStop(true);
    });
  }, [isVideoPlay, swiper]);

  async function handleVideoPointerEnter() {
    const video = videoRef.current;

    try {
      await video?.play();
      handleChangeVideoPlayState();
      setAnimationStop(!isAnimationStop);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const handleVideoPointerOut = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    setAnimationStop(true);
  };

  const handleChangeMutedState = () => {
    setMuted(!isMuted);
  };

  const handleChangeVideoPlayState = () => {
    setVideoPlay(!isVideoPlay);
  };

  const handleVideoPause = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    setVideoPlay(!isVideoPlay);
    setAnimationStop(!isAnimationStop);
  };

  const handleVideoEnd = () => {
    setVideoEnded(!isVideoEnded);
    setAnimationStop(true);
  };

  return (
    <Component>
      <Background isVideoPlay={isVideoPlay} />

      {tabletMedia ? (
        <ReviewVideo
          ref={videoRef}
          src={video.url ?? ''}
          onEnded={handleChangeVideoPlayState}
          onClick={handleVideoPause}
          loop
          muted={isMuted}
          preload="metadata"
          poster={preview.url ?? ''}
          playsInline
        />
      ) : (
        <ReviewVideo
          ref={videoRef}
          src={video.url ?? ''}
          onPointerEnter={handleVideoPointerEnter}
          onPointerOut={handleVideoPointerOut}
          onEnded={handleVideoEnd}
          loop
          muted={isMuted}
          preload="metadata"
          poster={preview.url ?? ''}
          playsInline
        />
      )}

      <VolumeButton onClick={handleChangeMutedState}>
        {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </VolumeButton>

      {tabletMedia ? (
        <PlayButton onClick={handleVideoPointerEnter} isVideoPlay={isVideoPlay}>
          <PlayIcon />
        </PlayButton>
      ) : (
        ''
      )}

      <ProgressBar>
        <Progress
          className={isVideoEnded ? 'animation' : 'animation'}
          isAnimationStop={isAnimationStop}
          videoDurationMs={videoDurationMs}
          isVideoEnd={isVideoEnded}
        />
      </ProgressBar>

      <Content>
        <Avatar
          src={avatar.url}
          src2x={avatar.url_2x}
          srcWebp={avatar.url_webp}
          srcWebp2x={avatar.url_webp_2x}
        />
        <AuthorInformation>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </AuthorInformation>
      </Content>
    </Component>
  );
}

export default Video;

const animation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Background = styled.div<{ isVideoPlay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 24, 20, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 15px;
  z-index: 2;
  opacity: 1;
  visibility: visible;
  transition: visibility 0.2s, opacity 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isVideoPlay }) =>
    isVideoPlay &&
    css`
      ${media.tablet(css`
        display: none;
      `)}
    `}
`;

const Preview = styled(Picture)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  opacity: 1;
  visibility: visible;
  transition: visibility 0.2s, opacity 0.2s;

  picture,
  img {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Component = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding-top: 178.615%;
  cursor: pointer;

  &:hover {
    ${Background} {
      opacity: 0;
      visibility: hidden;
    }

    ${Preview} {
      opacity: 0;
      visibility: hidden;
    }

    ${media.tablet(css`
      ${Background} {
        opacity: 1;
        visibility: visible;
      }
    `)}
  }

  ${media.mobile(css`
    padding-top: 130%;
  `)}
`;

const ReviewVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.black};
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const VolumeButton = styled.div`
  position: absolute;
  z-index: 1;
  right: 16px;
  bottom: 16px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const PlayButton = styled.div<{ isVideoPlay: boolean }>`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto auto;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  svg {
    width: 30px;
    height: 30px;
  }

  ${({ isVideoPlay }) =>
    isVideoPlay &&
    css`
      display: none;
    `}
`;

const ProgressBar = styled.div`
  position: absolute;
  width: 96%;
  left: 2%;
  height: 2px;
  background: ${colors.white05};
  border-radius: 2px;
  z-index: 2;
  top: 14px;
  margin: auto auto;
`;

const Progress = styled.div<{
  isAnimationStop: boolean;
  videoDurationMs: number;
  isVideoEnd: boolean;
}>`
  height: 100%;
  background: ${colors.white};
  
   ${({ videoDurationMs }) =>
     css`
       animation: ${animation} ${videoDurationMs}ms linear;

       @media (min-width: 1260px) {
         animation-iteration-count: infinite;
       }
     `}
  
      ${(props) =>
        props.isAnimationStop
          ? css`
              animation-play-state: paused;
            `
          : css`
              animation-play-state: running;
            `}
    }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  left: 6px;
  z-index: 2;
  user-select: none;
`;

const Avatar = styled(Picture)`
  width: 26px;
  height: 26px;

  img {
    border-radius: 50%;
  }
`;

const AuthorInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`;

const Name = styled.span`
  font-size: 10px;
  line-height: 10px;
  font-weight: 600;
  color: ${colors.white};
`;

const Position = styled(Name)`
  color: ${colors.white08};
  margin-top: 2px;
`;
