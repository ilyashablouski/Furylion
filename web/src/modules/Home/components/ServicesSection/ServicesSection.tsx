import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ServicesSectionType } from '@/typings/model';

import ServicesTop from './components/ServicesTop';
import ServicesBottom from './components/ServicesBottom';

function ServicesSection() {
  const page = useCurrentPage<ServicesSectionType>();
  const pageFields = page?.templateFields;
  const sectionTitle = pageFields?.servicesTitle;
  const servicesItems = pageFields?.servicesItems ?? [];
  return (
    <WrapperSection>
      <Title>{sectionTitle}</Title>
      <ServicesWrapper>
        <ServicesTop servicesItems={servicesItems} />
        <ServicesBottom servicesItems={servicesItems} />
      </ServicesWrapper>
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  margin-top: 100px;
`;

const ServicesWrapper = styled.div`
  margin-top: 35px;
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
