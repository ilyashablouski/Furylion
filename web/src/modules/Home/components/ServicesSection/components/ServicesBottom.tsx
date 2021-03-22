import React from 'react';
import styled from 'styled-components';

import { ServiceItemType } from '@/typings/model';
import ServicesBlock from '@/modules/Home/components/ServicesSection/components/ServicesBlock';

import ServiceItem from './ServiceItem';
import ItemWrapper from './ItemWrapper';

type Props = {
  servicesBottomItems: Array<ServiceItemType>;
};

function ServicesBottom({ servicesBottomItems }: Props) {
  // TODO: Refactoring if new data
  if (servicesBottomItems.length === 0) return null;
  // const services = servicesBottomItems.slice(0, 2);

  const servicesMarkupArray = servicesBottomItems.map((serviceItem) => {
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
    <ServicesBlock second>
      <BlockLeft>
        <ItemWrapper className="item-wrapper">
          {servicesMarkupArray[0]}
        </ItemWrapper>
        <ItemWrapper className="item-wrapper">
          {servicesMarkupArray[1]}
        </ItemWrapper>
      </BlockLeft>

      <BlockRight>
        <ItemWrapper className="item-wrapper" singleItem rightAlign>
          {servicesMarkupArray[2]}
        </ItemWrapper>
      </BlockRight>
    </ServicesBlock>
  );
}
const BlockLeft = styled.div`
  clip-path: polygon(0 0, 61% 0, 100% 100%, 0 100%);
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 53.45%;
  height: 100%;
  z-index: 1;

  .item-wrapper {
    &:nth-child(1) {
      margin-bottom: 11px;
    }

    &:nth-child(2) {
      margin-top: 11px;
    }
  }
`;

const BlockRight = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 32% 100%);
  flex: 0 1 66.11%;
  max-width: 66.11%;
  z-index: 3;

  .service-item-info {
    right: 0;
  }
`;

export default ServicesBottom;
