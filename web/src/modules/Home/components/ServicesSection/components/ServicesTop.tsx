import React from 'react';
import styled, { css } from 'styled-components';

import { ServiceItemType } from '@/typings/model';
import ServicesBlock from '@/modules/Home/components/ServicesSection/components/ServicesBlock';
import { media } from '@/utils/mixin';

import ServiceItem from './ServiceItem';
import ItemWrapper from './ItemWrapper';

type Props = {
  servicesItems: Array<ServiceItemType>;
};

function ServicesTop({ servicesItems }: Props) {
  if (servicesItems.length === 0) return null;

  const servicesMarkupArray = servicesItems.map((serviceItem) => {
    return (
      <ServiceItem
        image={serviceItem.image}
        title={serviceItem.title}
        text={serviceItem.text}
        linkLabel={serviceItem.linkLabel}
        linkUrl={serviceItem.linkUrl}
        className="service-item-info"
      />
    );
  });

  return (
    <ServicesBlock>
      <BlockLeft>
        <ItemWrapper
          className="item-wrapper"
          singleItem
          linkUrl={servicesMarkupArray[0].props.linkUrl}
        >
          {servicesMarkupArray[0]}
        </ItemWrapper>
      </BlockLeft>

      <BlockRight>
        <ItemWrapper
          className="item-wrapper"
          linkUrl={servicesMarkupArray[1].props.linkUrl}
        >
          {servicesMarkupArray[1]}
        </ItemWrapper>
        <ItemWrapper
          className="item-wrapper"
          linkUrl={servicesMarkupArray[2].props.linkUrl}
        >
          {servicesMarkupArray[2]}
        </ItemWrapper>
      </BlockRight>
    </ServicesBlock>
  );
}
const BlockLeft = styled.div`
  clip-path: polygon(0 0, 100% 0, 68% 100%, 0 100%);
  flex: 0 1 66.1%;
  max-width: 66.1%;
  z-index: 3;
  transform: translateZ(0);

  ${media.tabletSmall(css`
    margin-top: -10px;
    position: relative;
    width: 100%;
    max-width: 100%;
    clip-path: initial;
  `)}

  ${media.mobile(css`
    margin-top: -30px;
  `)}

  .item-wrapper {
    ${media.tabletSmallOnly(css`
      margin-top: 10px;
    `)}

    ${media.mobile(css`
      margin-top: 30px;
    `)}
  }

  .item-image-container {
    ${media.tabletSmall(css`
      padding-top: 65.88%;
    `)}

    ${media.mobile(css`
      padding-top: 83.33%;
    `)}
  }
`;
const BlockRight = styled.div`
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 53.45%;
  height: 100%;
  z-index: 1;
  transform: translateZ(0);
  transform: translateZ(0);
  ${media.tabletSmall(css`
    position: relative;
    width: 100%;
    max-width: 100%;
    clip-path: initial;
  `)}

  .item-wrapper {
    &:nth-child(1) {
      margin-bottom: 11px;

      ${media.tabletSmallOnly(css`
        margin-top: 10px;
        margin-bottom: 0;
      `)}

      ${media.mobile(css`
        margin-top: 30px;
        margin-bottom: 0;
      `)}
    }

    &:nth-child(2) {
      margin-top: 11px;
      ${media.tabletSmallOnly(css`
        margin-top: 10px;
      `)}

      ${media.mobile(css`
        margin-top: 30px;
      `)}
    }
  }

  .service-item-info {
    right: 0;
    text-align: right;

    ${media.mobile(css`
      left: 0;
      right: auto;
      text-align: left;
    `)}

    p {
      margin-left: auto;

      ${media.mobile(css`
        margin-left: 0;
        margin-right: auto;
      `)}
    }
  }

  .item-image-container {
    ${media.tabletSmall(css`
      padding-top: 31.51%;
    `)}

    ${media.mobile(css`
      padding-top: 41.66%;
    `)}
  }
`;

export default ServicesTop;
