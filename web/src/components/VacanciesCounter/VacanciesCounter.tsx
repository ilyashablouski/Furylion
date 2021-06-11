import React from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '@/store/store';
import { selectVacanciesTotalValue } from '@/store/reducers/pages/vacancies';
import { colors } from '@/constants/theme';

type Props = {
  isRed?: boolean;
};

function VacanciesCounter({ isRed = false }: Props) {
  const vacanciesTotalValue = useTypedSelector(selectVacanciesTotalValue);
  return (
    <Container isRed={isRed}>
      <Label>{vacanciesTotalValue}</Label>
    </Container>
  );
}

const Container = styled.div<{ isRed?: boolean }>`
  position: relative;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.isRed ? `${colors.red}` : `${colors.dark}`)};
  border-radius: 100%;
`;

const Label = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 10px;
  color: ${colors.white};
`;

export default VacanciesCounter;
