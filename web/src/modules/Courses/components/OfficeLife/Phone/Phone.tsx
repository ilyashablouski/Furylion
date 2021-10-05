import React, { useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ThumbnailType } from '@tager/web-modules';

import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { ReactComponent as VolumeOffIcon } from '@/assets/svg/courses/volume-off.svg';
import { ReactComponent as VolumeOnIcon } from '@/assets/svg/courses/volume-on.svg';

export interface PhoneProps {
  image: ThumbnailType;
  video: {
    url: string | null;
  };
  preview: ThumbnailType;
  avatar: ThumbnailType;
  title: string | null;
}

function Phone({ image, video, preview, avatar, title }: PhoneProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoDurationMs = videoRef.current?.duration! * 1000 + 50;
  const [isAnimationStop, setAnimationStop] = useState(true);
  const [isMuted, setMuted] = useState(true);

  const handleVideoPlay = () => {
    setAnimationStop(false);
  };

  const handleVideoPause = () => {
    setAnimationStop(true);
  };

  const handleChangeMutedState = () => {
    setMuted(!isMuted);
  };

  return (
    <Component>
      <Content>
        <PhoneBackground
          src={image.url}
          src2x={image.url_2x}
          srcWebp={image.url_webp}
          srcWebp2x={image.url_webp_2x}
        />

        <VideoContent>
          <Video
            ref={videoRef}
            src={video.url ?? ''}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            autoPlay
            loop
            muted={isMuted}
            preload="metadata"
            poster={preview.url ?? ''}
            playsInline
          />

          <ProgressBar>
            <Progress
              isAnimationStop={isAnimationStop}
              videoDurationMs={videoDurationMs}
            />
          </ProgressBar>

          <Information>
            <Avatar
              src={avatar.url}
              src2x={avatar.url_2x}
              srcWebp={avatar.url_webp}
              srcWebp2x={avatar.url_webp_2x}
            />
            <Title>{title}</Title>
          </Information>

          <VolumeButton onClick={handleChangeMutedState}>
            {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </VolumeButton>
        </VideoContent>
      </Content>
    </Component>
  );
}

export default Phone;

const animation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Component = styled.div`
  position: relative;
  margin-left: 78px;

  ${media.tablet(css`
    max-width: 330px;
    margin: 32px auto 0 auto;
    transform: translateY(0);
  `)}
`;

const Content = styled.div`
  position: relative;
`;

const PhoneBackground = styled(Picture)``;

const VideoContent = styled.div`
  position: absolute;
  top: 7%;
  left: 5%;
  right: 0;
  bottom: 0;
  background: ${colors.black};
  width: 90%;
  height: 79%;
  border-radius: 10px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const ProgressBar = styled.div`
  position: absolute;
  width: 96%;
  left: 2%;
  top: 6px;
  height: 2px;
  background: ${colors.white05};
  border-radius: 2px;
  z-index: 2;
  margin: auto auto;
`;

const Progress = styled.div<{
  isAnimationStop: boolean;
  videoDurationMs: number;
}>`
  height: 100%;
  background: ${colors.white};
  
   ${({ videoDurationMs }) =>
     css`
       animation: ${animation} ${videoDurationMs}ms infinite linear;
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

const Information = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 16px;
  left: 2%;
  z-index: 2;
  user-select: none;
`;

const Avatar = styled(Picture)`
  background: ${colors.white};
  border-radius: 50%;
  width: 26px;
  height: 26px;

  img {
    border-radius: 50%;
  }
`;

const Title = styled.span`
  font-size: 10px;
  line-height: 10px;
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
  color: ${colors.white};
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
