import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  where,
} from 'firebase/firestore';
import React, { useEffect, useId, useState } from 'react';
import styled from 'styled-components';
import { authService, dbService } from '../../common/firebase';
import { timeToLocaleString } from '../../utils/Date';

export default function Comment({ videoId }: { videoId: string }) {
  const uniqueId = useId();
  // 원준 일하는 중
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

  // create
  const addComment = async () => {
    await addDoc(collection(dbService, 'comments'), {
      videoId: videoId,
      id: authService.currentUser?.uid,
      comment: inputComment,
      name: authService.currentUser?.displayName ?? '익명',
      profileImg: authService.currentUser?.photoURL,
      createdAt: Date.now(),
    });

    setInputComment('');
  };

  // read: onSnapshot 넣어야 할 위치를 찾기 힘들어서 밑에 새로 생성함.
  // const getComments = async () => {
  //   const q = query(collection(dbService, 'comments'), orderBy('createdAt'));
  //   const comment: any = [];
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     const newComment = {
  //       id: doc.id,
  //       ...doc.data(),
  //     };
  //     comment.push(newComment); // myComment 로 잘못썼었음 ㅎ
  //   });

  //   setMyComment(comment);
  // };
  // useEffect(() => {
  //   getComments();
  // }, []);

  useEffect(() => {
    const q = query(
      collection(dbService, 'comments'),
      where('videoId', '==', videoId),
      orderBy('createdAt', 'desc'),
    );
    console.log(q);

    const getComments = onSnapshot(q, (snapshot) => {
      const newComment = snapshot.docs.map((doc) => ({
        documentId: doc.id,
        ...doc.data(),
      }));
      setMyComment(newComment);
    });
    return getComments;
  }, []);
  console.log(myComment);

  // delete
  // uid 말고 컬렉션 안의 문서를?? 가져와야함. documentId: doc.id, -> 얘가 그 녀석이었다.

  const deleteComment = async (documentId: any) => {
    const userDoc = doc(dbService, 'comments', documentId);
    // console.log(userDoc);
    await deleteDoc(userDoc);
  };

  return (
    <>
      <CommentView>
        <CommentsView>
          <CommentsViewer>
            <CommentHeader>
              <CommentHeaderWrap>
                <CommentHeaderTitle>
                  {myComment.length}개의 댓글
                </CommentHeaderTitle>
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
                  <CommentContent key={uniqueId}>
                    <CommentPostHeader>
                      <CommentProfileImg src={item.profileImg} />
                      <CommentProfile>
                        <CommentProfileName>{item.name}</CommentProfileName>
                        <CommentProfileDate>
                          {timeToLocaleString(item.createdAt)}
                        </CommentProfileDate>
                      </CommentProfile>
                    </CommentPostHeader>
                    <CommentViewArea>
                      {item.comment}{' '}
                      <button
                        onClick={() => {
                          deleteComment(item.documentId);
                        }}
                      >
                        삭제
                      </button>
                    </CommentViewArea>
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
