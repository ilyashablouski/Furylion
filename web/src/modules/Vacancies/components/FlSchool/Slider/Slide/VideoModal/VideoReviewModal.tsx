import React from 'react';
import styled, { css } from 'styled-components';

import { ModalProps } from '@tager/web-components';

import { colors } from '@/constants/theme';
import Button from '@/components/Button';
import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon-2.svg';
import { media } from '@/utils/mixin';

type Props = ModalProps<{
  videoUrl: string | null;
  author: string | null;
  authorPosition: string | null;
  onModalClose?: () => void;
}>;

function VideoReviewModal({
  closeModal,
  innerProps: { videoUrl, author, authorPosition, onModalClose },
}: Props) {
  const onCloseModal = () => {
    closeModal();
    if (onModalClose) {
      onModalClose();
    }
  };

  return (
    <Component>
      <Panel>
        <AuthorContent>
          {author ? <Author>{author}</Author> : null}
          {authorPosition ? (
            <AuthorPosition>{authorPosition}</AuthorPosition>
          ) : null}
        </AuthorContent>

        <StyledButton onClick={onCloseModal}>
          <CloseIcon />
        </StyledButton>
      </Panel>
      <Video controls={true} preload="metadata" muted src={videoUrl ?? ''} />
    </Component>
  );
}

const Component = styled.div`
  position: relative;
  min-width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);
  color: ${colors.white};
  background: ${colors.black};
`;

const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  background: ${colors.red};
  z-index: 20;
  min-height: 56px;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 160%;
`;
const AuthorPosition = styled.span`
  font-size: 14px;
  line-height: 160%;
  margin-bottom: -7px;

  ${media.mobile(css`
    margin: 0;
  `)}
`;

const StyledButton = styled(Button)`
  position: absolute;
  width: 65px;
  background-color: ${colors.dark};
  height: auto;
  top: 0;
  right: 0;
  bottom: 0;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.red};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-55%, -50%);
  }
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};

  &::-webkit-media-controls-fullscreen-button {
    display: none;
  }
`;

export default VideoReviewModal;
