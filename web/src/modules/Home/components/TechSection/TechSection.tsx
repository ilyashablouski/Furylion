import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { TechSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';

import TechLeft from './components/TechLeft';
import TechRight from './components/TechRight';

function TechSection() {
  const page = useCurrentPage<TechSectionType>();
  const pageFields = page?.templateFields;

  const leftBlockProps = {
    image: pageFields?.technologiesImage,
    imageMobile: pageFields?.technologiesMobileImage,
  };

  const rightBlockProps = {
    title: pageFields?.technologiesTitle,
    text: pageFields?.technologiesText,
    logos: pageFields?.technologiesLogos,
    addText: pageFields?.technologiesTextAdditional,
    btnFirstLabel: pageFields?.technologiesButtonFirstLabel,
    btnFirstUrl: pageFields?.technologiesButtonFirstUrl,
    btnSecondLabel: pageFields?.technologiesButtonSecondLabel,
    btnSecondUrl: pageFields?.technologiesButtonSecondUrl,
  };

  return (
    <Wrapper>
      <TechLeft
        image={leftBlockProps.image}
        imageMobile={leftBlockProps.imageMobile}
      />
      <TechRight data={rightBlockProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
  height: 750px;
  min-height: 750px;
  color: ${colors.white};
  overflow: hidden;
`;

export default TechSection;
