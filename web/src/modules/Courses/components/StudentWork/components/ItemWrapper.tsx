import React from 'react';
import styled, { css } from 'styled-components';

import { useModal } from '@tager/web-components';

import { media } from '@/utils/mixin';
import { StudentsItem } from '@/modules/Courses/Courses.types';

import GalleryModal from './GalleryModal';

type Props = {
  className?: string;
  children: React.ReactNode;
  singleItem?: boolean;
  gallery: StudentsItem['gallery'];
};

function ItemWrapper({ className, singleItem, children, gallery }: Props) {
  const modal = useModal();

  function openGalleryModalModal() {
    modal(GalleryModal, { gallery });
  }

  return (
    <Container
      className={className}
      singleItem={singleItem}
      onClick={openGalleryModalModal}
    >
      <Shadow />
      {children}
    </Container>
  );
}

export default ItemWrapper;

const Container = styled.div<{ singleItem?: boolean }>`
  position: relative;
  height: ${(props) => (props.singleItem ? '100%' : '50%')};
  overflow: hidden;
  cursor: pointer;

  ${media.mobile(css`
    margin-top: 30px;
    padding-top: 83.88%;
  `)}
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101%;
  background: linear-gradient(180deg, rgba(25, 24, 20, 0) 41.15%, #191814 100%);
  z-index: 1;

  ${media.mobile(css`
    display: none;
  `)}
`;
