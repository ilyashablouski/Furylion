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
                  >
                    {pageFields.portingButtonFirstLabel}
                  </ButtonLink>
                </StyledButton>

                <StyledButton right>
                  <ButtonLink
                    href={pageFields.portingButtonSecondUrl ?? '#'}
                    variants={['cut-top', 'red', 'w100']}
                  >
                    {pageFields.portingButtonSecondLabel}
                  </ButtonLink>
                </StyledButton>
              </Buttons>
            </ButtonsWrapper>
          </BlockItem>

          <BlockItem>
            <ImageContainer>
              <Picture
                mobileSmall={convertThumbnailToPictureImage(
                  pageFields.portingImage
                )}
              />
            </ImageContainer>
          </BlockItem>
        </Inner>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 120px;
`;

const Inner = styled.div`
  margin-top: 35px;
  margin-left: -14px;
  margin-right: -14px;
  display: flex;
`;

const BlockItem = styled.div`
  padding: 0 14px;

  &:first-child {
    flex: 1 1 calc(597px + 28px);
    max-width: calc(597px + 28px);
  }

  &:last-child {
    flex: 1 1 calc(605px + 28px);
    max-width: calc(605px + 28px);
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};
`;

const TextContainer = styled.div`
  margin-top: 35px;
`;
const TextInner = styled.div`
  margin-top: 65px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
`;

const TextItem = styled.div`
  padding: 0 10px;
  flex: 1 1 50%;
  max-width: 50%;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const ButtonsWrapper = styled.div`
  margin-top: 65px;
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

const ImageContainer = styled.div``;

export default PortingBlock;
