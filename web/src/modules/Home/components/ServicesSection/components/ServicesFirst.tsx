import React from 'react';
import styled from 'styled-components';

import { ServiceItemType } from '@/typings/model';

import ServiceItem from './serviceItem';

type Props = {
  servicesItems: Array<ServiceItemType>;
};

function ServicesFirst({ servicesItems }: Props) {
  // TODO: Review
  if (servicesItems.length === 0) return null;
  // const services = servicesItems.slice(0, 2);

  const leftItem = servicesItems[0];
  const rightTopItem = servicesItems[1];
  const rightBottomItem = servicesItems[2];
  return (
    <ServicesContent>
      <ContentLeft>
        <ServiceItem
          image={leftItem.image}
          title={leftItem.title}
          text={leftItem.text}
          linkLabel={leftItem.linkLabel}
          linkUrl={leftItem.linkUrl}
        />
      </ContentLeft>

      <ContentRight>
        {/*<ServiceItem />*/}
        {/*<ServiceItem />*/}
      </ContentRight>
    </ServicesContent>
  );
}

const ServicesContent = styled.div``;

const ContentLeft = styled.div``;
const ContentRight = styled.div``;

export default ServicesFirst;
