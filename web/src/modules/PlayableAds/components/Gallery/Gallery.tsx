import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';
import { useModal } from '@tager/web-components';

import { AdsHeadItemType } from '@/typings/model';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';
import Game from '@/modules/PlayableAds/components/Game';

interface Props {
  isRevert?: boolean;
  itemList: Array<AdsHeadItemType>;
}

function Gallery({ isRevert = false, itemList }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const openModal = useModal();

  function onClick() {
    openModal(Game, {});
  }

  function handleMouseMove(event: React.MouseEvent) {
    const contentElement = contentRef.current;
    if (contentElement) {
      const content = contentElement.getBoundingClientRect();
      const value =
        event.clientX - (content.left + Math.floor(content.width / 2));
      const optionValue = isRevert ? String(value) : String(-value);
      contentElement.style.setProperty('--x', optionValue);
      contentElement.style.setProperty('--transition', 'initial');
      if (wrapperRef.current?.getBoundingClientRect().left) {
      }
    }
  }

  function handleMouseLeave(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    contentRef.current?.style.setProperty('--x', '0');
  }

  return (
    <Component
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Wrapper isRevert={isRevert}>
        <Content ref={contentRef}>
          {itemList.map((item, index) => {
            return (
              <Card onClick={onClick} data-index={index} key={index}>
                <Picture {...convertThumbnailToPictureImage(item.image)} />
              </Card>
            );
          })}
        </Content>
      </Wrapper>
    </Component>
  );
}

const Component = styled.div`
  padding: 15px 0;
`;

const Wrapper = styled.div<{ isRevert: boolean }>`
  transform: translateX(${({ isRevert }) => (isRevert ? '-5%' : 'initial')});

  ${media.mobileMedium(css`
    transform: translateX(-88%);
  `)}
`;
const Card = styled.div`
  max-width: 468px;
  flex: 1 1 100%;
  width: 100%;
  margin-right: 30px;

  transition: all 0.2s linear;

  & > div {
    overflow: hidden;
    border-radius: 22px;
    -webkit-box-shadow: 0px 0px 50px 21px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 0px 0px 50px 21px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 0px 50px 21px rgba(0, 0, 0, 0.21);
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.1);
    margin: 0 60px 0 30px;
  }

  img {
    object-fit: cover;
    cursor: pointer;
    max-width: initial;

    ${media.mobile(css`
      max-width: 294px;
      height: 165px;
    `)}
    ${media.mobileMedium(css`
      width: 288px;
      height: 160px;
    `)}
  }

  ${media.mobile(css`
    padding-right: 15px;
  `)}
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s linear;
  transform: translate(calc(var(--x) / 5 * 1px));
`;

export default Gallery;
