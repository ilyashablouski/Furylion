import React from 'react';
import styled from 'styled-components';

type Props = {
  listItems: Array<string>;
};

function SchemeListItem({ listItems }: Props) {
  return (
    <>
      {listItems.map((item: string, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </>
  );
}

const ListItem = styled.li``;

export default SchemeListItem;
