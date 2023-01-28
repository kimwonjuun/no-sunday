import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { query, collection, where, getDocs, orderBy } from 'firebase/firestore';
import { authService, dbService } from './../../common/firebase';
import LikeMediaItem from './LikeMediaItem';

const LikeMediaList = () => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    const q = query(
      collection(dbService, 'likes'),
      where('userId', '==', authService.currentUser?.uid),
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

  console.log(items);

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

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px 20px;
  padding-top: 20px;
`;
