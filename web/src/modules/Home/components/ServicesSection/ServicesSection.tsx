import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ServicesSectionType } from '@/typings/model';

import ServicesFirst from './components/ServicesFirst';
import ServicesSecond from './components/ServicesSecond';

function ServicesSection() {
  const page = useCurrentPage<ServicesSectionType>();
  const pageFields = page?.templateFields;
  const sectionTitle = pageFields?.servicesTitle;
  const servicesItems = pageFields?.servicesItems ?? [];
  return (
    <WrapperSection>
      <Title>{sectionTitle}</Title>

      <ServicesFirst servicesItems={servicesItems} />
      {/*<ServicesSecond servicesItems={servicesItems} />*/}
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  margin-top: 100px;
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
`;

export default ServicesSection;
