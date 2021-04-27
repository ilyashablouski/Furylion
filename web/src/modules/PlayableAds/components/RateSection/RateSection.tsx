import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { RateSectionType } from '@/typings/model';
import CurveButton from '@/components/CurveButton';

function RateSection() {
  const page = useCurrentPage<RateSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.rateMainTitle}</Title>

        <TextBlock>
          <Text>{pageFields.rateText}</Text>
        </TextBlock>

        <Inner>
          <Items>
            <Item>
              <ItemTitle isGray>{pageFields.rateLeftTitle}</ItemTitle>

              <ItemText isGray>{pageFields.rateLeftText}</ItemText>
            </Item>

            <Item>
              <ItemTitle>{pageFields.rateRightTitle}</ItemTitle>

              <ItemText>{pageFields.rateRightText}</ItemText>
            </Item>
          </Items>

          <ButtonWrapper>
            <CurveButton
              href={pageFields.rateButtonUrl}
              label={pageFields.rateButtonLabel}
              variants={['curve', 'curve-red', 'w100']}
            />
          </ButtonWrapper>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

export default RateSection;

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.dark};
`;
const Title = styled.span`
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
  max-width: 605px;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const Inner = styled.div`
  margin: 50px auto 0;
  max-width: 940px;
`;

const Items = styled.div`
  margin: 0 -35px;
  display: flex;
`;

const Item = styled.div`
  padding: 0 35px;
  flex: 1 1 50%;
  max-width: 50%;
`;

const ItemTitle = styled.span<{ isGray?: boolean }>`
  display: block;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${(props) =>
    props.isGray &&
    css`
      color: #8c8b89;
    `}
`;

const ItemText = styled.span<{ isGray?: boolean }>`
  display: block;
  font-weight: 900;
  font-size: 120px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${(props) =>
    props.isGray &&
    css`
      font-weight: 200;
      font-size: 120px;
      line-height: 130%;
      color: #8c8b89;
    `}
`;

const ButtonWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: flex-end;
`;
