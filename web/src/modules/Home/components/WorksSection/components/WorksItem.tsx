import React from 'react';
import styled, { css } from 'styled-components';

import Picture from '@/components/Picture';
import { WorksItemType } from '@/typings/model';
import { media } from '@/utils/mixin';

import WorksTag from './WorksTag';

function WorksItem({ image, title, text, tags }: WorksItemType) {
  const tagsArray = tags ? tags.split(',') : [];

  return (
    <WorksItemContainer>
      <Picture
        mobileSmall={{
          src: image?.url,
          src2x: image?.url_2x,
          webp: image?.url_webp,
          webp2x: image?.url_webp_2x,
        }}
        usePlaceholder={true}
        placeholderColor={'#3e3e3e'}
        className="swiper-image-block"
      />

      <WorksInfo>
        <WorksTitle>{title}</WorksTitle>
        <WorksText>{text}</WorksText>
        <WorksTags>
          {tagsArray.map((tag, index) => {
            return <WorksTag key={index} tag={tag} />;
          })}
        </WorksTags>
      </WorksInfo>

      <WorksCopyright>
        {/*TODO: Add picture from Admin or static*/}
        <Picture />
      </WorksCopyright>
    </WorksItemContainer>
  );
}

const WorksItemContainer = styled.div`
  position: relative;

  .swiper-image-block {
    padding-top: 56.01%;

    @media (max-width: 1024px) {
      padding-top: 71.09%;
    }

    @media (max-width: 767px) {
      padding-top: 151.66%;
    }
  }

  img {
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WorksInfo = styled.div`
  position: absolute;
  left: 68px;
  bottom: 40px;
  color: #fff;
  z-index: 1;

  .swiper-container-initialized & {
    left: 40px;
    right: 40px;

    ${media.mobile(css`
      left: 20px;
      right: 20px;
    `)}
  }
`;

const WorksTitle = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;

  ${media.mobile(css`
    font-size: 24px;
  `)}
`;

const WorksText = styled.p`
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

const WorksTags = styled.div`
  margin-top: 25px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 34px;
  `)}

  ${media.mobile(css`
    margin-top: 15px;
    margin-left: -5px;
    margin-right: -5px;
  `)}
`;

export default WorksItem;
