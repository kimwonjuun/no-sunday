import { useDispatch } from 'react-redux';
import { useState, useEffect, useId } from 'react';
import CommentItem from './CommentItem';
import { ListWrapper } from './LikeMediaList';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { authService, dbService } from '../../common/firebase';

const CommentList = () => {
  // 김원준 일 중
  // const uniqueId = useId();
  const [getMyComment, setGetMyComment] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(dbService, 'comments'),
      where('id', '==', authService.currentUser?.uid),
      orderBy('createdAt', 'desc'),
    );

    const getMyComments = onSnapshot(q, (snapshot) => {
      const newMyComment = snapshot.docs.map((doc) => ({
        documentId: doc.id,
        ...doc.data(),
      }));
      setGetMyComment(newMyComment);
    });
    return getMyComments;
  }, []);
  console.log(getMyComment);

  return (
    <ListWrapper>
      {getMyComment.map((item: any) => (
        <CommentItem item={item} />
      ))}
    </ListWrapper>
  );
};

export default CommentList;
