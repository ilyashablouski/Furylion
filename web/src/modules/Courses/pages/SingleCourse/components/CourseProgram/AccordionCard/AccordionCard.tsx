import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ArrowIcon } from '@/assets/svg/down-arrow.svg';
import { CourseProgramItem } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';
import { colors } from '@/constants/theme';
import { ReactComponent as ClockIcon } from '@/assets/svg/vacancy/clock.svg';
import { media } from '@/utils/mixin';

import ProgramStepCard from './ProgramStepCard';

function AccordionCard({
  title,
  subtitle,
  time,
  descriptionTitle,
  description,
  programStepsItems,
}: CourseProgramItem) {
  const [isOpened, setOpened] = useState(false);

  const handleChangeOpenedState = () => {
    setOpened(!isOpened);
  };

  return (
    <Component>
      <Header onClick={handleChangeOpenedState}>
        <InitialContent isOpened={isOpened}>
          <Content>
            <Title>{title}</Title>
            {isOpened ? (
              <Time>
                <Icon>
                  <ClockIcon />
                </Icon>
                {time}
              </Time>
            ) : (
              <Subtitle>{subtitle}</Subtitle>
            )}
          </Content>
          <Arrow isOpened={isOpened} className="arrow-down">
            <ArrowIcon />
          </Arrow>
        </InitialContent>
      </Header>

      <DropdownContent isOpened={isOpened}>
        <DropdownTitle>{descriptionTitle}</DropdownTitle>

        <DropdownDescription>{description}</DropdownDescription>

        <StepsCards>
          {programStepsItems &&
            programStepsItems.map(({ title, time, list }, index: number) => (
              <ProgramStepCard
                key={index}
                title={title}
                time={time}
                list={list}
              />
            ))}
        </StepsCards>
      </DropdownContent>
    </Component>
  );
}

export default AccordionCard;

const Component = styled.div`
  border: 1px dashed ${colors.white};

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const Header = styled.div`
  padding: 24px 24px 0 24px;
  cursor: pointer;

  &:hover {
    .arrow-down {
      svg {
        color: ${colors.white};
        transition: 0.3s;
      }
    }
  }

  ${media.mobile(css`
    padding: 12px 12px 0 12px;
  `)}
`;

const InitialContent = styled.div<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;

  ${({ isOpened }) =>
    isOpened &&
    css`
      border-bottom: 2px solid ${colors.white01};
    `};

  ${media.mobile(css`
    padding-bottom: 12px;
  `)}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 14px;
  `)}
`;

const Time = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 300;
  color: ${colors.white};

  ${media.tablet(css`
    margin-top: 12px;
  `)}
`;

const Subtitle = styled(Time)`
  align-items: flex-start;
`;

const Icon = styled.i`
  margin-right: 16px;
  display: inline-flex;
`;

const Arrow = styled.div<{ isOpened: boolean }>`
  margin-left: 20px;

  svg {
    color: ${colors.white05};
    transition: 0.3s;
    transform: ${(props) => (props.isOpened ? `rotate(180deg)` : `rotate(0)`)};

    ${media.mobile(css`
      width: 18px;
      height: 12px;
    `)}
  }
`;

const DropdownContent = styled.div<{ isOpened: boolean }>`
  padding: 24px 104px;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  overflow: hidden;

  ${({ isOpened }) =>
    isOpened &&
    css`
      position: relative;
      transition: opacity 0.5s ease;
      visibility: visible;
      opacity: 1;
    `};

  ${media.tablet(css`
    padding: 24px 60px;
  `)}

  ${media.mobile(css`
    padding: 16px 28px;
  `)}
`;

const DropdownTitle = styled.span`
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 14px;
  `)}
`;

const DropdownDescription = styled.p`
  font-size: 14px;
  line-height: 160%;
  font-weight: 300;
  margin-top: 16px;
  max-width: 580px;
  color: ${colors.white};

  ${media.tablet(css`
    margin-top: 12px;
  `)}
`;

const StepsCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  ${media.mobile(css`
    margin-top: 16px;
  `)}
`;
