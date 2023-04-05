import { authService, dbService } from 'common/firebase';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Arrow,
  CommentBtn,
  CommentHeader,
  CommentHeaderTitle,
  CommentHeaderWrap,
  CommentView,
  CommentWrite,
  CommentWriteArea,
  CommentWriteBox,
  CommentWriteContainer,
  CommentsView,
  CommentsViewer,
  CommnetScrollArea,
} from './styles';
import MyComment from './MyComment';

export default function Comment({ videoId }: { videoId: string }) {
  // 댓글 인풋
  const [inputComment, setInputComment] = useState<string>('');
  // 댓글 출력
  const [commentsList, setCommentsList] = useState<any>([]);
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
      setCommentsList(newComment);
    });
    return getComments;
  }, [videoId]);

  return (
    <>
      <CommentView>
        <CommentsView>
          <CommentsViewer>
            <CommentHeader>
              <CommentHeaderWrap>
                <CommentHeaderTitle>
                  {commentsList.length}개의 댓글
                </CommentHeaderTitle>
              </CommentHeaderWrap>
            </CommentHeader>
            <CommnetScrollArea>
              {commentsList.map((item: any) => {
                return (
                  <MyComment item={item} setCommentsList={setCommentsList} />
                );
              })}
            </CommnetScrollArea>
            <CommentWriteContainer>
              <CommentWriteBox>
                <CommentWriteArea>
                  <CommentWrite
                    type="text"
                    placeholder="댓글을 50자 이내로 입력하세요."
                    value={inputComment}
                    maxLength={50}
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
