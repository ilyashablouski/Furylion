import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { SecondArtSectionType } from '@/typings/model';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import ArtSwiper from '@/modules/Services/components/ArtSwiper';
import { ButtonLink } from '@/components/Button';

function SecondArtSection() {
  const sliderPaginationRef2 = useRef<HTMLInputElement>(null);

  const page = useCurrentPage<SecondArtSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <Left>
        <ArtSwiper
          images={pageFields.secondArtImages}
          sliderPaginationRef={sliderPaginationRef2}
          isRightSide={false}
        />
      </Left>
      <Right>
        <ContentContainer>
          <Title>{pageFields.secondArtTitle}</Title>
          <TextContainer>
            <Text>{pageFields.secondArtText1}</Text>
            <TextInner>
              <TextItem>
                <Text>{pageFields.secondArtText2}</Text>
              </TextItem>
              <TextItem>
                <Text>{pageFields.secondArtText3}</Text>
              </TextItem>
            </TextInner>
          </TextContainer>

          <AdditionalBlock>
            <AdditionalTitle>Technology stack:</AdditionalTitle>
            <AdditionalText
              dangerouslySetInnerHTML={{
                __html: pageFields.secondArtTextAdditional ?? '',
              }}
            />
          </AdditionalBlock>
          <Bottom>
            <Buttons>
              <StyledButton>
                <ButtonLink
                  href={pageFields.secondArtButtonFirstUrl ?? '#'}
                  variants={['cut-bottom', 'white-dark', 'w100']}
                >
                  {pageFields.secondArtButtonFirstLabel}
                </ButtonLink>
              </StyledButton>

              <StyledButton right>
                <ButtonLink
                  href={pageFields.secondArtButtonSecondUrl ?? '#'}
                  variants={['cut-top', 'dark', 'w100']}
                >
                  {pageFields.secondArtButtonSecondLabel}
                </ButtonLink>
              </StyledButton>
            </Buttons>
          </Bottom>
        </ContentContainer>
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
  background: ${colors.red};
`;

const Left = styled.div`
  max-width: 673px;
  clip-path: polygon(0 0, 35% 0, 100% 100%, 0% 100%);
`;

const Right = styled.div`
  margin-top: 100px;

  ${ContentContainer} {
    padding-left: 0;
  }
`;

const Title = styled.span`
  margin-left: -140px;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;
const TextContainer = styled.div`
  margin-top: 35px;
  margin-left: -180px;
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
  justify-content: flex-end;
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

export default SecondArtSection;
