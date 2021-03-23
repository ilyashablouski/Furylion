import React from 'react';
import styled from 'styled-components';

type Props = {
  listItems: Array<string>;
};

function SchemeListItem({ listItems }: Props) {
  return (
    <>
      {listItems.map((item: string) => (
        <ListItem>{item}</ListItem>
      ))}
    </>
  );
}

const ListItem = styled.li``;

export default SchemeListItem;
