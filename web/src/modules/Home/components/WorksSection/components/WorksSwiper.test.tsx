import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Swiper, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import { useMedia } from '@tager/web-core';
import { createMediaQuery } from '@tager/web-components';

import { media } from '@/utils/mixin';
import { WorksItemType } from '@/typings/model';
import WorksItem from '@/modules/Home/components/WorksSection/components/WorksItem';
import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import { breakpoints } from '@/constants/theme';

type Props = {
  worksItems: Array<WorksItemType>;
};

function WorksSwiper({ worksItems }: Props) {
  const swiperDesktopRef = useRef<HTMLDivElement>(null);
  const swiperLaptopRef = useRef<HTMLDivElement>(null);
  // const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isMountedDesktop, setMountedDesktop] = useState<boolean>(false);
  const [isMountedLaptop, setMountedLaptop] = useState<boolean>(false);
  const isDesktop = useMedia(createMediaQuery({ min: breakpoints.laptop }));
  const isLaptop = useMedia(createMediaQuery({ max: 1259 }));

  useEffect(() => {
    //TODO: Refactor code!!!
    // setMountedDesktop(true);
    // setMountedLaptop(true);

    const onChangeLayout = function () {
      if (isDesktop && swiperLaptop !== undefined) {
        swiperLaptop.destroy();
      }

      if (isDesktop && swiperDesktop == undefined) {
        SwiperCore.use([Navigation, EffectCoverflow]);
        enableDesktopSwiper();
      }

      if (isLaptop && swiperDesktop !== undefined) {
        swiperDesktop.destroy();
      }

      if (isLaptop && swiperLaptop == undefined) {
        SwiperCore.use([Pagination, Navigation, Autoplay, EffectCoverflow]);
        enableLaptopSwiper();
      }
    };
    // breakpoint.addListener(breakpointChecker);
    onChangeLayout();
  }, []);

  let swiperDesktop: any;
  let swiperLaptop: any;

  const enableDesktopSwiper = () => {
    if (!swiperDesktopRef.current) return null;
    swiperDesktop = new Swiper(swiperDesktopRef.current, {
      slidesPerView: 'auto',
      spaceBetween: 140,
      loop: true,
      centeredSlides: true,
      effect: 'coverflow',
      allowTouchMove: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      },
      navigation: {
        prevEl: `.swiper-prev`,
        nextEl: `.swiper-next`,
      },
    });
  };

  const enableLaptopSwiper = () => {
    if (!swiperLaptopRef.current) return null;
    swiperLaptop = new Swiper(swiperLaptopRef.current, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      allowTouchMove: false,
      navigation: {
        prevEl: `.swiper-prev`,
        nextEl: `.swiper-next`,
      },
    });
  };

  // if (isDesktop && worksItems.length > 1) {
  // } else if (isLaptop && worksItems.length > 1) {
  //   swiperDesktop().destroy(true, true);
  //   console.log("i'm laptop swiper");
  // }

  return (
    <WorksSwiperContainer className="swiper-container" ref={swiperDesktopRef}>
      <Wrapper className="swiper-wrapper">
        {worksItems.map((worksItem, index) => (
          <SwiperSlide key={index}>
            <WorksItem
              image={worksItem.image}
              title={worksItem.title}
              text={worksItem.text}
              tags={worksItem.tags ?? ''}
            />
          </SwiperSlide>
        ))}
      </Wrapper>
      <NavButton className={`swiper-prev`} prev>
        <SlideArrowIcon />
      </NavButton>
      <NavButton className={`swiper-next`} next>
        <SlideArrowIcon />
      </NavButton>
    </WorksSwiperContainer>
  );
}

const WorksSwiperContainer = styled.div`
  margin-top: 55px;

  ${media.tabletSmallOnly(css`
    margin-top: 38px;
  `)}
  ${media.mobile(css`
    margin-top: 16px;
  `)}

  .swiper-slide {
    max-width: 1230px;
  }

}
`;

const Wrapper = styled.div``;

const NavButton = styled.button<{ prev?: boolean; next?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.prev ? '7%' : 'auto')};
  right: ${(props) => (props.next ? '7%' : 'auto')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  transition: 150ms all ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
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

export default WorksSwiper;
