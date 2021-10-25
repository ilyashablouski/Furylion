import React from 'react';
import styled, { css } from 'styled-components';

import { ThumbnailType } from '@tager/web-modules';

import Picture from '@/components/Picture';
import { media } from '@/utils/mixin';

function ProjectsCard({ url, url_2x }: ThumbnailType) {
  return (
    <Component>
      <Image src={url} src2x={url_2x} srcWebp={null} srcWebp2x={null} />
    </Component>
  );
}

export default ProjectsCard;

const Component = styled.div`
  margin-top: 20px;

  &:not(:first-child) {
    margin-left: 20px;
  }

  ${media.tablet(css`
    &:not(:first-child) {
      margin-left: 0;
      margin-top: 50px;
    }
  `)}
`;

const Image = styled(Picture)`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
