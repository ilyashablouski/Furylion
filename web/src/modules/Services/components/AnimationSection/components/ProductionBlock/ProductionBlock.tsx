import React, { useRef } from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ProductionBlockType } from '@/typings/model';
import { colors } from '@/constants/theme';
import MediaBlock from '@/modules/Services/components/AnimationSection/components/ProductionBlock/components/MediaBlock';

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
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 72px;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;

const TextBlock = styled.div`
  display: flex;
  margin: 0 -12px;
  margin-top: 35px;
`;

const TextItem = styled.div`
  padding: 0 12px;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const MediaWrapper = styled.div`
  margin-top: 72px;
`;
export default ProductionBlock;
