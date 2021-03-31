import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { WorksSectionType } from '@/typings/model';
import WorksSwiper from '@/modules/Home/components/WorksSection/components/WorksSwiper';
import { media } from '@/utils/mixin';

function WorksSection() {
  const page = useCurrentPage<WorksSectionType>();
  const pageFields = page?.templateFields;
  const sectionTitle = pageFields?.worksTitle;
  const worksItems = pageFields?.worksItems ?? [];
  return (
    <Wrapper>
      <Title>{sectionTitle}</Title>s
      <WorksSwiper worksItems={worksItems} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 80px;

  ${media.tabletSmallOnly(css`
    margin-top: 70px;
  `)}

  ${media.mobile(css`
    margin-top: 50px;
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

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

export default WorksSection;
