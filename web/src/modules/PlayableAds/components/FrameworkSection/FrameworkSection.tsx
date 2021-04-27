import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { FrameworkSectionType } from '@/typings/model';
import CurveButton from '@/components/CurveButton';

import FrameworkItem from './components/FrameworkItem';

function FrameworkSection() {
  const page = useCurrentPage<FrameworkSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.frameworkTitle}</Title>

        <TextBlock>
          <Text>{pageFields.frameworkText}</Text>
        </TextBlock>

        <Inner>
          <Items>
            {pageFields.frameworkItems.length > 0
              ? pageFields.frameworkItems.map((frameworkItem) => (
                  <Item>
                    <FrameworkItem
                      title={frameworkItem.title}
                      topText={frameworkItem.topText}
                      bottomText={frameworkItem.bottomText}
                    />
                  </Item>
                ))
              : null}
          </Items>
        </Inner>

        <ButtonWrapper>
          <CurveButton
            href={pageFields.frameworkButtonUrl}
            label={pageFields.frameworkButtonLabel}
            variants={['curve', 'curve-white', 'w100']}
          />
        </ButtonWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.dark};
`;
const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const TextBlock = styled.div`
  margin-top: 35px;
  max-width: 601px;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  color: ${colors.white};
`;

const Inner = styled.div`
  margin-top: 50px;
`;

const Items = styled.div`
  margin: 0 -10px;
  display: flex;
`;
const Item = styled.div`
  padding: 0 10px;
  flex: 1 1 25%;
  max-width: 25%;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export default FrameworkSection;
