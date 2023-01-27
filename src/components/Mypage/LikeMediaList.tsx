import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
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
      ;
    </>
  );
};

export default LikeMediaList;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
`;
export const ThumbnailsImgWrap = styled.div`
  // aspect-ratio 썸네일 크기를 이미지나 동영상을 비율대로 줄이거나 늘리는 데 사용 속성
  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
`;
export const ThumbnailsTitle = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
export const ThumbnailsDate = styled.p`
  color: white;
  font-size: 13px;
  font-weight: 700;
`;
export const ThumbnailsView = styled.em`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 9px;
  bottom: 6px;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  line-height: 17px;
  padding: 0 6px;
  position: absolute;
  right: 6px;
  user-select: none;
  z-index: 30;
`;
