import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { useTimer } from 'use-timer';

import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import { Slide } from '@/modules/Vacancies/components/FlSchool/FlSchool.types';
import SlideComponent from '@/modules/Vacancies/components/FlSchool/Slider/Slide';

SwiperCore.use([Pagination, Navigation, Autoplay]);

type Props = {
  sliderItems: Slide[];
  isRightSide?: boolean;
};

function FlSchoolSlider({ sliderItems, isRightSide = true }: Props) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [realSlideIndex, setRealSlideIndex] = useState<number>(0);
  const [sliderProgress, setSliderProgress] = useState<number>(0);
  const [isAnimationStop, setAnimationStop] = useState<boolean>(false);
  const { time, start, pause, reset } = useTimer();

  useEffect(() => {
    if (!swiper) {
      return;
    }

    setSliderProgress((5000 + time * 1000) / 5000 - 1);

    if (time === 5) {
      reset();
      setSliderProgress(0);
      swiper.slideNext();
      start();
    }
  }, [reset, start, swiper, time]);

  const handlePlayVideo = () => {
    pause();
    setAnimationStop(!isAnimationStop);
  };

  const handlePauseVideo = () => {
    start();
    setAnimationStop(!isAnimationStop);
  };

  const handleEndedVideo = () => {
    start();
    setAnimationStop(false);
  };

  const handleSlideChange = () => {
    setSliderProgress(0);
    reset();
    start();
  };

  return (
    <Container>
      <Swiper
        onSwiper={setSwiper}
        onInit={start}
        loop={true}
        initialSlide={0}
        loopedSlides={1}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        allowTouchMove={true}
        speed={600}
        navigation={{
          prevEl: `.swiper-prev2`,
          nextEl: `.swiper-next2`,
        }}
        pagination={{
          el: '.swiper-pagination2',
          type: 'bullets',
          clickable: true,
        }}
        observer={true}
        resizeObserver={true}
        observeParents={true}
        onSlideChange={({ previousIndex, realIndex }) => {
          setRealSlideIndex(previousIndex === 0 ? previousIndex : realIndex);
          handleSlideChange();
        }}
      >
        {sliderItems.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideComponent
              swiper={swiper}
              onPlay={handlePlayVideo}
              onPause={handlePauseVideo}
              onEnded={handleEndedVideo}
              url={slide.video.url}
              text={slide.text}
              author={slide.author}
              authorPosition={slide.authorPosition}
            />
          </SwiperSlide>
        ))}

        <NavButtons isRightSide={isRightSide}>
          <NavButton className={`swiper-prev2`} prev>
            <SlideArrowIcon />
          </NavButton>
          <NavButton className={`swiper-next2`} next>
            <SlideArrowIcon />
          </NavButton>
        </NavButtons>

        <SwiperPaginationWrapper>
          <BulletsPagination
            className="swiper-pagination2"
            scale={sliderProgress}
            isAnimationStop={isAnimationStop}
          />
          <FractionPagination>
            <CurrentValueLabel>00{realSlideIndex + 1}</CurrentValueLabel>
            <TotalValueLabel>//&nbsp;00{sliderItems.length}</TotalValueLabel>
          </FractionPagination>
        </SwiperPaginationWrapper>
      </Swiper>
    </Container>
  );
}

const animation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  min-height: 630px;

  .swiper-container-initialized {
    .swiper-slide {
      display: flex;
    }
  }
`;

const SwiperPaginationWrapper = styled.div`
  position: absolute;
  top: 44px;
  left: 30px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  z-index: 1;

  ${media.tablet(css`
    justify-content: flex-start;
    left: 40px;
    bottom: 120px;
  `)}

  ${media.mobile(css`
    display: none;
  `)}
`;

const BulletsPagination = styled.div<{
  scale: number;
  isAnimationStop: boolean;
}>`
  display: flex;
  flex: auto;
  max-width: 240px;
  text-align: left;
  z-index: 1;

  .swiper-pagination-bullet {
    position: relative;
    max-width: 32px;
    width: 100%;
    height: 2px;
    border-radius: 0;
    background: #8c8b89;
    opacity: 1;
    border: none;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 0;
      background: #6b1a1a;
      opacity: 1;
      content: '';
      transform-origin: 0 50%;
    }
  }

  .swiper-pagination-bullet-active {
    position: relative;
    overflow: hidden;
    background: #8c8b89;
    border: none;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      will-change: transform;
      animation: ${animation} 5000ms linear;

      ${(props) =>
        props.isAnimationStop
          ? css`
              animation-play-state: paused;
            `
          : css`
              animation-play-state: running;
            `}
    }
  }

  ${media.mobile(css`
    flex-basis: 100%;
    max-width: 100%;
    margin-top: 12px;
    order: 2;
  `)}
`;

const FractionPagination = styled.div`
  margin-left: 22px;
  line-height: 100%;

  ${media.tablet(css`
    margin-left: 0;
    position: absolute;
    top: 30px;
  `)}
`;

const CurrentValueLabel = styled.span`
  display: inline-block;
  width: 73px;
  font-weight: 900;
  font-size: 40px;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 30px;
  `)}
`;

const TotalValueLabel = styled.span`
  margin-left: 15px;
  position: relative;
  display: inline-block;
  bottom: 3px;
  font-weight: 500;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.6);

  ${media.mobile(css`
    font-size: 20px;
  `)}
`;

const NavButtons = styled.div<{ isRightSide?: boolean }>`
  display: flex;
  position: absolute;
  ${(props) =>
    props.isRightSide
      ? css`
          right: 23px;
        `
      : css`
          bottom: 52px;
          right: 52px;
        `}

  ${media.tablet(css`
    display: none;
  `)}
`;

const NavButton = styled.button<{
  prev?: boolean;
  next?: boolean;
}>`
  ${(props) =>
    props.prev &&
    css`
      margin-right: 64px;
    `}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: ${colors.dark05};
  border-radius: 50%;
  z-index: 1;
  transition: 150ms all ease-in-out;

  ${media.tabletSmall(css`
    display: none;
  `)}
  &:hover {
    color: ${colors.dark};
  }

  svg {
    transform: ${(props) => (props.next ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  &.swiper-prev {
    svg {
      margin-right: 4px;
    }

    ${media.tablet(css`
      left: 40px;
    `)}
  }

  &.swiper-next {
    svg {
      margin-left: 4px;
    }

    ${media.tablet(css`
      right: 40px;
    `)}
  }
`;

export default FlSchoolSlider;
