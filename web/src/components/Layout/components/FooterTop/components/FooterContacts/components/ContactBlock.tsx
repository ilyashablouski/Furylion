import React from 'react';
import styled, { css } from 'styled-components';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import { SettingOptionType } from '@/typings/model';
import { media } from '@/utils/mixin';
import { normalizePhoneNumber } from '@/utils/common';

function ContactBlock({ title, text, phone, email }: SettingOptionType) {
  const href = `tel:${normalizePhoneNumber(phone)}`;
  return (
    <Container>
      <Title>{title}</Title>
      <Text dangerouslySetInnerHTML={{ __html: text ?? '' }} />
      <Phone>
        <PhoneLink to={href}>{phone}</PhoneLink>
      </Phone>
      <Email>
        <EmailLink to={`mailto:${email}`}>{email}</EmailLink>
      </Email>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 45px;

  ${media.tablet(css`
    padding: 0 10px;
  `)}

  ${media.mobile(css`
    &:not(:first-child) {
      margin-top: 50px;
    }
    padding: 0;
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 40px;
  line-height: 160%;
  white-space: nowrap;

  ${media.tabletSmallOnly(css`
    font-size: 28px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Text = styled.p`
  margin-top: 15px;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  white-space: nowrap;

  ${media.tabletSmallOnly(css`
    font-size: 13px;
  `)}

  ${media.mobile(css`
    font-size: 16px;
  `)}
`;

const Phone = styled.div`
  margin-top: 25px;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;

  ${media.tabletSmall(css`
    margin-top: 15px;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 13px;
  `)}

  ${media.mobile(css`
    font-size: 16px;
  `)}
`;

const PhoneLink = styled(Link)`
  border-bottom: 1px solid ${colors.white};
  transition: 150ms all ease-in-out;
`;

const Email = styled.div`
  margin-top: 33px;

  ${media.tabletSmall(css`
    margin-top: 15px;
    font-size: 13px;
  `)}

  ${media.mobile(css`
    font-size: 16px;
  `)}
`;

const EmailLink = styled(Link)`
  display: inline-block;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  border-bottom: 1px solid ${colors.white};
`;

export default ContactBlock;
