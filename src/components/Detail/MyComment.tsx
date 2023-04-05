import { timeToLocaleString } from 'utils/Date';
import { useState } from 'react';
import {
  CheckUpdateIcon,
  CommentContent,
  CommentPostHeader,
  CommentProfile,
  CommentProfileDate,
  CommentProfileImg,
  CommentProfileName,
  CommentProfileWrapper,
  CommentViewArea,
  DeleteIcon,
  EditCommentInput,
  EditCommentWrapper,
  EditIconWrapper,
  UpdateIcon,
} from './styles';
import { authService, dbService } from 'common/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

export default function MyComment({ item, setCommentsList }: any) {
  // 댓글 수정
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState(item.comment);

  // update
  const editComment = async (documentId: any) => {
    // setCommentsList(inputText);
    await updateDoc(doc(dbService, 'comments', documentId), {
      comment: inputText,
    })
      .then(() => {
        alert('댓글 수정 완료');
      })
      .catch((error) => {
        alert('댓글 수정 실패');
      });
  };
  const handleEditComment = () => {
    editComment(item.documentId);
    setShowInput(false);
  };

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
            <EditIconWrapper>
              <UpdateIcon
                onClick={() => {
                  setShowInput(!showInput);
                }}
              />
              <DeleteIcon
                onClick={() => {
                  deleteComment(item.documentId);
                }}
              />
            </EditIconWrapper>
          ) : (
            ''
          )}
        </CommentPostHeader>
        <CommentViewArea>
          {showInput ? (
            <EditCommentWrapper>
              <EditCommentInput
                type="text"
                placeholder="댓글은 50자 이내로 수정할 수 있습니다."
                value={inputText}
                maxLength={50}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
              <CheckUpdateIcon onClick={handleEditComment} />
            </EditCommentWrapper>
          ) : (
            item.comment
          )}
        </CommentViewArea>
      </CommentContent>
    </>
  );
}
