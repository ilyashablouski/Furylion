import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { ServicesSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';

import TechLeft from './components/TechLeft';
import TechRight from './components/TechRight';

function TechSection() {
  // const page = useCurrentPage<TechSectionType>();
  return (
    <WrapperSection>
      <TechLeft></TechLeft>
      <TechRight></TechRight>
    </WrapperSection>
  );
}

const WrapperSection = styled.div`
  position: relative;
  margin-top: 20px;
  height: 750px;
  min-height: 750px;
  color: ${colors.white};
  overflow: hidden;
`;

export default TechSection;
