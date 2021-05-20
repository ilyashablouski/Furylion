import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import { AdsHeadItemType } from '@/typings/model';
import Picture from '@/components/Picture';

interface Props {
  isRevert?: boolean;
  itemList: Array<AdsHeadItemType>;
}

function Gallery({ isRevert = false, itemList }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log(itemList);
  });

  function handleMouseMove(event: React.MouseEvent) {
    const contentElement = wrapperRef.current;
    if (contentElement) {
      const content = contentElement.getBoundingClientRect();
      const value =
        event.clientX - (content.left + Math.floor(content.width / 2));
      const optionValue = isRevert ? String(value) : String(-value);
      contentElement.style.setProperty('--x', optionValue);
    }
  }

  function handleMouseOverOnCard(
    index: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    // if (event.target instanceof HTMLDivElement) {
    //   const coordinate = event.target.getBoundingClientRect();
    //   console.log(coordinate);
    // }
    return () => setActiveIndex(index);
  }

  function handleMouseLeaveOnCard() {
    setActiveIndex(null);
  }

  function handleMouseLeave() {
    wrapperRef.current?.style.setProperty('--x', '0');
  }

  return (
    <Component>
      <ContentContainer>
        <Wrapper
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          isRevert={isRevert}
        >
          <Content>
            {itemList.map((item, index) => {
              const style =
                activeIndex !== null
                  ? activeIndex > index
                    ? '-40px'
                    : activeIndex === index
                    ? 'initial'
                    : '40px'
                  : 'initial';

              return (
                <Card
                  key={index}
                  xPixels={style}
                  onMouseOver={(event) => handleMouseOverOnCard(index, event)}
                  onMouseLeave={handleMouseLeaveOnCard}
                >
                  <Picture {...convertThumbnailToPictureImage(item.image)} />
                </Card>
              );
            })}
          </Content>
        </Wrapper>
      </ContentContainer>
    </Component>
  );
}

const Component = styled.div`
  padding: 15px 0;
`;

const Wrapper = styled.div<{ isRevert: boolean }>`
  transform: translateX(${({ isRevert }) => (isRevert ? '-30%' : '-20%')});
`;
const Card = styled.div<{ xPixels: '-40px' | '40px' | 'initial' }>`
  flex: 1 1 100%;
  width: 100%;
  padding-right: 30px;
  border-radius: 22px;
  transition: transform 0.2s linear;
  transform: translateX(${({ xPixels }) => xPixels});

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transition: transform 0.2s linear;
    transform: scale(1.1);
  }

  img {
    transition: transform 0.3s linear !important;
    object-fit: cover;
    cursor: pointer;
    max-width: initial;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s linear;

  transform: translateX(calc(var(--x) / 3 * 1px));
`;

export default Gallery;
