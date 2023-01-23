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

  // const { keyword } = useParams();
  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(['videos', keyword], async () => {
  //   return fetch(`/serach/'products'.json`);
  // });
  // const [search, setSearch] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${YOUTUBE_API}?part=snippet&channelId=${ARTIST_KEY}&maxResults=50&key=${API_KEY}`,
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setSearch(res.data.items);
  //     })
  //     .catch(() => {});
  // }, []);
  // console.log(search);
  // const [search, setSearch] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${YOUTUBE_API}?part=snippet&channelId=${ARTIST_KEY}&maxResults=50&key=${API_KEY}`,
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setSearch(res.data.items);
  //     })
  //     .catch(() => {});
  // }, []);
  // console.log(search);

  return (
    <>
      <DetailBackColor>
        <DetailWrap>
          <Title>최신미디어</Title>
          <Container>
            {search.map((item: any) => (
              <SearchList item={item} key={item.id} />
            ))}
          </Container>
        </DetailWrap>
      </DetailBackColor>
    </>
  );
}

export const DetailBackColor = styled.div`
  /* background-color: black; */
  min-height: 100vh;
  min-width: 100vh;
`;
export const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
export const Container = styled.div`
  /* display: flex; */
`;
export const PlaylistWrap = styled.div``;
