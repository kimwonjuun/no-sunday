import { useState, useEffect } from 'react';
import CommentItem from './CommentItem';
import { ListWrapper } from './styles';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { dbService } from 'common/firebase';

const CommentList = ({ currentUser }: { currentUser: any }) => {
  const [getMyComment, setGetMyComment] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(dbService, 'comments'),
      where('id', '==', currentUser.uid),
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

  return (
    <ListWrapper>
      {getMyComment.map((item: any) => (
        <CommentItem key={item.documentId} item={item} />
      ))}
    </ListWrapper>
  );
};

export default CommentList;
