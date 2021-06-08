import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { SecondArtSectionType } from '@/typings/model';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import ArtSwiper2 from '@/modules/Services/components/ArtSwiper2';
import { ButtonLink } from '@/components/Button';

function SecondArtSection() {
  const page = useCurrentPage<SecondArtSectionType>();

  const vectorRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tw: gsap.core.Tween;
    const delayedCall = gsap.delayedCall(0, () => {
      if (!vectorRef.current) return null;

      let left: gsap.TweenValue | undefined;

      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          left = '63%';
        },
        '(max-width: 1259px)': function () {
          left = '49%';
        },
        '(max-width: 1024px)': function () {
          left = '60%';
        },
        '(max-width: 768px)': function () {
          left = '-154%';
        },
        '(max-width: 414px)': function () {
          left = '-167%';
        },
      });

      tw = gsap.to(vectorRef.current, {
        left: left,
        scrollTrigger: {
          start: 'center 100%',
          end: '70% 70%',
          trigger: vectorRef.current,
          scrub: true,
        },
      });
    });

    return () => {
      delayedCall.kill();
      tw?.kill();
    };
  }, []);

  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper id={pageFields?.secondArtId ?? ''}>
      <Left ref={blockRef}>
        <Vector ref={vectorRef} />
        <ArtSwiper2 images={pageFields.secondArtImages} isRightSide={false} />
      </Left>
      <Right>
        <ContentContainer>
          <Title>{pageFields.secondArtTitle}</Title>
          <TextContainer>
            {pageFields.secondArtTitle1 ? (
              <AdditionalTitle>{pageFields.secondArtTitle1}</AdditionalTitle>
            ) : null}
            <Text>{pageFields.secondArtText1}</Text>
            <TextInner>
              <TextItem>
                {pageFields.secondArtTitle2 ? (
                  <AdditionalTitle>
                    {pageFields.secondArtTitle2}
                  </AdditionalTitle>
                ) : null}

                <Text>{pageFields.secondArtText2}</Text>
              </TextItem>
              <TextItem>
                {pageFields.secondArtTitle3 ? (
                  <AdditionalTitle>
                    {pageFields.secondArtTitle3}
                  </AdditionalTitle>
                ) : null}
                <Text>{pageFields.secondArtText3}</Text>
              </TextItem>
            </TextInner>
          </TextContainer>

          <AdditionalBlock>
            <AdditionalTitle>
              {pageFields.secondArtTitleAdditional}
            </AdditionalTitle>
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
                  className="cut-button-left"
                  target="_blank"
                >
                  {pageFields.secondArtButtonFirstLabel}
                </ButtonLink>
              </StyledButton>

              <StyledButton right>
                <ButtonLink
                  href={pageFields.secondArtButtonSecondUrl ?? '#'}
                  variants={['cut-top', 'dark', 'w100']}
                  className="cut-button-right"
                  target="_blank"
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
  overflow: hidden;

  ${media.tablet(css`
    flex-direction: column;
  `)}

  ${media.tablet(css`
    padding-bottom: 70px;
  `)}
`;

const Vector = styled.span`
  display: block;
  position: absolute;
  width: 140%;
  height: 200%;
  top: -74%;
  left: -7%;
  right: 0;
  bottom: 0;
  background: ${colors.red};
  z-index: 10;
  transform: rotate(-30deg);

  ${media.tablet(css`
    height: 223%;
    top: -134%;
    left: -8%;
    width: 130%;
    transform: rotate(-44deg);
  `)}

  ${media.tabletSmall(css`
    height: 232%;
    width: 140%;
    transform: rotate(51.5deg);
  `)}

  ${media.mobile(css`
    height: 223%;
    top: -75%;
    left: -93%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(36deg);
  `)}
`;

const Left = styled.div`
  position: relative;
  flex: 0 0 673px;
  max-width: 673px;
  overflow: hidden;
  //clip-path: polygon(0 0, 35% 0, 100% 100%, 0% 100%);

  ${media.tablet(css`
    max-width: none;
  `)}

  ${media.mobile(css`
    //clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0% 29%);
  `)}
`;

const Right = styled.div`
  margin-top: 100px;

  ${media.tablet(css`
    margin-top: 0;
  `)}
  ${ContentContainer} {
    padding-left: 0;

    ${media.tablet(css`
      padding-left: 68px;
    `)}

    ${media.tabletSmallOnly(css`
      padding-left: 40px;
    `)}

    ${media.mobile(css`
      padding-left: 20px;
    `)}
`;

const Title = styled.span`
  margin-left: -180px;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
  position: relative;
  z-index: 10;

  ${media.tablet(css`
    margin-left: 0;
    position: absolute;
    top: 85px;
    left: auto;
    right: 68px;
    font-size: 56px;
  `)}

  ${media.tabletSmallOnly(css`
    right: 40px;
  `)}

  ${media.mobile(css`
    top: 50px;
    left: auto;
    right: auto;
    font-size: 32px;
  `)}
`;
const TextContainer = styled.div`
  margin-top: 35px;
  margin-left: -180px;
  position: relative;
  z-index: 12;

  ${media.tablet(css`
    margin-top: 40px;
    margin-left: 0;
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
  position: relative;
  z-index: 12;

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
  justify-content: flex-end;

  ${media.tablet(css`
    margin-top: 40px;
    justify-content: center;
  `)}
  ${media.mobile(css`
    margin-left: -20px;
    margin-right: -20px;
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

export default SecondArtSection;
