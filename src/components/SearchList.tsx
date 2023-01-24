import React from 'react';
import Searchltem from './Searchltem';
import styled from 'styled-components';

export default function SearchList({ item }: { item: any }) {
  console.log('item', item);
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
  console.log('item', item);
  return (
    <PlaylistWrap>
      <h1>{title}</h1>
      <img src={thumbnails.high.url} alt={title} />
    </PlaylistWrap>
  );
}
// console.log('item', item);
export const PlaylistWrap = styled.div``;
