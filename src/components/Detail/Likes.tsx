import { authService, dbService } from '../../common/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArtistLike, HeartWrapper, LikeBtnFill, LikeBtnLine } from './styles';

interface LikesProps {
  title: string;
  channelTitle: string;
  channelId: string;
  thumbnails: any;
  date: string;
}

export default function Likes({
  title,
  channelTitle,
  channelId,
  thumbnails,
  date,
}: LikesProps) {
  const {
    pathname,
    state: { item },
  } = useLocation();

  const navigate = useNavigate();

  const [like, setLike] = useState(false);

  //useEffect에 likedetail을 전역에서 사용하기 위한 useState
  const [checkedItem, setcheckedItem] = useState<any>([]);

  // thumbnails url오류가 떠서 thumbnails.high.url을 따로 할당해주었다.
  const thumbnail = thumbnails.high.url;

  // addDoc에 들어가는 videoId
  const { videoId } = item.id;

  // 1. 하트 클릭 시 addDoc에 영상 정보와 isLike 추가
  const addLike = async () => {
    // 로그인 체크 ( 로그인 이동하는거 추가/ 얼럿창 띄우기 )
    if (!authService.currentUser) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }

    await addDoc(collection(dbService, 'likes'), {
      title,
      channelTitle,
      channelId,
      videoId,
      thumbnail,
      publishTime: date,
      isLike: true,
      userId: authService.currentUser?.uid,
    });
    setLike(true);
  };

  // 클릭한 item.videoID와 dbseriv의 likes문서에 있는 videoID와 같은 친구들만 걸러서 changelikedetail 할당
  const changelikedetail = (checkedItem: any) => {
    return checkedItem.filter((item: any) => item.videoId === videoId);
  };

  // 2. 좋아요 눌른 정보들을 getDoc을 통해 가져옴
  useEffect(() => {
    if (!authService.currentUser) {
      setLike(false);
      return;
    }

    const likeClick = async () => {
      let selectedArray: any = [];
      const q = query(
        collection(dbService, 'likes'),
        where('userId', '==', authService.currentUser?.uid),
        // orderBy('createdAt', 'desc'),
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        const likeObj = {
          id: doc.id,
          ...doc.data(),
        };

        selectedArray.push(likeObj);
      });
      // selectedArray에는 내가 클릭한 모든 영상들의 정보가 들어가 있다.
      // changeIikedetail의 함수에 selectedArray을 인자로 넘겨줘서 filter를 거쳐서 내가 클릭한 영상의 아이디 값만 filteredlike에 할당된다.
      const filteredlike = changelikedetail(selectedArray);
      // filteredlike를 전역에서 사용할 수 있게 setchckedItem에 넘겨준다.
      setcheckedItem(filteredlike);
      // filteredlike의 길이가 0보다 크면 true실행 아니면 false
      setLike(filteredlike.length > 0 ? true : false);
    };
    likeClick();
    // pathname을 추가해서 다시 userEffect가 실행이 된다.
  }, [like, pathname]);

  // 3.채워진 하트 클릭 시 deleteDoc
  const isLikeChangeHandler = async () => {
    if (like) {
      await deleteDoc(doc(dbService, 'likes', checkedItem[0].id));
      setLike(false);
    }
  };

  return (
    <div>
      <ArtistLike>
        <HeartWrapper
          onClick={() => (like ? isLikeChangeHandler() : addLike())}
        >
          {/* 좋아요 유무 */}
          {like ? <LikeBtnFill /> : <LikeBtnLine />}
        </HeartWrapper>
      </ArtistLike>
    </div>
  );
}
