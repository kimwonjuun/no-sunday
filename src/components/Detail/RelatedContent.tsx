import React from 'react';
import styled from 'styled-components';

export default function RelatedContent({ item }: { item: any }) {
  const { title, thumbnails, publishTime } = item.snippet;

  const timestamp: any = { publishTime };
  const date: any = new Date(timestamp.publishTime.toString()).toLocaleString();

  return (
    <>
      <Content>
        <ContentThumbnail>
          {
            <iframe
              id="player"
              width="100%"
              height="100%"
              frameBorder="0"
              src={`http://www.youtube.com/embed/${item.id.videoId}`}
            ></iframe>
          }
        </ContentThumbnail>
        <ContentTitle>{title}</ContentTitle>
        <ContentDate>{date}</ContentDate>
      </Content>
    </>
  );
}

const Content = styled.div``;

const ContentThumbnail = styled.div`
  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
  background-color: wheat;
`;

const ContentTitle = styled.div`
  color: #eee;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  margin-top: 15px;
`;

const ContentSummary = styled.div`
  color: #aaa;
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
`;

const ContentDate = styled.div`
  align-items: center;
  color: #8e8e8e;
  display: flex;
  font-size: 11px;
  line-height: 13px;
  align-items: center;
  display: flex;
  margin-top: 6px;
`;
