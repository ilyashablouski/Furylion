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
  minX: -5,
  maxY: 5,
  minY: -5,
  maxX: 5,
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

    let disabled = false;

    if (disabled) return;

    let activeSlideIndex = Math.floor(slideList.length / 2);
    let slideWidth = getSlideWidth();

    slideList.forEach((slide, index) => {
      const resultIndex = activeSlideIndex - index;

      gsap.set(slide.current, {
        translateY: translate * Math.abs(resultIndex) ** 2,
        translateX: translate * -resultIndex,
        rotate: rotate * -resultIndex,
      });
    });

    function onScroll() {
      if (!containerElem) return;
      let x = 5;
      const resultSlideIndex =
        x < 0 ? activeSlideIndex + 1 : activeSlideIndex - 1;
      const symbol = x < 0 ? '-' : '+';

      if (resultSlideIndex < 0) return;
      if (resultSlideIndex > slideList.length - 1) return;

      disabled = true;

      slideList.forEach((slide, index) => {
        const resultIndex = resultSlideIndex - index;

        gsap.to(slide.current, {
          scrollTrigger: {
            trigger: containerElem,
            scrub: true,
          },
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

    //window.addEventListener('scroll', onScroll);

    // gsap.registerPlugin(Draggable);
    //
    // let disabled = false;
    // let activeSlideIndex = Math.floor(slideList.length / 2);
    // let slideWidth = getSlideWidth();
    //
    // slideList.forEach((slide, index) => {
    //   const resultIndex = activeSlideIndex - index;
    //
    //   gsap.set(slide.current, {
    //     translateY: translate * Math.abs(resultIndex) ** 2,
    //     translateX: translate * -resultIndex,
    //     rotate: rotate * -resultIndex,
    //   });
    // });
    //
    // function handleResize() {
    //   slideWidth = getSlideWidth();
    // }
    //
    // window.addEventListener('resize', handleResize);
    //
    // function handleDrag(this: Draggable) {
    //   if (disabled) return;
    //
    //
    //   const resultSlideIndex =
    //     this.x < 0 ? activeSlideIndex + 1 : activeSlideIndex - 1;
    //   const symbol = this.x < 0 ? '-' : '+';
    //
    //   if (resultSlideIndex < 0) return;
    //   if (resultSlideIndex > slideList.length - 1) return;
    //
    //   disabled = true;
    //
    //   slideList.forEach((slide, index) => {
    //     const resultIndex = resultSlideIndex - index;
    //
    //     gsap.to(slide.current, {
    //       duration: 0.25,
    //       rotate: rotate * -resultIndex,
    //       translateY: translate * Math.abs(resultIndex) ** 2,
    //       translateX: `${symbol}=${slideWidth}`,
    //       onComplete: () => {
    //         activeSlideIndex = resultSlideIndex;
    //         disabled = false;
    //       },
    //     });
    //   });
    // }
    //
    // const proxy = document.createElement('div');
    // const draggable = Draggable.create(proxy, {
    //   onDrag: handleDrag,
    //   onThrowUpdate: handleDrag,
    //   throwProps: true,
    //   bounds: draggableBounds,
    //   trigger: containerElem,
    //   type: 'x',
    // });

    return () => {
      // window.removeEventListener('resize', handleResize);
      // draggable.forEach((item) => item.kill());
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
