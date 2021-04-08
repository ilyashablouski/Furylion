import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectVacanciesList } from '@/store/reducers/pages/vacancies';
import { colors } from '@/constants/theme';

import JobCard from './components/JobCard';

function JobsSection() {
  const vacanciesList = useTypedSelector(selectVacanciesList);
  const vacanciesCityList = [
    { id: 1, location: 'Minsk', numberOfVacancies: 1 },
    { id: 2, location: 'Novopolotsk', numberOfVacancies: 2 },
    { id: 3, location: 'Saint Petersburg', numberOfVacancies: 3 },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  return (
    <Wrapper>
      <ContentContainer>
        <Tabs>
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            speed={500}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
          >
            {vacanciesCityList
              ? vacanciesCityList.map((categoryItem, index) => {
                  // if (getCountVacancies(categoryItem.vacancies) === 0) return false;
                  return (
                    <SwiperSlide key={categoryItem.id}>
                      <Tab>
                        <TabText>
                          {categoryItem.location}
                          <TabLabel>{categoryItem.numberOfVacancies}</TabLabel>
                        </TabText>
                      </Tab>
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
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

  .swiper-container {
    margin: 0;
  }

  .swiper-slide {
    width: auto;
  }
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
