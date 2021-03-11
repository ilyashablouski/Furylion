import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';

function Header() {
  return (
    <HeaderContainer>
      <ContentContainer></ContentContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  flex: 0 0 80px;
  border-bottom: 1px solid #d7d7d7;
`;

export default Header;
