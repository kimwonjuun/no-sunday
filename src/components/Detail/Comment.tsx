import React from 'react';
import styled from 'styled-components';

export default function Comment() {
  return (
    <>
      <CommentView>
        <CommentsView>
          <CommentsViewer>
            <CommentHeader>
              <CommentHeaderWrap>
                <CommentHeaderTitle>12개의 댓글</CommentHeaderTitle>
              </CommentHeaderWrap>
            </CommentHeader>
            <CommnetScrollArea>
              <CommentContent>
                <CommentPostHeader>
                  <CommentProfileImg />
                  <CommentProfile>
                    <CommentProfileName>지우!!!</CommentProfileName>
                    <CommentProfileDate>01. 20. 21:44</CommentProfileDate>
                  </CommentProfile>
                </CommentPostHeader>
                <CommentViewArea>디토 짱</CommentViewArea>
              </CommentContent>
            </CommnetScrollArea>
            <CommentWriteContainer>
              <CommentWriteBox>
                <CommentWriteArea>
                  <CommentWrite placeholder="댓글을 입력하세요." />
                  <CommentBtn />
                </CommentWriteArea>
              </CommentWriteBox>
            </CommentWriteContainer>
          </CommentsViewer>
        </CommentsView>
      </CommentView>
    </>
  );
}

const CommentView = styled.div`
  margin-left: 30px;
  width: 500px;
  padding: 30px 0px;
`;

const CommentsView = styled.div`
  flex: 1;
  box-sizing: border-box;
  min-height: 660px;
  position: sticky;
  background-color: rgb(46, 46, 46);
  border-radius: 20px;
`;

const CommentsViewer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

const CommentHeader = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  height: 70px;
  padding: 24px 20px;
`;

const CommentHeaderWrap = styled.div`
  align-items: center;
  display: flex;
`;

const CommentHeaderTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  color: white;
`;

const CommnetScrollArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px 20px 20px;
  position: relative;
`;

const CommentContent = styled.div`
  position: relative;
`;

const CommentPostHeader = styled.div`
  align-items: center;
  display: flex;
`;

const CommentProfileImg = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

const CommentProfile = styled.div`
  margin-left: 8px;
  overflow: hidden;
`;

const CommentProfileName = styled.div`
  display: block;
  font-size: 14px;
  line-height: 17px;
  overflow: hidden;
  font-weight: bold;
  color: white;
`;

const CommentProfileDate = styled.div`
  align-items: center;
  display: flex;
  margin-top: 2px;
  font-size: 12px;
  line-height: 14px;
  color: #8e8e8e;
`;

const CommentViewArea = styled.div`
  font-size: 15px;
  line-height: 21px;
  overflow-wrap: break-word;
  padding: 7px 0 7px 42px;
  position: relative;
  color: white;
`;

const CommentWriteContainer = styled.div`
  display: flex;
  flex: 0 0 75px;
  flex-direction: column;
`;

const CommentWriteBox = styled.div`
  border-top: none;
  padding: 15px 18px;
`;

const CommentWriteArea = styled.div`
  align-items: flex-end;
  display: flex;
`;

const CommentWrite = styled.input`
  background-color: #444;
  color: #eee;
  height: 22px;
  border-radius: 23px;
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 46px;
  padding: 12px 18px;
`;

const CommentBtn = styled.button`
  background-color: #3a3a3a;
  color: #9d9d9d;
  background-image: none;
  width: 36px;
  height: 36px;
  margin: 0 0 5px 10px;
  border-radius: 50%;
`;
