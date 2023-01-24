import React from 'react';
import { RootState } from '../redux/config/configStore';
import { useSelector } from 'react-redux';
import SearchList from './SearchList';

export default function Search() {
  const { search } = useSelector((state: RootState) => state.MediaVideos);

  return (
    <div>
      {search.map((item: any) => (
        <SearchList item={item} key={item.id} />
      ))}
    </div>
  );
}
