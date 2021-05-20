import React from 'react';
import styled from 'styled-components';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';
import { Nullish } from '@tager/web-core';
import { ModalProps } from '@tager/web-components';

import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg';
import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';

type Props = ModalProps<{ image: Nullish<ThumbnailType> }>;

function PictureModal({ innerProps: { image }, closeModal }: Props) {
  return (
    <Wrapper>
      <Picture {...convertThumbnailToPictureImage(image)} />
      <WrapperIcon onClick={closeModal}>
        <CloseIcon />
      </WrapperIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  svg {
    width: 50px;
    height: 50px;
    opacity: 0.5;
    transition: all 0.3s linear;
  }

  svg path:last-child {
    fill: ${colors.white};
  }
`;

const WrapperIcon = styled.div`
  position: absolute;
  top: -50px;
  right: -1%;
  cursor: pointer;

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export default PictureModal;
