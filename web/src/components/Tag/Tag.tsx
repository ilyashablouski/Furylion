import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';

type Props = {
  tag: string;
};

function Tag({ tag }: Props) {
  return <TagContainer>{tag}</TagContainer>;
}
const TagContainer = styled.div`
  margin: 10px 5px 0;
  padding: 6px 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.5);
  color: ${colors.white};
`;

export default Tag;
