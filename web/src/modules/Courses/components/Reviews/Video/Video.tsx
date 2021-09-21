import React, { useRef } from 'react';
import styled from 'styled-components';

import { ReactComponent as PlayIcon } from '@/assets/svg/play.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { Review } from '@/modules/Courses/Courses.types';

function Video({ video, avatar, name, position }: Review) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      <Background>
        <PlayIcon />
      </Background>
      <ReviewVideo
        ref={videoRef}
        src={video.url ?? ''}
        controls={true}
        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
        preload="metadata"
        muted
        onPointerEnter={handleVideoPointerEnter}
        onPointerOut={handleVideoPointerOut}
      />
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

  display: flex;
  align-items: center;
  justify-content: center;
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

  &::-webkit-media-controls-timeline {
    position: absolute;
    padding: 0;
    top: 14px;
    width: 96%;
    left: 2%;
  }

  &::-webkit-media-controls {
    z-index: 3;
  }

  &::-webkit-media-controls-fullscreen-button {
    display: none;
  }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 28px;
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
