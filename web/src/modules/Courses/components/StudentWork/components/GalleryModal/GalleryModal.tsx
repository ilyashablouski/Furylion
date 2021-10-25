import React from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import { ModalProps } from '@tager/web-components';

import { StudentsItem } from '@/modules/Courses/Courses.types';
import CloseButton from '@/components/modals/shared/CloseButton';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { ReactComponent as SlideArrowIcon } from '@/assets/svg/slide-arrow.svg';
import Picture from '@/components/Picture';

SwiperCore.use([Navigation]);

type Props = ModalProps<{
  gallery: StudentsItem['gallery'];
}>;

function GalleryModal({ closeModal, innerProps: { gallery } }: Props) {
  if (!gallery) {
    return null;
  }

  return (
    <Component>
      <ButtonWrapper>
        <CloseButton onClick={closeModal} />
      </ButtonWrapper>

      <Swiper
        loop={true}
        slidesPerView={1}
        speed={600}
        navigation={{
          prevEl: `.swiper-prev`,
          nextEl: `.swiper-next`,
        }}
      >
        {gallery.map((galleryImage, index) => (
          <SwiperSlide key={index}>
            <GalleryImage
              key={index}
              src={galleryImage.url}
              src2x={galleryImage.url_2x}
              srcWebp={galleryImage.url_webp}
              srcWebp2x={galleryImage.url_webp_2x}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <NavButtons>
        <NavButton className={`swiper-prev`} prev>
          <SlideArrowIcon />
        </NavButton>
        <NavButton className={`swiper-next`} next>
          <SlideArrowIcon />
        </NavButton>
      </NavButtons>
    </Component>
  );
}

export default GalleryModal;

const Component = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  min-width: 70vw;
  min-height: calc(var(--vh, 1vh) * 80);
  background: ${colors.dark};

  .swiper-container-initialized {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  ${media.tablet(css`
    min-width: 100vw;
    min-height: calc(var(--vh, 1vh) * 100);
  `)}

  ${media.mobile(css`
    padding: 60px 20px;
  `)}
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 60px;
  display: inline-flex;
  z-index: 2;

  button {
    color: ${colors.white};

    svg {
      g {
        opacity: 1;
      }
    }

    &:hover {
      color: ${colors.red};
    }
  }

  ${media.mobile(css`
    right: 20px;
  `)}
`;

const GalleryImage = styled(Picture)`
  position: absolute;
  width: 100%;
  height: 100%;

  picture,
  img {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: fill;

    ${media.tablet(css`
      object-fit: contain;
    `)}
  }
`;

const NavButtons = styled.div`
  display: flex;
`;

const NavButton = styled.button<{
  prev?: boolean;
  next?: boolean;
}>`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  right: 60px;
  color: ${colors.white};
  border-radius: 50%;
  z-index: 1;
  transition: 150ms all ease-in-out;

  ${(props) =>
    props.prev &&
    css`
      left: 60px;

      ${media.mobile(css`
        left: 20px;
      `)}
    `}

  &:hover {
    color: ${colors.red};
  }

  svg {
    transform: ${(props) => (props.next ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  ${media.mobile(css`
    right: 20px;
  `)}
`;
