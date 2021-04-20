import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ProductionBlockType } from '@/typings/model';
import { colors } from '@/constants/theme';
import MediaBlock from '@/modules/Services/components/AnimationSection/components/ProductionBlock/components/MediaBlock';
import { ButtonLink } from '@/components/Button';
import { media } from '@/utils/mixin';

function ProductionBlock() {
  const page = useCurrentPage<ProductionBlockType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Container>
      <ContentContainer>
        <Title>{pageFields.productionTitle}</Title>
        <TextBlock>
          <TextItem>
            <Text>{pageFields.productionText1}</Text>
          </TextItem>

          <TextItem>
            <Text>{pageFields.productionText2}</Text>
          </TextItem>
        </TextBlock>

        <MediaWrapper>
          <MediaBlock mediaInfo={pageFields.productionMediaTop} />
          <MediaBlock
            mediaInfo={pageFields.productionMediaBottom}
            isTop={false}
          />
        </MediaWrapper>
        <Bottom>
          <Buttons>
            <StyledButton>
              <ButtonLink
                href={pageFields.productionButtonFirstUrl ?? '#'}
                variants={['cut-bottom', 'white-red', 'w100']}
                className="cut-button-left"
              >
                {pageFields.productionButtonFirstLabel}
              </ButtonLink>
            </StyledButton>

            <StyledButton right>
              <ButtonLink
                href={pageFields.productionButtonSecondUrl ?? '#'}
                variants={['cut-top', 'red', 'w100']}
                className="cut-button-right"
              >
                {pageFields.productionButtonSecondLabel}
              </ButtonLink>
            </StyledButton>
          </Buttons>
        </Bottom>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 81px;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 50px;
  `)}

  ${media.mobile(css`
    margin-top: 40px;
    font-size: 24px;
  `)}
`;

const TextBlock = styled.div`
  margin: 35px -10px 0;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 12px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmallOnly(css``)}

  ${media.mobile(css`
    padding: 0;
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

const MediaWrapper = styled.div`
  margin-top: 94px;

  ${media.tablet(css`
    margin-top: 25px;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const Bottom = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;

  ${media.tablet(css`
    margin-top: 40px;
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
export default ProductionBlock;
