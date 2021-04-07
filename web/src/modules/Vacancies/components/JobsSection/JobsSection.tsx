import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectVacanciesList } from '@/store/reducers/pages/vacancies';

import JobCard from './components/JobCard';

function JobsSection() {
  const vacanciesList = useTypedSelector(selectVacanciesList);
  return (
    <Wrapper>
      <ContentContainer>
        <JobTabs></JobTabs>
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

const JobTabs = styled.div``;

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
