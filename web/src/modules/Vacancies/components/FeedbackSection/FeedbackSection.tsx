import React from 'react';
import styled, { css } from 'styled-components';

import FeedbackBlock from '@/components/FeedbackBlock';
import useSettingItem from '@/hooks/useSettingItem';
import ContentContainer from '@/components/ContentContainer';
import { media } from '@/utils/mixin';

function FeedbackSection() {
  const formTitle = useSettingItem('FORM_TITLE');
  return (
    <Wrapper>
      <FeedbackBlock className="about-title--small" formTitle={formTitle} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 120px;

  ${media.tabletSmall(css`
    margin-top: 70px;
  `)}}
  
  ${ContentContainer} {
    max-width: 1920px;
  }
`;

export default FeedbackSection;
