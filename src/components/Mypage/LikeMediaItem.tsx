import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { textRegex } from '../../utils/VaildText';
import styled from 'styled-components';

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
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{ borderRadius: 20 }}
        />
        {/* <ThumbnailsView>05:48</ThumbnailsView> */}
      </ThumbnailsImgWrap>
      <ThumbnailsTitle>{textRegex(item.title)}</ThumbnailsTitle>
      <ThumbnailsDate>{item.publishTime}</ThumbnailsDate>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 1rem;

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
  color: black;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ThumbnailsDate = styled.p`
  color: #7d7c7c;
  font-size: 14px;
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
