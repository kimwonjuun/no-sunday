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
import { useEffect, useState } from 'react';
import { authService, dbService } from '../../common/firebase';
import { timeToLocaleString } from '../../utils/Date';
import { useNavigate } from 'react-router-dom';
import {
  CommentsView,
  CommentView,
  CommentsViewer,
  CommentHeader,
  CommentHeaderWrap,
  CommentHeaderTitle,
  CommnetScrollArea,
  CommentContent,
  CommentPostHeader,
  CommentProfileWrapper,
  CommentProfileImg,
  CommentProfile,
  CommentProfileName,
  CommentProfileDate,
  DeleteWrapper,
  DeleteIcon,
  CommentViewArea,
  CommentWriteContainer,
  CommentWriteBox,
  CommentWriteArea,
  CommentWrite,
  CommentBtn,
  Arrow,
} from './styles';

export default function Comment({ videoId }: { videoId: string }) {
  // 댓글 인풋
  const [inputComment, setInputComment] = useState<string>('');
  // 댓글 출력
  const [myComment, setMyComment] = useState<any[]>([]);
  const navigate = useNavigate();

  // create
  const addComment = async () => {
    if (!authService.currentUser) {
      alert('댓글은 로그인 후 작성이 가능합니다.');
      navigate('/login');
      return;
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

  // read
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
  }, [videoId]);

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
              {myComment.map((item: any) => {
                return (
                  <CommentContent key={item.documentId}>
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
