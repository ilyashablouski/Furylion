import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as VolumeOffIcon } from '@/assets/svg/courses/volume-off.svg';
import { ReactComponent as VolumeOnIcon } from '@/assets/svg/courses/volume-on.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { Review } from '@/modules/Courses/Courses.types';
import { media } from '@/utils/mixin';

function Video({ video, avatar, name, position, preview }: Review) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setMuted] = useState(true);

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

  const handleChangeMutedState = () => {
    setMuted(!isMuted);
  };

  return (
    <Component>
      <Background />
      <Preview
        src={preview.url}
        src2x={preview.url_2x}
        srcWebp={preview.url_webp}
        srcWebp2x={preview.url_webp_2x}
      />

      <ReviewVideo
        ref={videoRef}
        src={video.url ?? ''}
        onPointerEnter={handleVideoPointerEnter}
        onPointerOut={handleVideoPointerOut}
        controls
        controlsList="playsinline"
        muted={isMuted}
        preload="metadata"
      />
      <VolumeButton onClick={handleChangeMutedState}>
        {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </VolumeButton>

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
  z-index: 2;
  opacity: 1;
  visibility: visible;
  transition: visibility 0.2s, opacity 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
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

  &::-webkit-media-controls {
    visibility: hidden;
  }
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

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 20px;
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
