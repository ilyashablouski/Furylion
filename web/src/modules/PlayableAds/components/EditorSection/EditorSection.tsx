import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import Picture from '@/components/Picture';
import { EditorSectionType } from '@/typings/model';
import SkewButton from '@/components/SkewButton';

function EditorSection() {
  const page = useCurrentPage<EditorSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper id={pageFields?.editorId ?? ''}>
      <ContentContainer>
        <Title>{pageFields.editorTitle}</Title>
        <Inner>
          <Left>
            <TextBlock>
              <Text>{pageFields.editorText}</Text>
            </TextBlock>
            <ButtonWrapper>
              <SkewButton
                color="white-dark"
                href={pageFields.editorButtonUrl ?? '#'}
                className="skew-button"
                isNewTab={true}
              >
                {pageFields.editorButtonLabel}
              </SkewButton>
            </ButtonWrapper>
          </Left>

          <Right>
            <Picture
              mobileSmall={convertThumbnailToPictureImage(
                pageFields.editorImage
              )}
            />
          </Right>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  padding: 100px 0;
  background: ${colors.dark};

  ${media.tabletSmallOnly(css`
    padding: 70px 0 231px;
  `)}

  ${media.mobile(css`
    padding: 70px 0 189px;
  `)}
`;

const Inner = styled.div`
  display: flex;

  ${media.mobile(css`
    display: block;
  `)}
`;
const Title = styled.span`
  display: block;
  max-width: 505px;
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
  margin-top: 75px;
  max-width: 423px;

  ${media.tabletSmallOnly(css`
    margin-top: 66px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
  `)}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 14px;
  `)}

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const ButtonWrapper = styled.div`
  margin-top: 100px;
  max-width: 372px;

  ${media.tabletSmall(css`
    margin-top: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 123px;
    max-width: 300px;

    .skew-button {
      font-size: 20px;
      padding: 25px;
    }
  `)}

  ${media.mobile(css`
    bottom: 70px;
  `)}
`;

const Left = styled.div`
  padding-bottom: 22px;
  flex: 1 1 40.15%;
  max-width: 40.15%;

  ${media.tabletSmall(css`
    padding-bottom: 0;
    flex: 1 1 47.1%;
    max-width: 47.1%;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 14px;
  `)}

  ${media.mobile(css`
    max-width: none;
    font-size: 12px;
  `)}
`;

const Right = styled.div`
  margin-left: 27px;
  display: flex;
  align-items: flex-end;
  flex: 1 1 calc(59.85% - 27px);
  max-width: calc(59.85% - 27px);

  img {
    image-rendering: -webkit-optimize-contrast;
  }

  ${media.tabletSmallOnly(css`
    margin-top: 17px;
    margin-left: 33px;
    flex: 1 1 calc(52.9% + 33px);
    max-width: calc(52.9% + 33px);
  `)}

  ${media.mobile(css`
    margin-top: 30px;
    margin-left: 0;
    max-width: none;
  `)}
`;

export default EditorSection;
