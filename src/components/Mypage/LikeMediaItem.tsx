import { useNavigate, useLocation } from 'react-router-dom';
import { textRegex } from 'utils/VaildText';
import {
  Wrapper,
  ThumbnailsImgWrap,
  ThumbnailsDate,
  ThumbnailsTitle,
} from './styles';

export default function LikeMediaItem({ item }: { item: any }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <Wrapper
      onClick={() => {
        navigate(`/${item.channelId}/${item.videoId}`, {
          state: { item, page: pathname },
        });
      }}
    >
      <ThumbnailsImgWrap>
        <img src={item.thumbnail} alt={item.title} />
        {/* <ThumbnailsView>05:48</ThumbnailsView> */}
      </ThumbnailsImgWrap>
      <ThumbnailsTitle>{textRegex(item.title)}</ThumbnailsTitle>
      <ThumbnailsDate>{item.publishTime}</ThumbnailsDate>
    </Wrapper>
  );
}
