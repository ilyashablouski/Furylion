import React from 'react';

import { InformationProps } from './Information.types';
import { Component, Title, Content } from './Information.styles';

function Information({ title, content }: InformationProps) {
  return (
    <Component>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Component>
  );
}

export default Information;
