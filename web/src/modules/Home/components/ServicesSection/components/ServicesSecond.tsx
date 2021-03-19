import React from 'react';
import styled from 'styled-components';

import ServiceItem from './serviceItem';

function ServicesSecond() {
  return (
    <ServicesContent>
      <ContentLeft>
        <ServiceItem />
      </ContentLeft>

      <ContentRight>
        <ServiceItem />
        <ServiceItem />
      </ContentRight>
    </ServicesContent>
  );
}

const ServicesContent = styled.div``;

const ContentLeft = styled.div``;
const ContentRight = styled.div``;

export default ServicesSecond;
