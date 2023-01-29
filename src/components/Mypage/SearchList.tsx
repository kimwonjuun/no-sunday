import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatAgo } from '../../utils/Date';
import { textRegex } from '../../utils/VaildText';
// import moment from 'moment';
// import { request } from './../../utils/Api';

export default function SearchList({ item }: { item: any }) {
  // const [duration, setDuration] = useState(null);

  const { title, thumbnails, publishedAt } = item.snippet;

  // const seconds = moment.duration(duration).asSeconds();
  // const _duration = moment.utc(seconds * 1000).format('mm:ss');

  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        navigate(`${item.id.videoId}`, { state: { item } });
      }}
    >
      <ThumbnailsImgWrap>
        <img
          src={thumbnails.high.url}
          alt={title}
          style={{ borderRadius: 20 }}
        />
        {/* <ThumbnailsView>08:48</ThumbnailsView> */}
      </ThumbnailsImgWrap>
      <ThumbnailsTitle>{textRegex(title)}</ThumbnailsTitle>
      <ThumbnailsDate>{formatAgo(publishedAt, 'ko')}</ThumbnailsDate>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.1);
    }
    h2 {
      color: #ff0098;
    }
  }
`;

export const ThumbnailsImgWrap = styled.div`
  // aspect-ratio 썸네일 크기를 이미지나 동영상을 비율대로 줄이거나 늘리는 데 사용 속성

  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.6rem;
  cursor: pointer;

  img {
    transition: all 300ms ease-in-out;
  }
`;
export const ThumbnailsTitle = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ThumbnailsDate = styled.p`
  color: #ccc;
  font-size: 14px;
`;
export const ThumbnailsView = styled.em`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 9px;
  bottom: 6px;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  line-height: 17px;
  padding: 0 6px;
  position: absolute;
  right: 6px;
  user-select: none;
  z-index: 30;
`;
