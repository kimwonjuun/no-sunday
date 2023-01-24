import React from 'react';
import styled from 'styled-components';

export default function RelatedContent() {
  return (
    <>
      <Content>
        <ContentThumbnail></ContentThumbnail>
        <ContentTitle>뮤직뱅크 출근길 with Ditto🦌</ContentTitle>
        <ContentSummary>뮤직뱅크 출근길 with Ditto🦌</ContentSummary>
        <ContentDate>2023.01.16 18:20</ContentDate>
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
