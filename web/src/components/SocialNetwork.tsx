import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';

type Props = {
  href?: string;
  iconSVG: React.SVGProps<SVGSVGElement>;
};

function SocialNetwork({ href, iconSVG }: Props) {
  return <SocialLink to={href ?? '#'}>{iconSVG}</SocialLink>;
}

const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.color};
  transition: none;

  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`;

export default SocialNetwork;
