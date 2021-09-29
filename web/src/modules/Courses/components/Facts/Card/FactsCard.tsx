import React from 'react';
import styled from 'styled-components';

import { Fact } from '@/modules/Courses/Courses.types';
import { colors } from '@/constants/theme';

function FactsCard({ title, subtitle, description }: Fact) {
  return (
    <Card>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </Card>
  );
}

export default FactsCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px 30px 10px;
  border: 1px dashed ${colors.white};
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 96px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;

const Subtitle = styled(Title)`
  color: ${colors.red};
  font-size: 50px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 160%;
  margin-top: 8px;
  color: ${colors.white};
`;
