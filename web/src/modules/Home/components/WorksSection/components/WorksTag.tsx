import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';

type Props = {
  tag: string;
};

function WorksTag({ tag }: Props) {
  return <TagContainer>{tag}</TagContainer>;
}
const TagContainer = styled.div`
  margin: 0 10px;
  padding: 6px 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.5);

  ${media.tabletSmall(css`
    margin: 0 5px;
  `)}
`;

export default WorksTag;
