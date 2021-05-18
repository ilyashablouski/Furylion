import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import SkewButton from '@/components/SkewButton';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ReengagementSectionType } from '@/typings/model';

function ReengagementSection() {
  const page = useCurrentPage<ReengagementSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper id={pageFields?.reengagementId ?? ''}>
      <ContentContainer>
        <Title>{pageFields.reengagementTitle}</Title>

        <TextContainer>
          <TextItem>
            <Text>{pageFields.reengagementText1}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.reengagementText2}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.reengagementText3}</Text>
          </TextItem>
        </TextContainer>

        <ButtonWrapper>
          <SkewButton
            href={pageFields.reengagementButtonUrl}
            color="dark"
            isNewTab={true}
          >
            {pageFields.reengagementButtonLabel}
          </SkewButton>
        </ButtonWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.white};

  ${media.tabletSmall(css`
    padding: 70px 0;
  `)}
`;
const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.red};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
    text-align: left;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const TextContainer = styled.div`
  margin: 35px -14px 0;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin: 40px -10px 0;
    flex-wrap: wrap;
  `)}

  ${media.mobile(css`
    margin: 30px 0 0;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 14px;
  flex: 1 1 33.33%;
  max-width: 33.33%;

  ${media.tabletSmall(css`
    &:first-child {
      margin-top: 0;
      flex: 1 1 100%;
      max-width: 100%;
    }
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 20px;
    padding: 0 10px;
    flex: 1 1 50%;
    max-width: 50%;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
    padding: 0;
    display: block;
    max-width: none;
  `)}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.dark};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const ButtonWrapper = styled.div`
  margin: 72px auto 0;
  max-width: 377px;

  ${media.tabletSmallOnly(css`
    margin-top: 41px;
  `)}

  ${media.mobile(css`
    margin-top: 31px;
    max-width: 302px;
  `)}
`;

export default ReengagementSection;
