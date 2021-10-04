import React from 'react';
import styled from 'styled-components';

import { Fact } from '@/modules/Courses/Courses.types';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';

function FactsCard({ title, subtitle, description, counterRef }: Fact) {
  const getTitleItems = (title: StringFieldType) => {
    if (!title) {
      return;
    }

    return title.split(/(?=[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/])/g);
  };

  return (
    <Card>
      <TitleWrapper>
        {getTitleItems(title)?.map((item, index) => (
          <>
            {index === 1 ? (
              <Prefix key={index}>{item}</Prefix>
            ) : (
              <Title key={index} ref={counterRef}>
                {item}
              </Title>
            )}
          </>
        ))}
      </TitleWrapper>

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

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 96px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};
`;

const Prefix = styled(Title)``;

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
