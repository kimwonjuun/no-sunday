import { useNavigate } from 'react-router-dom';
import { formatAgo } from './../util/date';
import styled from 'styled-components';
import { displayPartsToString } from 'typescript';

export default function SearchList({ item }: { item: any }) {
  console.log('item', item);
  const { title, thumbnails, channelTitle, publishedAt } = item.snippet;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`${item.id.playlistId}`, { state: { item } });
      }}
    >
      <ThumbnailsImgWrap>
        <img
          src={thumbnails.high.url}
          alt={title}
          style={{ borderRadius: 20 }}
        />
      </ThumbnailsImgWrap>
      <ThumbnailsTitle>{title}</ThumbnailsTitle>
      <ThumbnailsDate>{formatAgo(publishedAt, 'ko')}</ThumbnailsDate>
    </div>
  );
}

export const ThumbnailsImgWrap = styled.div`
  // aspect-ratio 썸네일 크기를 이미지나 동영상을 비율대로 줄이거나 늘리는 데 사용 속성
  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
`;
export const ThumbnailsTitle = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
export const ThumbnailsDate = styled.p`
  color: white;
  font-size: 13px;
  font-weight: 700;
`;
