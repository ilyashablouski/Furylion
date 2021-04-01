import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ServicesSectionType } from '@/typings/model';
import { media } from '@/utils/mixin';

import ServicesTop from './components/ServicesTop';
import ServicesBottom from './components/ServicesBottom';

function ServicesSection() {
  const page = useCurrentPage<ServicesSectionType>();
  const pageFields = page?.templateFields;
  const sectionTitle = pageFields?.servicesTitle;
  const servicesItems = pageFields?.servicesItems ?? [];
  const servicesBottomItems = pageFields?.servicesBottomItems ?? [];
  return (
    <Wrapper>
      <Title>{sectionTitle}</Title>
      <ServicesWrapper>
        <ServicesTop servicesItems={servicesItems} />
        <ServicesBottom servicesBottomItems={servicesBottomItems} />
      </ServicesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 100px;
  width: 100%;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;

  ${media.tabletSmall(css`
    margin-top: 70px;
  `)}
`;

const ServicesWrapper = styled.div`
  margin-top: 35px;

  ${media.tabletSmall(css`
    margin-top: 26px;
  `)}

  ${media.mobile(css`
    margin-top: 15px;
  `)}
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmall(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

export default ServicesSection;
