import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Nullable } from '@tager/web-core';

import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectVacanciesList } from '@/store/reducers/pages/vacancies';
import { colors } from '@/constants/theme';
import {
  ImageType,
  LocationListType,
  VacancyShortListType,
} from '@/typings/model';
import useSettingItem from '@/hooks/useSettingItem';

import JobCard from './components/JobCard';

function getLocationList(vacanciesList: Array<VacancyShortListType>) {
  const locationInfo: {
    [key: string]: {
      name: string;
      number: number;
    };
  } = {};
  vacanciesList.forEach((item) => {
    const location = item.location;
    if (location) {
      if (locationInfo[location]) {
        locationInfo[location] = {
          ...locationInfo[location],
          number: locationInfo[location].number + 1,
        };
      } else {
        locationInfo[location] = {
          name: location,
          number: 1,
        };
      }
    }
  });

  const newArr = Object.keys(locationInfo).map((item, index) => ({
    id: index + 1,
    location: item,
    number: locationInfo[item].number,
  }));

  return newArr as LocationListType;
}

function getVacanciesByLocation(
  vacanciesList: Array<VacancyShortListType>,
  location: string
) {
  return vacanciesList.filter((vacancy) => vacancy.location === location);
}

//TODO:Refactor naming of states and types
function JobsSection() {
  const openedVacancyTitle = useSettingItem('OPEN_VACANCY_TITLE');
  const openedVacancyImage = useSettingItem('OPEN_VACANCY_IMAGE');
  const openedVacancyDescription = useSettingItem('OPEN_VACANCY_DESCRIPTION');

  const vacanciesList = useTypedSelector(selectVacanciesList);
  const vacanciesCityList = getLocationList(vacanciesList);

  const [isCurrentLocation, setCurrentLocation] = useState<string>(
    vacanciesCityList[0].location
  );

  const renderVacancyList = getVacanciesByLocation(
    vacanciesList,
    isCurrentLocation
  );

  console.log(openedVacancyImage);

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
                  return (
                    <SwiperSlide key={categoryItem.id}>
                      <Tab
                        active={isCurrentLocation === categoryItem.location}
                        onClick={() =>
                          setCurrentLocation(categoryItem.location ?? '')
                        }
                      >
                        <TabText>
                          {categoryItem.location}
                          <TabLabel>{categoryItem.number}</TabLabel>
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
            {renderVacancyList
              ? renderVacancyList.map((vacancyItem) => (
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
            <Card>
              <HeroJobCard
                title={openedVacancyTitle}
                image={openedVacancyImage as ImageType}
                excerpt={openedVacancyDescription}
                className="hero-card"
                heroCard={true}
              />
            </Card>
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

const HeroJobCard = styled(JobCard)``;

export default JobsSection;
