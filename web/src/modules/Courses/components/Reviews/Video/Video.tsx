import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useTimer } from 'use-timer';

import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { Review } from '@/modules/Courses/Courses.types';

function Video({ video, avatar, name, position }: Review) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const { time, start, pause, reset } = useTimer();

  const videoDurationMs = Math.floor(videoRef.current?.duration!) * 1000;
  const videoDurationSec = Math.floor(videoRef.current?.duration!);

  useEffect(() => {
    setVideoProgress((videoDurationMs + time * 1000) / videoDurationMs - 1);

    if (time === videoDurationSec) {
      reset();
      setVideoProgress(0);
    }
  }, [reset, time, videoDurationMs, videoDurationSec, videoProgress]);

  async function handleVideoPointerEnter() {
    const video = videoRef.current;

    try {
      await video?.play();
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
  };

  return (
    <Component>
      <Background />
      <ReviewVideo
        ref={videoRef}
        src={video.url ?? ''}
        controls={true}
        preload="metadata"
        muted
        onPointerEnter={handleVideoPointerEnter}
        onPointerOut={handleVideoPointerOut}
        onPlay={start}
        onPause={pause}
        onEnded={reset}
      />
      <Scale scale={videoProgress} />
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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 24, 20, 0.6);
  backdrop-filter: blur(12px);
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transition: visibility 0.2s, opacity 0.2s;
`;

const Component = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  min-height: 522px;
  cursor: pointer;

  &:hover {
    ${Background} {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const ReviewVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${colors.black};
`;

const Scale = styled.div<{ scale: number }>`
  position: absolute;
  top: 14px;
  width: 96%;
  left: calc((100% - 96%) / 2);
  height: 2px;
  background: ${colors.white05};
  border-radius: 2px;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: 0 50%;
    ${(props) =>
      props.scale &&
      css`
        transform: scaleX(${props.scale});
      `};
    background: ${colors.white};
  }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  left: 6px;
  z-index: 2;
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
