import { useEffect } from 'react';
import styled from 'styled-components';
import { getSearchVideos } from '../redux/modules/MediaSlice';
import SearchList from '../components/Mypage/SearchList';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

export default function Media() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const channelId = location.pathname.substring(1);

  useEffect(() => {
    dispatch(getSearchVideos({ channelId }));
  }, [dispatch]);

  const { search } = useAppSelector((state) => state.media);

  return (
    <>
      <DetailBackColor>
        <Title>최신미디어</Title>
        <DetailWrap>
          {search.map((item: any) => (
            <SearchList item={item} key={item.id.videoId} />
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
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px 20px;
  overflow: hidden;
  margin: 0 50px;
  padding-top: 20px;
  padding-bottom: 50px;
`;
export const Title = styled.p`
  margin: 0 50px;
  padding-top: 41px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
