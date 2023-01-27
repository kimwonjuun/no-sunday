import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatAgo } from '../../utils/Date';
import { textRegex } from '../../utils/VaildText';
import styled from 'styled-components';

export default function LikeMediaItem({ item }: { item: any }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <div
      onClick={() => {
        navigate(`/${item.channelId}/${item.videoId}`, {
          state: { item, page: pathname },
        });
      }}
    >
      <LikeMediaItemWrap>
        <ThumbnailsImgWrap>
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ borderRadius: 20 }}
          />
          <ThumbnailsView>05:48</ThumbnailsView>
        </ThumbnailsImgWrap>
        <ThumbnailsTitle>{textRegex(item.title)}</ThumbnailsTitle>
        {/* <ThumbnailsDate>{formatAgo(item.publishedAt, 'ko')}</ThumbnailsDate> */}
      </LikeMediaItemWrap>
    </div>
  );
}

export const LikeMediaItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 20px;
  overflow: hidden;
  margin: 0 50px;
  padding-top: 20px;
  padding-bottom: 50px;
`;
export const ThumbnailsImgWrap = styled.div`
  // aspect-ratio 썸네일 크기를 이미지나 동영상을 비율대로 줄이거나 늘리는 데 사용 속성
  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
`;
export const ThumbnailsTitle = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 700;
`;
export const ThumbnailsDate = styled.p`
  color: black;
  font-size: 13px;
  font-weight: 700;
`;
export const ThumbnailsView = styled.em`
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
