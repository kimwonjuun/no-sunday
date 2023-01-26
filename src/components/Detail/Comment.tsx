import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { idText } from 'typescript';
import { authService, dbService } from '../../common/firebase';

export default function Comment() {
  // 댓글 인풋
  const [inputComment, setInputComment] = useState<string>('');
  // 댓글 출력
  const [myComment, setMyComment] = useState<any[]>([]);
  // 테스트용 온클릭 함수
  // const addComment = () => {
  //   setMyComment([...myComment, inputComment]);
  //   setInputComment('');
  // };

  // 파이어베이스
  // read
  const getComments = async () => {
    const querySnapshot = await getDocs(collection(dbService, 'comments'));
    // console.log(querySnapshot);
    const comment: any = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());

      // console.log('doc.data()', doc.data());
      // setMyComment(
      //   querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      // );
      const newComment = {
        id: doc.id,
        ...doc.data(),
      };
      comment.push(newComment); // myComment 로 잘못썼었음 ㅎ
    });

    setMyComment(comment);
  };
  useEffect(() => {
    getComments();
  }, []);

  // create
  const addComment = async () => {
    await addDoc(collection(dbService, 'comments'), {
      id: authService.currentUser?.uid,
      comment: inputComment,
      name: authService.currentUser?.displayName,
      profileImg: authService.currentUser?.photoURL,
      createdAt: Date.now(),
    });

    setInputComment('');
  };

  // delete
  const deleteComment = async (id: any) => {
    const userDoc = doc(dbService, 'comments', id);
    console.log(userDoc);

    await deleteDoc(userDoc);
  };

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
              {/* <CommentContent>
                <CommentPostHeader>
                  <CommentProfileImg />
                  <CommentProfile>
                    <CommentProfileName>닉네임</CommentProfileName>
                    <CommentProfileDate>날짜</CommentProfileDate>
                  </CommentProfile>
                </CommentPostHeader>
                <CommentViewArea>{myComment}</CommentViewArea>
              </CommentContent> */}
              {myComment.map((item: any) => {
                return (
                  <CommentContent key={item.id}>
                    <CommentPostHeader>
                      <CommentProfileImg src={item.profileImg} />
                      <CommentProfile>
                        <CommentProfileName>{item.name}</CommentProfileName>
                        <CommentProfileDate>
                          {item.createdAt}
                        </CommentProfileDate>
                      </CommentProfile>
                    </CommentPostHeader>
                    <CommentViewArea>{item.comment}</CommentViewArea>
                    <button
                      onClick={() => {
                        deleteComment(item.id);
                      }}
                    >
                      삭제
                    </button>
                  </CommentContent>
                );
              })}
            </CommnetScrollArea>
            <CommentWriteContainer>
              <CommentWriteBox>
                <CommentWriteArea>
                  <CommentWrite
                    type="text"
                    placeholder="댓글을 입력하세요."
                    value={inputComment}
                    onChange={(event) => {
                      setInputComment(event.target.value);
                    }}
                  />
                  <CommentBtn onClick={addComment} />
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
  width: 350px;
  padding: 30px 0px;
`;

const CommentsView = styled.div`
  flex: 1;
  box-sizing: border-box;
  height: min(100%, 100vh - 130px);
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

const CommentProfileImg = styled.img`
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
