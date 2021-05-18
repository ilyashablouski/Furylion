import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import Picture from '@/components/Picture';
import { WorksItemType } from '@/typings/model';
import { media } from '@/utils/mixin';

function WorksItem({ image, title, text, logos }: WorksItemType) {
  return (
    <WorksItemContainer>
      <Picture
        mobileSmall={convertThumbnailToPictureImage(image)}
        className="swiper-image-block"
      />
      <Info>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Logos>
          {logos.map((logo, index) => {
            return (
              <LogoPicture
                key={index}
                mobileSmall={convertThumbnailToPictureImage(logo)}
              />
            );
          })}
        </Logos>
      </Info>
      {/*TODO: add copyright logo if we need*/}
      <WorksCopyright>{/*<Picture />*/}</WorksCopyright>
    </WorksItemContainer>
  );
}

const WorksItemContainer = styled.div`
  position: relative;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.52) 0%,
      rgba(0, 0, 0, 0) 35.78%
    );
    z-index: 10;
  }

  .swiper-image-block {
    padding-top: 56.01%;

    @media (max-width: 1023.98px) {
      padding-top: 71.09%;
    }

    @media (max-width: 767.98px) {
      padding-top: 151.66%;
    }

    img {
      image-rendering: -webkit-optimize-contrast;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #3e3e3e;
      object-fit: cover;
    }
  }

  cursor: pointer;
`;

const Info = styled.div`
  position: absolute;
  left: 68px;
  bottom: 40px;
  color: #fff;
  z-index: 1;

  ${media.tabletSmallOnly(css`
    bottom: 30px;
  `)}
  ${media.mobile(css`
    bottom: 45px;
  `)}
  .swiper-container-initialized & {
    left: 40px;
    right: 40px;

    ${media.mobile(css`
      left: 20px;
      right: 20px;
    `)}
  }
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;

  ${media.mobile(css`
    font-size: 24px;
  `)}
`;

const Text = styled.p`
  margin-top: 15px;
  max-width: 403px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  ${media.tabletSmall(css`
    font-size: 12px;
  `)}

  ${media.mobile(css`
    margin-top: 10px;
  `)}
`;

const WorksCopyright = styled.div`
  position: absolute;
  right: 68px;
  bottom: 40px;
  display: inline-flex;
  z-index: 1;
`;

const Logos = styled.div`
  margin-top: 15px;
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  align-items: center;
`;

const LogoPicture = styled(Picture)`
  padding: 0 15px;

  img {
    max-height: 36px;
    image-rendering: -webkit-optimize-contrast;
  }
`;

export default WorksItem;
