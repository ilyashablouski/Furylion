import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import useCurrentPage from '@/hooks/useCurrentPage';
import { WorksSectionType } from '@/typings/model';
import WorksSwiper from '@/modules/Home/components/WorksSection/components/WorksSwiper';

function WorksSection() {
  const page = useCurrentPage<WorksSectionType>();
  const pageFields = page?.templateFields;
  const sectionTitle = pageFields?.worksTitle;
  const worksItems = pageFields?.worksItems ?? [];
  return (
    <WrapperSection>
      <Title>{sectionTitle}</Title>

      <WorksSwiper worksItems={worksItems} />
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  margin-top: 80px;
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

export default WorksSection;
