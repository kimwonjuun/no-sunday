import React from 'react';
import Searchltem from './Searchltem';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SearchList({ item }: { item: any }) {
  console.log('item', item);
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;
  console.log('item', item);

  const navigate = useNavigate();

  return (
    <PlaylistWrap>
      <div
        onClick={() => {
          navigate(`${item.id.playlistId}`, { state: { item } });
        }}
      >
        <h1>{title}</h1>
        <img src={thumbnails.high.url} alt={title} />
      </div>
    </PlaylistWrap>
  );
}
// console.log('item', item);
export const PlaylistWrap = styled.div``;
