import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchVideos } from '../redux/actions/VidoesAction';
import { MediaVideos } from './../redux/reducers/MediaVideos';
import { RootState } from '../redux/config/configStore';
import SearchList from './../components/SearchList';

export default function Media() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getSearchVideos());
  }, [dispatch]);

  const { search } = useSelector((state: RootState) => state.MediaVideos);

  return (
    <>
      <DetailBackColor>
        <Title>최신미디어</Title>
        <DetailWrap>
          {search.map((item: any) => (
            <SearchList item={item} key={item.id} />
          ))}
        </DetailWrap>
      </DetailBackColor>
    </>
  );
}

export const DetailBackColor = styled.div`
  background-color: #222;
`;
export const DetailWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 20px;
  overflow: hidden;
  margin: 0 50px;
  padding-top: 20px;
  padding-bottom: 50px;
`;
export const Title = styled.p`
  margin: 0 50px;
  padding-top: 41px;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
