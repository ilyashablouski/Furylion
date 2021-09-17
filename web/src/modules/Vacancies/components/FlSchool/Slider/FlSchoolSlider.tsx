import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { useTimer } from 'use-timer';

import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { ReactComponent as AuthorTextIcon } from '@/assets/svg/vacancies/author-text.svg';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import { Slide } from '@/modules/Vacancies/components/FlSchool/FlSchool.types';

SwiperCore.use([Pagination, Navigation, Autoplay]);

type Props = {
  sliderItems: Slide[];
  isRightSide?: boolean;
};

function FlSchoolSlider({ sliderItems, isRightSide = true }: Props) {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [realSlideIndex, setRealSlideIndex] = useState<number>(0);
  const [sliderProgress, setSliderProgress] = useState<number>(0);
  const { time, start, pause, reset } = useTimer();

  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  const handleSlideChange = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    reset();

    setSliderProgress(0);

    video.pause();

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
            <Content>
              <Left>
                <VideoContainer>
                  <Video
                    ref={videoRef}
                    controls={true}
                    preload="true"
                    onPlay={pause}
                    onPause={start}
                    onEnded={start}
                    src={slide.video.url ?? ''}
                  />
                </VideoContainer>
              </Left>
              <Right>
                <Top>
                  <AuthorTextIcon />
                  <AuthorText>{slide.text}</AuthorText>
                </Top>
                <Bottom>
                  <Author>{slide.author}</Author>
                  <AuthorPosition>{slide.authorPosition}</AuthorPosition>
                </Bottom>
              </Right>
            </Content>
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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: auto;
  position: relative;
`;

const Left = styled.div`
  position: relative;
  flex: 0 0 501px;
  max-width: 501px;
  padding: 15px;
  background: ${colors.white};
  z-index: 0;

  ${media.tabletSmallOnly(css`
    flex: 1 1 600px;
    max-width: 600px;
  `)}

  ${media.mobile(css`
    position: absolute;
    right: 0;
  `)}
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 4;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: ${colors.black};
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  background: ${colors.white};
  margin-left: 20px;
  padding: 52px;

  ${media.tablet(css`
    margin-left: 0;
    padding: 20px 30px;
  `)}

  ${media.mobile(css`
    padding: 20px;
  `)}
`;

const Top = styled.div`
  display: flex;

  svg {
    flex: 0 0 58px;

    ${media.mobile(css`
      flex: auto;
    `)}
  }

  ${media.tablet(css`
    flex-direction: column;
  `)}
`;

const AuthorText = styled.p`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.dark};
  margin-left: 24px;
  max-width: 523px;

  ${media.tablet(css`
    margin-left: 0;
    margin-top: 20px;
  `)}

  ${media.mobile(css`
    font-size: 20px;
    max-width: none;
  `)}
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.dark};

  ${media.tablet(css`
    font-size: 20px;
  `)}

  ${media.mobile(css`
    line-height: 130%;
  `)}
`;

const AuthorPosition = styled(Author)`
  line-height: 120%;
  margin-top: 8px;

  ${media.tablet(css`
    line-height: 160%;
  `)}

  ${media.mobile(css`
    line-height: 130%;
  `)}
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

const BulletsPagination = styled.div<{ scale: number }>`
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
      content: '';
      transform-origin: 0 50%;
      ${(props) =>
        props.scale &&
        css`
          transform: scaleX(${props.scale});
        `};
      background: #6b1a1a;
      opacity: 1;
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
