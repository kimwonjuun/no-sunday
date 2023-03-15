import SearchList from 'components/SearchList';
import { useAppSelector } from 'hooks/useRedux';
import Loader from 'components/Loader';
import useLoading from 'hooks/useLoading';
import { DetailBackColor, DetailWrap, Title } from './style';

export default function Media() {
  const [loading] = useLoading();

  const { search } = useAppSelector((state) => state.media);

  if (loading) return <Loader />;

  return (
    <DetailBackColor>
      <Title>최신미디어</Title>

      <DetailWrap>
        {search.map((item: any) => (
          <SearchList item={item} key={item.id.videoId} />
        ))}
      </DetailWrap>
    </DetailBackColor>
  );
}
