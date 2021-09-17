import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useModal } from '@tager/web-components';

import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectVacanciesList } from '@/store/reducers/pages/vacancies';
import { colors } from '@/constants/theme';
import { LocationType, VacanciesPage, VacancyShortType } from '@/typings/model';
import useSettingItem from '@/hooks/useSettingItem';
import FeedbackModal from '@/components/modals/FeedbackModal';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';

import JobCard from './components/JobCard';

const cityPath = '/vacancies?city=';

function getLocationList(
  vacanciesList: Array<VacancyShortType>
): Array<LocationType> {
  const locationMap = new Map<string, LocationType>();

  vacanciesList.forEach((item) => {
    const location = item.location;

    if (!location) return;

    const currentLocationEntry = locationMap.get(location);

    if (currentLocationEntry) {
      currentLocationEntry.number += 1;
    } else {
      const newLocationEntry: LocationType = {
        id: locationMap.size + 1,
        location,
        number: 1,
      };

      locationMap.set(location, newLocationEntry);
    }
  });

  return Array.from(locationMap.values());
}

function getVacanciesByLocation(
  vacanciesList: Array<VacancyShortType>,
  location: string
) {
  return vacanciesList.filter(
    (vacancy) => `${cityPath}${vacancy.location}` === location
  );
}

function JobsSection() {
  const page = useCurrentPage<VacanciesPage>();
  const openedVacancyTitle = useSettingItem('OPEN_VACANCY_TITLE');
  const openedVacancyImage = useSettingItem('OPEN_VACANCY_IMAGE');
  const openedVacancyDescription = useSettingItem('OPEN_VACANCY_DESCRIPTION');
  const formVacanciesTitle = useSettingItem('FORM_VACANCIES_TITLE');

  const vacanciesList = useTypedSelector(selectVacanciesList);
  const vacanciesCityList = getLocationList(vacanciesList);

  const [isCurrentLocation, setCurrentLocation] = useState<string>(
    `${cityPath}${vacanciesCityList[0].location}`
  );

  const filteredVacancyList = getVacanciesByLocation(
    vacanciesList,
    isCurrentLocation
  );

  const openModal = useModal();

  const router = useRouter();

  const defaultLocationPath = `${cityPath}${vacanciesCityList[0].location}`;

  useEffect(() => {
    if (router.asPath === '/vacancies') {
      setCurrentLocation(defaultLocationPath);
      router.push(defaultLocationPath);
    } else {
      setCurrentLocation(router.asPath);
    }
  }, [defaultLocationPath, router, router.asPath]);

  function handleOpenFeedbackModal() {
    openModal(FeedbackModal, {
      formTitle: formVacanciesTitle,
      isCvForm: true,
    });
  }

  const jobCardButtonTitle = page?.templateFields.buttonTitle ?? '';

  return (
    <Wrapper id="vacanciesJobs">
      <ContentContainer>
        <Tabs>
          {vacanciesCityList
            ? vacanciesCityList.map((categoryItem, index) => {
                const locationPath = `${cityPath}${categoryItem.location}`;

                return (
                  <TabLink href={locationPath} scroll={false} key={index}>
                    <Tab
                      key={categoryItem.id}
                      active={isCurrentLocation === locationPath}
                    >
                      <TabText>
                        {categoryItem.location}
                        <TabLabel>{categoryItem.number}</TabLabel>
                      </TabText>
                    </Tab>
                  </TabLink>
                );
              })
            : null}
        </Tabs>
      </ContentContainer>
      <TabContent>
        <ContentContainer>
          <JobsCards>
            {filteredVacancyList
              ? filteredVacancyList.map((vacancyItem) => (
                  <Card key={vacancyItem.id}>
                    <JobCard
                      buttonTitle={jobCardButtonTitle}
                      card={{
                        ...vacancyItem,
                        image: vacancyItem?.image?.default ?? null,
                      }}
                    />
                  </Card>
                ))
              : null}
            <Card>
              <JobCard
                buttonTitle={jobCardButtonTitle}
                card={{
                  title: openedVacancyTitle,
                  image: openedVacancyImage,
                  excerpt: openedVacancyDescription,
                }}
                isHeroCard={true}
                onClick={handleOpenFeedbackModal}
              />
            </Card>
          </JobsCards>
        </ContentContainer>
      </TabContent>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 38px;

  ${media.tabletOnly(css`
    margin-top: 56px;
  `)}

  ${media.mobile(css`
    & > ${ContentContainer} {
      padding: 0;
    }
  `)}
`;

const Tabs = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

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

  ${media.tabletSmall(css`
    left: 5px;
    font-size: 12px;
  `)}
`;

const TabLink = styled(Link)``;

const Tab = styled.div<{ active?: boolean }>`
  position: relative;
  padding: 17px 48px 17px 32px;
  ${(props) =>
    props.active
      ? css`
          background: ${colors.red};
        `
      : ''};
  cursor: pointer;
  transition: 150ms all ease-in-out;

  ${media.tabletSmall(css`
    padding: 8px 32px 8px 24px;
  `)}
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
  white-space: nowrap;
  ${media.tabletSmall(css`
    font-size: 20px;
    line-height: 160%;
  `)}
`;

const TabContent = styled.div`
  padding-top: 50px;
  padding-bottom: 110px;
  background: #c2191e;

  ${media.tabletSmallOnly(css`
    padding-top: 25px;
    padding-bottom: 60px;
  `)}

  ${media.mobile(css`
    padding-top: 20px;
    padding-bottom: 127px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `)}
`;

const JobsCards = styled.div`
  margin: -50px -10px 0;
  display: flex;
  flex-wrap: wrap;

  ${media.tabletSmallOnly(css`
    margin: -50px -30px 0;
    justify-content: center;
  `)}

  ${media.mobile(css`
    margin: 0 -10px;
    flex-wrap: nowrap;
  `)}
`;

const Card = styled.div`
  margin-top: 50px;
  padding: 0 10px;
  max-width: calc(293px + 20px);
  min-width: calc(293px + 20px);

  ${media.tabletSmallOnly(css`
    padding: 0 30px;
    max-width: calc(293px + 60px);
    min-width: calc(293px + 60px);
  `)}

  ${media.mobile(css`
    margin-top: 0;
  `)}
`;

export default JobsSection;
