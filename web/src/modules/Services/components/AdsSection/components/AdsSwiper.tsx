import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { Draggable } from 'gsap/dist/Draggable';

import {
  convertThumbnailToPictureImage,
  ThumbnailType,
} from '@tager/web-modules';

import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';

type Props = {
  adsImages: Array<ThumbnailType>;
};

const rotate = 9.5;
const translate = 22;
const draggableBounds = {
  minX: -5,
  maxY: 5,
  minY: -5,
  maxX: 5,
};

function AdsSwiper({ adsImages }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideListRef = useRef<Array<RefObject<HTMLDivElement>>>([]);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(adsImages.length / 2)
  );

  if (slideListRef.current.length !== adsImages.length) {
    slideListRef.current = Array.from({ length: adsImages.length }).map(() => {
      return React.createRef();
    });
  }

  function getSlideWidth() {
    const slideList = slideListRef.current;
    if (!slideList.length) return 0;

    return slideList[0].current
      ? slideList[0].current.offsetWidth + translate
      : translate;
  }

  useEffect(() => {
    const slideList = slideListRef.current;
    const containerElem = containerRef.current;
    if (!containerElem || !slideList.length) return;

    let disabled = false;

    if (disabled) return;

    let activeSlideIndex = currentIndex;
    let slideWidth = getSlideWidth();

    slideList.forEach((slide, index) => {
      const resultIndex = activeSlideIndex - index;

      gsap.set(slide.current, {
        translateY: translate * Math.abs(resultIndex) ** 2,
        translateX: translate * -resultIndex,
        rotate: rotate * -resultIndex,
      });
    });

    function handleResize() {
      slideWidth = getSlideWidth();
    }

    function handleDrag(mode: 'up' | 'down') {
      if (disabled) return;

      let resultSlideIndex: number = 5;
      let symbol: string;

      if (mode === 'down') {
        resultSlideIndex = activeSlideIndex - 1;
        symbol = '+';
      } else {
        resultSlideIndex = activeSlideIndex + 1;
        symbol = '-';
      }

      if (resultSlideIndex < 0) return;
      if (resultSlideIndex > slideList.length - 1) return;

      disabled = true;

      slideList.forEach((slide, index) => {
        const resultIndex = resultSlideIndex - index;

        gsap.to(slide.current, {
          duration: 0.4,
          rotate: rotate * -resultIndex,
          translateY: translate * Math.abs(resultIndex) ** 2,
          translateX: `${symbol}=${slideWidth}`,
          onComplete: () => {
            activeSlideIndex = resultSlideIndex;
            disabled = false;
          },
        });
      });
    }

    const containerPosition =
      containerElem.getBoundingClientRect().top + document.body.scrollTop ?? 0;

    window.addEventListener('wheel', (event) => {
      if (
        containerRef.current &&
        window.pageYOffset >= containerPosition + window.innerHeight / 2.5
      ) {
        if (Math.sign(event.wheelDelta) === -1) {
          handleDrag('down');
        } else {
          handleDrag('up');
        }
      }
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf(window);
    };
  }, [adsImages.length]);

  if (adsImages.length === 0) return null;

  return (
    <Container ref={containerRef}>
      {adsImages.map((adsImage, index) => (
        <Slide key={index} ref={slideListRef.current[index]}>
          <SwiperImage mobileSmall={convertThumbnailToPictureImage(adsImage)} />
        </Slide>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.div`
  flex: 0 0 248px;
  max-width: 248px;
  transform-origin: 50% 100%;

  ${media.tabletSmallOnly(css`
    flex-basis: 208px;
    max-width: 208px;
  `)};

  ${media.mobile(css`
    flex-basis: 140px;
    max-width: 140px;
  `)};
`;

const SwiperImage = styled(Picture)`
  border-radius: 30px;
  overflow: hidden;

  img {
    border-radius: 30px;
  }
`;

export default AdsSwiper;
