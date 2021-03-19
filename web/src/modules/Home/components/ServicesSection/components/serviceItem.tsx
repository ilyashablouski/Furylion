import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import ContentContainer from '@/components/ContentContainer';
import { ServiceItemType } from '@/typings/model';
import { colors } from '@/constants/theme';

function ServiceItem({
  image,
  title,
  text,
  linkLabel,
  linkUrl,
}: ServiceItemType) {
  return (
    <ItemContent>
      <ContentContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>{text}</ItemText>

        <ItemLink to={linkUrl}>{linkLabel}</ItemLink>
      </ContentContainer>
    </ItemContent>
  );
}
const ItemContent = styled.div``;

const ItemTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
`;

const ItemText = styled.p`
  margin-top: 5px;
  max-width: 352px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`;

const ItemLink = styled(Link)`
  margin-top: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-transform: capitalize;
  color: ${colors.red};
  border-bottom: 1px solid ${colors.red};
  transition: 150ms all ease-in-out;
`;

export default ServiceItem;
