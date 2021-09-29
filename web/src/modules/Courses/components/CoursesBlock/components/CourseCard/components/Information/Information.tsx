import React from 'react';

import { InformationProps } from './Information.types';
import { Component, Title, Content } from './Information.styles';

function Information({ title, content, singleCourse }: InformationProps) {
  return (
    <Component singleCourse={singleCourse}>
      <Title>{title}</Title>
      <Content singleCourse={singleCourse}>{content}</Content>
    </Component>
  );
}

export default Information;
