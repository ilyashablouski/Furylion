import React from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { TechSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

import TechLeft from './components/TechLeft';
import TechRight from './components/TechRight';

function TechSection() {
  const page = useCurrentPage<TechSectionType>();

  if (!page) return null;

  const pageFields = page.templateFields;

  const leftBlockProps = {
    image: pageFields.technologiesImage,
    imageMobile: pageFields.technologiesMobileImage,
  };

  const rightBlockProps = {
    title: pageFields.technologiesTitle,
    text: pageFields.technologiesText,
    logos: pageFields.technologiesLogos,
    addText: pageFields.technologiesTextAdditional,
    btnFirstLabel: pageFields.technologiesButtonFirstLabel,
    btnFirstIsNewTab: pageFields.technologiesButtonFirstIsNewTab,
    btnSecondIsNewTab: pageFields.technologiesButtonSecondIsNewTab,
    btnFirstUrl: pageFields.technologiesButtonFirstUrl,
    btnSecondLabel: pageFields.technologiesButtonSecondLabel,
    btnSecondUrl: pageFields.technologiesButtonSecondUrl,
  };

  return (
    <Wrapper id={pageFields?.technologiesId ?? ''}>
      <TechLeft
        image={leftBlockProps.image}
        imageMobile={leftBlockProps.imageMobile}
      />
      <TechRight data={rightBlockProps} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin-top: 20px;
  width: 100%;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  height: 750px;
  min-height: 750px;
  color: ${colors.white};
  overflow: hidden;

  ${media.tabletSmallOnly(css`
    margin-top: 0;
    height: 663px;
    min-height: 663px;
  `)}

  ${media.mobile(css`
    margin-top: 45px;
    height: 626px;
    min-height: 626px;
  `)}
`;

export default TechSection;
