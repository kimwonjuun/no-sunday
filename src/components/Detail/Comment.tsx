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
import { RiDeleteBinLine } from 'react-icons/ri';
import { timeToLocaleString } from '../../utils/Date';
import { ArrowIcon } from '../ScrollToTopButton';
import { useNavigate } from 'react-router-dom';

export default function Comment({ videoId }: { videoId: string }) {
  const uniqueId = useId();
  // 원준 일하는 중
  // 댓글 인풋
  const [inputComment, setInputComment] = useState<string>('');
  // 댓글 출력
  const [myComment, setMyComment] = useState<any[]>([]);
  const navigate = useNavigate();
  // 테스트용 온클릭 함수
  // const addComment = () => {
  //   setMyComment([...myComment, inputComment]);
  //   setInputComment('');
  // };

  // 파이어베이스

  // create
  const addComment = async () => {
    if (!authService.currentUser) {
      alert('댓글은 로그인 후 작성이 가능합니다.');
      navigate('/login');
    }

    if (!inputComment) {
      alert('댓글을 입력해주세요.');
      return;
    }

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
    const deleteFlag = window.confirm('댓글을 삭제하시겠습니까?');
    if (!deleteFlag) {
      return;
    }

    await deleteDoc(doc(dbService, 'comments', documentId));
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
                      <CommentProfileWrapper>
                        <CommentProfileImg src={item.profileImg} />
                        <CommentProfile>
                          <CommentProfileName>{item.name}</CommentProfileName>
                          <CommentProfileDate>
                            {timeToLocaleString(item.createdAt)}
                          </CommentProfileDate>
                        </CommentProfile>
                      </CommentProfileWrapper>
                      {authService.currentUser?.uid === item.id ? (
                        <DeleteWrapper>
                          <DeleteIcon
                            onClick={() => {
                              deleteComment(item.documentId);
                            }}
                          />
                        </DeleteWrapper>
                      ) : (
                        ''
                      )}
                    </CommentPostHeader>
                    <CommentViewArea>{item.comment} </CommentViewArea>
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
                  <CommentBtn onClick={addComment}>
                    <Arrow />
                  </CommentBtn>
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

const CommentHeader = styled.header`
  box-sizing: border-box;
  flex-shrink: 0;
  height: 70px;
  padding: 24px 20px;
`;

const CommentHeaderWrap = styled.div`
  align-items: center;
  display: flex;
`;

const CommentProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
  margin-bottom: 1rem;
`;

const CommentPostHeader = styled.div`
  justify-content: space-between;
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

  &::placeholder {
    color: #aaa;
  }
`;

const CommentBtn = styled.div`
  background-image: linear-gradient(
    to bottom,
    #e32586 0%,
    #e32586 20%,
    #54bfcc 100%
  );
  width: 40px;
  height: 40px;
  margin: 0 0 5px 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      #c32074 0%,
      #c32074 20%,
      #48a5b1 100%
    );
  }
`;

const Arrow = styled(ArrowIcon)`
  font-size: 20px;
`;

const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;
`;
