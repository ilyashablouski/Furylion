import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import useSettingItem from '@/hooks/useSettingItem';

import FooterAbout from './components/FooterAbout';
import FooterContacts from './components/FooterContacts';

function FooterTop() {
  const formTitle = useSettingItem('FORM_TITLE');
  const contactsArray = useSettingItem('FOOTER_OFFICES');
  return (
    <Wrapper>
      <FooterAbout formTitle={formTitle} />
      <FooterContacts contactsArray={contactsArray} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${colors.dark};
`;

export default FooterTop;
