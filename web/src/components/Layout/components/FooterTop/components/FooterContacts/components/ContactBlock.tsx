import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import { SettingOptionType } from '@/typings/model';

function ContactBlock({ title, text, phone, email }: SettingOptionType) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text dangerouslySetInnerHTML={{ __html: text ?? '' }} />
      <Phone>
        <PhoneLink to="#">{phone}</PhoneLink>
      </Phone>
      <Email>
        <EmailLink to="#">{email}</EmailLink>
      </Email>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 45px;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 160%;
`;

const Text = styled.p`
  margin-top: 15px;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  white-space: nowrap;
`;

const Phone = styled.div`
  margin-top: 25px;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
`;

const PhoneLink = styled(Link)`
  border-bottom: 1px solid ${colors.white};
  transition: 150ms all ease-in-out;
`;

const Email = styled.div`
  margin-top: 25px;
`;

const EmailLink = styled(Link)``;

export default ContactBlock;
