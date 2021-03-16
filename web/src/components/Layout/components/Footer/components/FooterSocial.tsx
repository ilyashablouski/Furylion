import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';

type Props = {
  href?: string;
  iconSVG?: React.SVGProps<SVGSVGElement>;
};

function FooterSocial({ href, iconSVG }: Props) {
  return <SocialLink to={href ?? '#'}>{iconSVG}</SocialLink>;
}

const LinkWrapper = styled.div``;

const SocialLink = styled(Link)`
  margin: 0 17.5px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #191814;
  border: 1px solid ${colors.red};
  transition: 150ms all ease-in-out;

  &:hover {
    background: #000;
    color: ${colors.white};
  }

  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
`;

export default FooterSocial;
