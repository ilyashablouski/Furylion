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
        </ContentContainer>
        <Bottom>
          <Buttons>
            <StyledButton>
              <ButtonLink
                href={pageFields.firstArtButtonFirstUrl ?? '#'}
                variants={['cut-bottom', 'white-red', 'w100']}
                className="cut-button-left"
              >
                {pageFields.firstArtButtonFirstLabel}
              </ButtonLink>
            </StyledButton>

            <StyledButton right>
              <ButtonLink
                href={pageFields.firstArtButtonSecondUrl ?? '#'}
                variants={['cut-top', 'red', 'w100']}
                className="cut-button-right"
              >
                {pageFields.firstArtButtonSecondLabel}
              </ButtonLink>
            </StyledButton>
          </Buttons>
        </Bottom>
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

  ${media.tablet(css`
    flex-direction: column;
  `)}

  ${media.tablet(css`
    padding-bottom: 70px;
  `)}
`;

const Left = styled.div`
  margin-top: 100px;
  ${media.tablet(css`
    margin-top: 0;
    order: 2;
  `)}

  ${ContentContainer} {
    padding-right: 0;

    ${media.tablet(css`
      padding-right: 68px;
    `)}

    ${media.tabletSmallOnly(css`
      padding-right: 40px;
    `)}

    ${media.mobile(css`
      padding-right: 20px;
    `)}
  }
`;
const Right = styled.div`
  max-width: 673px;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0 100%);

  ${media.tablet(css`
    order: 1;
    max-width: none;
    clip-path: polygon(57% 0, 100% 0, 100% 100%, 0 100%);
  `)}

  ${media.mobile(css`
    clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0% 29%);
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    position: absolute;
    top: 85px;
    left: auto;
    right: auto;
    font-size: 56px;
  `)}

  ${media.mobile(css`
    top: 50px;
    font-size: 32px;
  `)}
`;
const TextContainer = styled.div`
  margin-top: 35px;
  margin-right: -173px;

  ${media.tablet(css`
    margin-top: 40px;
    margin-right: 0;
  `)}
`;
const TextInner = styled.div`
  margin-top: 25px;
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  ${media.tablet(css`
    margin-top: 20px;
    margin-left: -10px;
    margin-right: -10px;
  `)}

  ${media.mobile(css`
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 15px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tablet(css`
    padding: 0 10px;
  `)}

  ${media.mobile(css`
    max-width: none;

    &:not(:first-child) {
      margin-top: 20px;
    }
  `)}
`;

const Text = styled.p`
  max-width: 742px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const AdditionalBlock = styled.div`
  margin-top: 70px;

  ${media.tablet(css`
    margin-top: 40px;
  `)}
`;
const AdditionalTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 20px;
  `)}
`;

const AdditionalText = styled.div`
  max-width: 631px;
  font-weight: normal;
  font-size: 14px;
  line-height: 187.5%;
  color: ${colors.white};

  ${media.mobile(css`
    margin-top: 5px;
    font-size: 12px;
  `)}
`;

const Bottom = styled.div`
  margin-top: 68px;
  display: flex;
  justify-content: flex-start;

  ${media.tablet(css`
    margin-top: 40px;
    justify-content: center;
  `)}

  .cut-button-left {
    ${media.tabletSmallOnly(css`
      padding: 25px 35px 25px 24px;
      font-size: 20px;
    `)}
  }

  .cut-button-right {
    ${media.tabletSmallOnly(css`
      padding: 25px 24px 25px 35px;
      font-size: 20px;
    `)}
  }
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
