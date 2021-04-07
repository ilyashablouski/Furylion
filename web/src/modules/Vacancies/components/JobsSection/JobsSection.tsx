import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectVacanciesList } from '@/store/reducers/pages/vacancies';
import { colors } from '@/constants/theme';

import JobCard from './components/JobCard';

function JobsSection() {
  const vacanciesList = useTypedSelector(selectVacanciesList);
  return (
    <Wrapper>
      <ContentContainer>
        <Tabs>
          <Tab active>
            <TabText>
              Minsk <TabLabel>1</TabLabel>
            </TabText>
          </Tab>
          <Tab>
            <TabText>
              Minsk <TabLabel>1</TabLabel>
            </TabText>
          </Tab>
          <Tab>
            <TabText>
              Minsk <TabLabel>1</TabLabel>
            </TabText>
          </Tab>
          <Tab>
            <TabText>
              Minsk <TabLabel>1</TabLabel>
            </TabText>
          </Tab>
        </Tabs>
      </ContentContainer>
      <TabContent>
        <ContentContainer>
          <JobsCards>
            {vacanciesList
              ? vacanciesList.map((vacancyItem) => (
                  <Card key={vacancyItem.id}>
                    <JobCard
                      title={vacancyItem.title}
                      image={vacancyItem.image}
                      urlAlias={vacancyItem.urlAlias}
                      excerpt={vacancyItem.excerpt}
                      typeOfWork={vacancyItem.typeOfWork}
                      level={vacancyItem.level}
                    />
                  </Card>
                ))
              : null}
          </JobsCards>
        </ContentContainer>
      </TabContent>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 70px;
`;

const Tabs = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
`;

const TabLabel = styled.sup`
  position: relative;
  left: 10px;
  top: -10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: ${colors.red};
`;

const Tab = styled.div<{ active?: boolean }>`
  position: relative;
  padding: 17px 57px 17px 32px;
  ${(props) =>
    props.active
      ? css`
          background: ${colors.red};
        `
      : ''};
  cursor: pointer;
  transition: 150ms all ease-in-out;

  ${TabLabel} {
    ${(props) =>
      props.active
        ? css`
            color: ${colors.white};
          `
        : ''}
  }
`;

const TabText = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};
`;

const TabContent = styled.div`
  padding-top: 50px;
  padding-bottom: 110px;
  background: #c2191e;
`;

const JobsCards = styled.div`
  margin: -50px -10px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin-top: 50px;
  padding: 0 10px;
  flex: 0 0 25%;
  max-width: 25%;
`;

export default JobsSection;
