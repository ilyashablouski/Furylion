import React from 'react';
import styled from 'styled-components';

import { ThumbnailType } from '@tager/web-modules';

import Picture from '@/components/Picture';

function ProjectsCard({ url, url_webp, url_2x, url_webp_2x }: ThumbnailType) {
  return (
    <Component>
      <Image src={url} src2x={url_2x} srcWebp={null} srcWebp2x={null} />
    </Component>
  );
}

export default ProjectsCard;

const Component = styled.div``;

const Image = styled(Picture)`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
