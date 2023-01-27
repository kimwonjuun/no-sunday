import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatAgo } from '../../utils/Date';
import { textRegex } from '../../utils/VaildText';

export default function SearchList({ item }: { item: any }) {
  const { title, thumbnails, publishedAt } = item.snippet;

  const navigate = useNavigate();

  return (
    <div
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
        <ThumbnailsView>05:48</ThumbnailsView>
      </ThumbnailsImgWrap>
      <ThumbnailsTitle>{textRegex(title)}</ThumbnailsTitle>
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
