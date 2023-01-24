import React from 'react';
import Comment from './Comment';
import RelatedContent from './RelatedContent';
import styled from 'styled-components';
import Youtube from './Youtube';

export default function DetailView() {
  return (
    <ContentFrameView>
      <ContentsView>
        <ContentView>
          <Youtube />
          <Comment />
        </ContentView>
        <RelatedContentContainer>
          <RelatedContentTitle>관련 미디어</RelatedContentTitle>
          <RelatedContentNumber>전체 20</RelatedContentNumber>
          <RelatedContentList>
            <RelatedContent />
          </RelatedContentList>
        </RelatedContentContainer>
      </ContentsView>
    </ContentFrameView>
  );
}

const ContentFrameView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentsView = styled.div`
  background-color: rgb(34, 34, 34);
  box-sizing: border-box;
  padding: 0px 50px 60px;
`;

const ContentView = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 1635px;
  min-width: 1100px;
`;

const RelatedContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1635px;
  min-width: 1100px;
  padding-top: 40px;
`;

const RelatedContentTitle = styled.div`
  color: #eee;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

const RelatedContentNumber = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 19px 0 30px;
  color: #eee;
  font-size: 13px;
  line-height: 16px;
`;

const RelatedContentList = styled.div`
  grid-gap: 30px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
`;