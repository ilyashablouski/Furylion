import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';

import JobCard from './components/JobCard';

function JobsSection() {
  return (
    <Wrapper>
      {/*//TODO:Tabs*/}
      {/*<ContentContainer></ContentContainer>*/}
      <TabContent>
        <ContentContainer>
          <JobsCards>{/*<JobCard />*/}</JobsCards>
        </ContentContainer>
      </TabContent>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 70px;
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

export default JobsSection;
