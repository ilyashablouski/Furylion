import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { FirstArtSectionType } from '@/typings/model';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import ArtSwiper from '@/modules/Services/components/ArtSwiper';
import { ButtonLink } from '@/components/Button';

function FirstArtSection() {
  const sliderPaginationRef1 = useRef<HTMLInputElement>(null);

  const page = useCurrentPage<FirstArtSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <Left>
        <ContentContainer>
          <Title>{pageFields.firstArtTitle}</Title>
          <TextContainer>
            <Text>{pageFields.firstArtText1}</Text>
            <TextInner>
              <TextItem>
                <Text>{pageFields.firstArtText2}</Text>
              </TextItem>
              <TextItem>
                <Text>{pageFields.firstArtText3}</Text>
              </TextItem>
            </TextInner>
          </TextContainer>

          <AdditionalBlock>
            <AdditionalTitle>Technology stack:</AdditionalTitle>
            <AdditionalText
              dangerouslySetInnerHTML={{
                __html: pageFields.firstArtTextAdditional ?? '',
              }}
            />
          </AdditionalBlock>
          <Bottom>
            <Buttons>
              <StyledButton>
                <ButtonLink
                  href={pageFields.firstArtButtonFirstUrl ?? '#'}
                  variants={['cut-bottom', 'white-red', 'w100']}
                >
                  {pageFields.firstArtButtonFirstLabel}
                </ButtonLink>
              </StyledButton>

              <StyledButton right>
                <ButtonLink
                  href={pageFields.firstArtButtonSecondUrl ?? '#'}
                  variants={['cut-top', 'red', 'w100']}
                >
                  {pageFields.firstArtButtonSecondLabel}
                </ButtonLink>
              </StyledButton>
            </Buttons>
          </Bottom>
        </ContentContainer>
      </Left>
      <Right>
        <ArtSwiper
          images={pageFields.firstArtImages}
          sliderPaginationRef={sliderPaginationRef1}
        />
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  min-height: 750px;
  display: flex;
`;

const Left = styled.div`
  margin-top: 100px;

  ${ContentContainer} {
    padding-right: 0;
  }
`;
const Right = styled.div`
  max-width: 673px;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;
const TextContainer = styled.div`
  margin-top: 35px;
  margin-right: -140px;
`;
const TextInner = styled.div`
  margin-top: 25px;
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
`;

const TextItem = styled.div`
  padding: 0 15px;
  flex: 1 1 50%;
  max-width: 50%;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const AdditionalBlock = styled.div`
  margin-top: 70px;
`;
const AdditionalTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};
`;

const AdditionalText = styled.div`
  max-width: 631px;
  font-weight: normal;
  font-size: 14px;
  line-height: 187.5%;
  color: ${colors.white};
`;

const Bottom = styled.div`
  margin-top: 68px;
  display: flex;
  justify-content: flex-start;
`;

//TODO: Refactoring Cut Buttons in common component
const Buttons = styled.div`
  display: inline-flex;

  ${media.mobile576(css`
    width: 100%;
  `)}
`;

const StyledButton = styled.div<{ right?: boolean }>`
  flex: 0 0 265px;
  max-width: 265px;
  margin-left: ${(props) => (props.right ? '-3%' : '0')};
  margin-right: ${(props) => (props.right ? '0' : '-3%')};

  ${media.tabletSmallOnly(css`
    flex: 0 0 186px;
    max-width: 186px;
  `)}

  ${media.mobile(css`
    flex: 0 0 195px;
    max-width: 195px;
  `)}

  ${media.mobile576(css`
    flex: auto;
    max-width: none;
  `)}
`;

export default FirstArtSection;
