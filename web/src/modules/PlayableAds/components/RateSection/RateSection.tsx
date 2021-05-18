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
    <Wrapper id="playableRate">
      <ContentContainer>
        <Title>{pageFields.rateMainTitle}</Title>

        <TextBlock>
          <Text>{pageFields.rateText}</Text>
        </TextBlock>

        <Inner>
          <InnerItems>
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
          </InnerItems>

          <ButtonWrapper>
            <CurveButton
              href={pageFields.rateButtonUrl}
              label={pageFields.rateButtonLabel}
              variants={['curve', 'curve-red', 'w100']}
              isNewTab={true}
            />
          </ButtonWrapper>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.dark};

  ${media.tabletSmall(css`
    padding: 70px 0;
  `)}
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

  ${media.tabletSmall(css`
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const Inner = styled.div`
  margin: 50px auto 0;
  max-width: 940px;

  ${media.tabletSmall(css`
    margin-top: 40px;
    max-width: none;
  `)}

  ${media.mobile(css`
    margin-top: 50px;
  `)}
`;

const InnerItems = styled.div`
  ${media.tabletSmall(css`
    margin: 0 auto;
    max-width: 597px;
  `)}
`;

const Items = styled.div`
  margin: 0 -35px;
  display: flex;
  justify-content: space-between;

  ${media.mobile(css`
    margin: 0;
    display: block;
  `)}
`;

const ItemText = styled.span<{ isGray?: boolean }>`
  margin-top: 37px;
  display: block;
  font-weight: 900;
  font-size: 120px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    margin-top: 42px;
    font-size: 100px;
  `)}

  ${media.mobile(css`
    margin-top: 11px;
    font-size: 60px;
  `)}

  ${(props) =>
    props.isGray &&
    css`
      font-weight: 200;
      line-height: 130%;
      color: #8c8b89;
    `}

  ${(props) =>
    !props.isGray &&
    css`
      ${media.mobile(css`
        font-size: 96px;
      `)}
    `}
`;

const Item = styled.div`
  padding: 0 35px;

  ${media.mobile(css`
    padding: 0;
    text-align: center;

    &:not(:first-child) {
      margin-top: 50px;

      ${ItemText} {
        margin-top: 5px;
      }
    }
  `)}
`;

const ItemTitle = styled.span<{ isGray?: boolean }>`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 28px;
  `)}

  ${media.mobile(css`
    font-size: 24px;
  `)}

  ${(props) =>
    props.isGray &&
    css`
      color: #8c8b89;
    `}
`;

const ButtonWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: flex-end;

  ${media.tabletSmallOnly(css`
    margin-top: 30px;
  `)}

  ${media.mobile(css`
    margin-top: 43px;
    justify-content: center;
  `)}
`;

export default RateSection;
