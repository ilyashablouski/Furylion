import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { ButtonLink } from '@/components/Button';
import useCurrentPage from '@/hooks/useCurrentPage';
import { PortingBlockType } from '@/typings/model';
import Picture from '@/components/Picture';

function PortingBlock() {
  const page = useCurrentPage<PortingBlockType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Container>
      <ContentContainer>
        <Title>{pageFields.portingTitle}</Title>

        <Inner>
          <BlockItem>
            <TextContainer>
              <Text>{pageFields.portingText1}</Text>
              <TextInner>
                <TextItem>
                  <Text>{pageFields.portingText2}</Text>
                </TextItem>
                <TextItem>
                  <Text>{pageFields.portingText3}</Text>
                </TextItem>
              </TextInner>
            </TextContainer>

            <ButtonsWrapper>
              <Buttons>
                <StyledButton>
                  <ButtonLink
                    href={pageFields.portingButtonFirstUrl ?? '#'}
                    variants={['cut-bottom', 'white-red', 'w100']}
                    className="cut-button-left"
                    target={
                      pageFields.portingButtonFirstIsNewTab
                        ? '_blank'
                        : undefined
                    }
                  >
                    {pageFields.portingButtonFirstLabel}
                  </ButtonLink>
                </StyledButton>

                <StyledButton right>
                  <ButtonLink
                    href={pageFields.portingButtonSecondUrl ?? '#'}
                    variants={['cut-top', 'red', 'w100']}
                    className="cut-button-right"
                    target={
                      pageFields.portingButtonSecondIsNewTab
                        ? '_blank'
                        : undefined
                    }
                  >
                    {pageFields.portingButtonSecondLabel}
                  </ButtonLink>
                </StyledButton>
              </Buttons>
            </ButtonsWrapper>
          </BlockItem>

          <BlockItem>
            <Picture
              loading={'lazy'}
              mobileSmall={convertThumbnailToPictureImage(
                pageFields.portingImage
              )}
            />
          </BlockItem>
        </Inner>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 120px;

  ${media.tabletSmallOnly(css`
    margin-top: 100px;
  `)}
  ${media.mobile(css`
    margin-top: 60px;
  `)}
`;

const Inner = styled.div`
  margin-top: 35px;
  margin-left: -14px;
  margin-right: -14px;
  display: flex;

  ${media.tabletSmall(css`
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}
  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const BlockItem = styled.div`
  padding: 0 14px;

  ${media.tabletSmall(css`
    margin: 0 auto;
    padding: 0;
  `)}
  &:first-child {
    flex: 1 1 calc(597px + 28px);
    max-width: calc(597px + 28px);

    ${media.tabletSmall(css`
      order: 2;
      flex: 1 1 auto;
      max-width: none;
    `)}
  }

  &:last-child {
    flex: 1 1 calc(605px + 28px);
    max-width: calc(605px + 28px);

    ${media.tabletSmall(css`
      order: 1;
      flex: 1 1 auto;
    `)}
  }
`;

const Title = styled.div`
  display: block;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    text-align: center;
    font-size: 56px;
  `)}
  ${media.mobile(css`
    text-align: left;
    font-size: 32px;
  `)}
`;

const TextContainer = styled.div`
  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}
  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;
const TextInner = styled.div`
  margin-top: 65px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;

  ${media.tabletSmall(css`
    margin-top: 20px;
  `)}

  ${media.mobile(css`
    margin-top: 0;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 10px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.mobile(css`
    margin-top: 20px;
    max-width: none;
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

const ButtonsWrapper = styled.div`
  margin-top: 65px;

  ${media.tabletSmall(css`
    margin-top: 40px;
    display: flex;
    justify-content: center;
  `)}
  ${media.mobile(css`
    margin-top: 30px;
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

export default PortingBlock;
