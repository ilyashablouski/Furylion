import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import ContentContainer from '@/components/ContentContainer';
import { ServiceItemType } from '@/typings/model';
import { colors } from '@/constants/theme';
import Picture from '@/components/Picture';

interface Props extends ServiceItemType {
  className?: string;
}

function ServiceItem({
  image,
  title,
  text,
  linkLabel,
  linkUrl,
  className,
}: Props) {
  return (
    <>
      <ImageContainer>
        <Picture
          mobileSmall={{
            src: image?.url,
            src2x: image?.url_2x,
            webp: image?.url_webp,
            webp2x: image?.url_webp_2x,
          }}
          className="item-image-container"
        />
      </ImageContainer>

      <ItemInfo className={className}>
        <ContentContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemText>{text}</ItemText>
          <ItemLink to={linkUrl}>{linkLabel}</ItemLink>
        </ContentContainer>
      </ItemInfo>
    </>
  );
}

const ImageContainer = styled.div`
  .item-image-container {
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemInfo = styled.div`
  position: absolute;
  bottom: 35px;
  width: 100%;
  max-width: 77%;
  color: #fff;
  z-index: 2;
`;

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
