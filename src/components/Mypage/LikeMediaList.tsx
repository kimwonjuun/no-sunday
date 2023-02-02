import { useEffect, useState } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { dbService } from '@/common/firebase';
import LikeMediaItem from './LikeMediaItem';
import { ListWrapper } from './styles';

const LikeMediaList = ({ currentUser }: { currentUser: any }) => {
  const [items, setItems] = useState([]);

  // 유저가 좋아요한 영상 가져오기
  const getData = async () => {
    const q = query(
      collection(dbService, 'likes'),
      where('userId', '==', currentUser?.uid),
    );
    const querySnapshot = await getDocs(q);
    let dataArray: any = [];
    querySnapshot.forEach((doc: any) => {
      dataArray.push(doc.data());
    });
    setItems(dataArray);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ListWrapper>
        {items.map((item: any) => (
          <LikeMediaItem item={item} key={item.videoId} />
        ))}
      </ListWrapper>
    </>
  );
};

export default LikeMediaList;
