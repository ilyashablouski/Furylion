import React from 'react';
import styled from 'styled-components';

import { ServiceItemType } from '@/typings/model';
import ServicesBlock from '@/modules/Home/components/ServicesSection/components/ServicesBlock';
import { colors } from '@/constants/theme';

import ServiceItem from './ServiceItem';

type Props = {
  servicesItems: Array<ServiceItemType>;
};

function ServicesFirst({ servicesItems }: Props) {
  // TODO: Refactoring if new data
  if (servicesItems.length === 0) return null;
  // const services = servicesItems.slice(0, 2);

  const servicesMarkupArray = servicesItems.map((serviceItem) => {
    return (
      <ServiceItem
        image={serviceItem.image}
        title={serviceItem.title}
        text={serviceItem.text}
        linkLabel={serviceItem.linkLabel}
        linkUrl={serviceItem.linkUrl}
      />
    );
  });

  return (
    <ServicesBlock>
      <BlockLeft>
        <ItemWrapper single>{servicesMarkupArray[0]}</ItemWrapper>
      </BlockLeft>

      <BlockRight>
        <ItemWrapper>{servicesMarkupArray[1]}</ItemWrapper>
        <ItemWrapper>{servicesMarkupArray[2]}</ItemWrapper>
      </BlockRight>
    </ServicesBlock>
  );
}
const BlockLeft = styled.div`
  clip-path: polygon(0 0, 100% 0, 68% 100%, 0 100%);
  flex: 0 1 66.11%;
  max-width: 66.11%;
  z-index: 3;
`;
const BlockRight = styled.div`
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  position: absolute;
  right: 0;
  width: 53.45%;
  height: 100%;
  z-index: 1;
`;

const ItemWrapper = styled.div<{ single?: boolean }>`
  position: relative;
  height: ${(props) => (props.single ? '100%' : '50%')};
  overflow: hidden;
`;

export default ServicesFirst;
