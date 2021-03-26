import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';

function ContactBlock() {
  return (
    <Container>
      <Title>Novopolotsk</Title>
      {/*<Address>404, Francisk Skorina Avenue 37<br>Polotsk 211400,<br>Republic of Belarus</Address>*/}
      <Phone>
        <PhoneLink to="#">+375 (44) 569-69-69</PhoneLink>
      </Phone>
      <Email>
        <EmailLink to="#">info@furylion.net</EmailLink>
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

const Address = styled.p`
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
