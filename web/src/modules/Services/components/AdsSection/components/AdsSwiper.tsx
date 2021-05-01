import React, { RefObject, useEffect, useRef } from 'react';
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

const rotate = 10;
const translate = 20;
const draggableBounds = {
  minX: -10,
  maxY: 10,
  minY: -10,
  maxX: 10,
};

function AdsSwiper({ adsImages }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideListRef = useRef<Array<RefObject<HTMLDivElement>>>([]);

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

    gsap.registerPlugin(Draggable);

    let disabled = false;
    let activeSlideIndex = Math.floor(slideList.length / 2);
    let slideWidth = getSlideWidth();

    slideList.forEach((slide, index) => {
      const resultIndex = activeSlideIndex - index;

      gsap.set(slide.current, {
        transformOrigin: '50% 100%',
        translateY: translate * Math.abs(resultIndex) ** 2,
        translateX: translate * -resultIndex,
        rotate: rotate * -resultIndex,
      });
    });

    function handleResize() {
      slideWidth = getSlideWidth();
    }

    window.addEventListener('resize', handleResize);

    function updateProgress(this: any) {
      if (disabled) return;

      const resultSlideIndex =
        this.x < 0 ? activeSlideIndex + 1 : activeSlideIndex - 1;
      const symbol = this.x < 0 ? '-' : '+';

      if (resultSlideIndex < 0) return;
      if (resultSlideIndex > slideList.length - 1) return;

      disabled = true;

      slideList.forEach((slide, index) => {
        const resultIndex = resultSlideIndex - index;

        gsap.to(slide.current, {
          duration: 0.25,
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

    const proxy = document.createElement('div');
    const draggable = Draggable.create(proxy, {
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      throwProps: true,
      bounds: draggableBounds,
      trigger: containerElem,
      inertia: true,
      type: 'x',
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      draggable.forEach((item) => item.kill());
    };
  }, [adsImages.length]);

  if (adsImages.length === 0) return null;

  return (
    <Container ref={containerRef}>
      {adsImages.map((adsImage, index) => (
        <Slide key={index} ref={slideListRef.current[index]} className="slide">
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
