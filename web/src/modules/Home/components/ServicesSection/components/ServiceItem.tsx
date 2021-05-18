import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { ServiceItemType } from '@/typings/model';
import { colors } from '@/constants/theme';
import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';

interface Props extends ServiceItemType {
  className?: string;
}

function ServiceItem({ image, title, text, linkLabel, className }: Props) {
  return (
    <>
      <ImageContainer>
        <Picture
          mobileSmall={{
            src: image?.url,
            src2x: image?.url_2x,
            webp: image?.url_webp,
            webp2x: image?.url_webp_2x,
          }}
          className="item-image-container"
        />
      </ImageContainer>

      <ItemInfo className={className}>
        <ContentContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemText>{text}</ItemText>
          <Label className="item-label">{linkLabel}</Label>
        </ContentContainer>
      </ItemInfo>
    </>
  );
}

const ImageContainer = styled.div`
  ${media.mobile(css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `)}
  .item-image-container {
    display: block;

    ${media.mobile(css`
      &:before {
        content: '';
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(25, 24, 20, 0) 41.15%,
          #191814 100%
        );
        z-index: 1;
      }
    `)}
    img {
      ${media.tabletSmall(css`
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
      `)}
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out !important;
  }
`;

const ItemInfo = styled.div`
  position: absolute;
  bottom: 35px;
  width: 100%;
  max-width: 77%;
  color: #fff;
  z-index: 2;
  transition: all 150ms ease-in-out;

  ${media.tabletSmall(css`
    max-width: none;
  `)}

  ${media.mobile(css`
    bottom: 0;
  `)}
`;

const ItemTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;

  ${media.mobile(css`
    font-size: 20px;
  `)}
`;

const ItemText = styled.p`
  margin-top: 5px;
  max-width: 352px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  ${media.mobile(css`
    max-width: none !important;
    font-size: 12px;
  `)}
`;

const Label = styled.span`
  margin-top: 5px;
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-transform: capitalize;
  color: ${colors.red};
  border-bottom: 1px solid ${colors.red};
  transition: 150ms all ease-in-out;

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

export default ServiceItem;
