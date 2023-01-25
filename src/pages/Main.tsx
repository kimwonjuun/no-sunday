import styled from 'styled-components';
import Logo from '../common/test-img/Logo.png';
// import testLogo from '../../public/assets/logo.png'; ??? 왜 안돼
import { dbService } from '../common/firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import Artist from '../components/Auth/Main/Artist';

export default function Main() {
  const [artists, setArtists] = useState<any[]>([]);

  const getArtist = async () => {
    const querySnapshot = await getDocs(collection(dbService, 'artists'));
    const artist: any = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, doc.data);
      const newArtist = {
        id: doc.id,
        ...doc.data(),
      };
      artist.push(newArtist);
    });
    setArtists(artist);
  };
  useEffect(() => {
    getArtist();
  }, []);

  return (
    <MainPageWrapper>
      <MainPageIntroWrapper>
        <MainPageIntroArea />
      </MainPageIntroWrapper>

      <MainPageComponentsWrapper>
        <MainPageArtistBoxArea>
          {artists.map((item: any) => (
            <Artist item={item} key={item.id} />
          ))}
        </MainPageArtistBoxArea>
      </MainPageComponentsWrapper>
    </MainPageWrapper>
  );
}

// MainPage
const MainPageWrapper = styled.div`
  font-size: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* min-height: calc(100vh - 80px); 헤더, 푸터 들어올 시 그 만큼의 픽셀 빼주기 */
  min-width: 200px;
  min-height: 100vh;
`;

// MainPageIntro
const MainPageIntroWrapper = styled.div`
  background-color: #000;

  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainPageIntroArea = styled.div`
  background: url(${Logo});

  width: 500px;
  height: 150px;
`;

// MainPageComponents
const MainPageComponentsWrapper = styled.div`
  background-color: #f7f7f7;

  padding: 0 160px;
  position: relative;
`;
const MainPageArtistBoxArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 70px;
`;
