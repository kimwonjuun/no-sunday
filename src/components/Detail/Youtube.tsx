import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { textRegex } from './../../utils/VaildText';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { authService, dbService } from './../../common/firebase';
import { useState, useEffect } from 'react';

export default function Youtube() {
  const {
    pathname,
    state: { item },
  } = useLocation();

  // 디테일 페이지에서 보여지는 동영상 정보들
  const { title, channelTitle, publishTime, description, channelId } =
    item.snippet;

  // addDoc에 들어가는 videoId
  const { videoId } = item.id;

  // 날짜 정보
  const timestamp: any = { publishTime };
  const date: any = new Date(timestamp.publishTime.toString()).toLocaleString();

  const [like, setLike] = useState(false);

  //useEffect에 likedetail을 전역에서 사용하기 위한 useState
  const [checkedItem, setcheckedItem] = useState<any>([]);

  // 1. 하트 클릭 시 addDoc에 영상 정보와 isLike 추가
  const addLike = async () => {
    // 로그인 체크 ( 로그인 이동하는거 추가/ 얼럿창 띄우기 )
    await addDoc(collection(dbService, 'likes'), {
      title,
      channelTitle,
      channelId,
      videoId,
      publishTime,
      isLike: true,
      userId: authService.currentUser?.uid,
    });
    setLike(true);
  };

  // 클릭한 item.videoID와 dbseriv의 likes문서에 있는 videoID와 같은 친구들만 걸러서 changelikedetail 할당
  const changelikedetail = (checkedItem: any) => {
    return checkedItem.filter((item: any) => item.videoId === videoId);
  };

  // 2. 좋아요 눌른 정보들을 getDoc을 통해
  useEffect(() => {
    const likeClick = async () => {
      let selectedArray: any = [];
      const q = query(
        collection(dbService, 'likes'),
        where('userId', '==', authService.currentUser?.uid),
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        const likeObj = {
          id: doc.id,
          ...doc.data(),
        };

        selectedArray.push(likeObj);
      });
      // likedetail에는 내가 클릭한 모든 영상들의 정보가 들어가 있다.
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

  // 3.Like이면
  const isLikeChangeHandler = async () => {
    if (like) {
      await deleteDoc(doc(dbService, 'likes', checkedItem[0].id));
      setLike(false);
    }
  };

  return (
    <>
      <YoutubeView>
        <PlayerView>
          <iframe
            id="player"
            width="100%"
            height="100%"
            frameBorder="0"
            src={`http://www.youtube.com/embed/${item.id.videoId}`}
          ></iframe>
        </PlayerView>
        <TitleContentsCotainer>
          <Title>{textRegex(title)}</Title>
          <ArtistDateContainer>
            <ArtistContainer>
              <ArtistWrap>
                <ArtistLogo />
                <ArtistName>{channelTitle}</ArtistName>
                <UploadDate>{date}</UploadDate>
              </ArtistWrap>
            </ArtistContainer>
          </ArtistDateContainer>
          <ArtistLike>
            <HeartWrapper
              onClick={() => (like ? isLikeChangeHandler() : addLike())}
            >
              {/* 좋아요 유무 */}
              {like ? <LikeBtnFill /> : <LikeBtnLine />}
            </HeartWrapper>
          </ArtistLike>
        </TitleContentsCotainer>
        <DescriptionArea>{description}</DescriptionArea>
      </YoutubeView>
    </>
  );
}

const YoutubeView = styled.div`
  flex-grow: 1;
  overflow: hidden;
  padding: 30px 0px;
  width: 1015px;
`;

const PlayerView = styled.div`
  aspect-ratio: 16 / 9;
  flex: 2;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

const TitleContentsCotainer = styled.div`
  padding: 30px 0px 20px;
  position: relative;
`;

const Title = styled.div`
  color: rgb(255, 255, 255);
  padding-right: 100px;
  font-size: 30px;
  font-weight: 800;
  line-height: 36px;
`;

const ArtistDateContainer = styled.div`
  display: flex;
  padding-top: 13px;
`;

const ArtistContainer = styled.div`
  align-items: stretch;
  display: flex;
`;

const ArtistWrap = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

const ArtistLogo = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

const ArtistName = styled.div`
  color: rgb(238, 238, 238);
  display: block;
  font-size: 14px;
  line-height: 17px;
  margin-left: 7px;
`;

const ArtistLike = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

const HeartWrapper = styled.div`
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
`;
const LikeBtnLine = styled(AiOutlineHeart)`
  color: white;
`;
const LikeBtnFill = styled(AiFillHeart)`
  color: white;
`;

const UploadDate = styled.span`
  align-items: center;
  color: rgb(136, 136, 136);
  display: flex;
  font-size: 12px;
  line-height: 13px;
  margin-left: 15px;
`;

const DescriptionArea = styled.pre`
  margin: 20px 0px 15px;
  color: rgb(170, 170, 170);
  font-size: 14px;
  line-height: 19px;
`;
