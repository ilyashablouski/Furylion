import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import Picture from '@/components/Picture';
import { EditorSectionType } from '@/typings/model';
import { ButtonLink } from '@/components/Button';

function EditorSection() {
  const page = useCurrentPage<EditorSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <ContentContainer>
        <Inner>
          <Left>
            <Title>{pageFields.editorTitle}</Title>

            <TextBlock>
              <Text>{pageFields.editorText}</Text>
            </TextBlock>
            <ButtonWrapper>
              <ButtonLink
                variants={['white-dark', 'w100']}
                href={pageFields.editorButtonUrl ?? '#'}
              >
                {pageFields.editorButtonLabel}
              </ButtonLink>
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
export default EditorSection;

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.dark};
`;

const Inner = styled.div`
  display: flex;
`;
const Title = styled.span`
  display: block;
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
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  color: ${colors.white};
`;

const ButtonWrapper = styled.div`
  margin-top: 100px;
  max-width: 388px;
`;

const Left = styled.div`
  flex: 1 1 40.15%;
  max-width: 40.15%;
`;

const Right = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: flex-end;
  flex: 1 1 calc(59.85% - 24px);
  max-width: calc(59.85% - 24px);
`;
