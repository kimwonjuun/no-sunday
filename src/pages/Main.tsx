import styled from 'styled-components';
import Logo from '../common/test-img/Logo.png';
// import testLogo from '../../public/assets/logo.png'; ??? 왜 안돼
import { dbService } from '../common/firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const [artists, setArtists] = useState<any[]>([]);

  const getArtist = async () => {
    const querySnapshot = await getDocs(collection(dbService, 'artists'));
    const artist: any = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
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
          {artists.map((item) => {
            return (
              <ArtistBox
                key={item.channelId}
                onClick={() => {
                  navigate(`/${item.channelId}`);
                }}
              >
                <ArtistBoxImgStyle src={item.memberImg} />
                <ArtistBoxLogoStyle src={item.logoImg} />
                <ArtistBoxNameStyle>
                  <ArtistBoxName>{item.name}</ArtistBoxName>
                </ArtistBoxNameStyle>
              </ArtistBox>
            );
          })}
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
const ArtistBox = styled.button`
  border-radius: 30px;
  width: 230px;
  height: 300px;
  display: inline-block;
  margin: 0 10px 50px 10px;
  position: relative;
`;
const ArtistBoxImgStyle = styled.img`
  border-bottom: 5px solid white;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 75%;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
`;
const ArtistBoxLogoStyle = styled.img`
  width: 80px;
  height: 80px;
  border: 5px solid white;
  border-radius: 50%;
  position: absolute;
  top: 48%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const ArtistBoxNameStyle = styled.div`
  background-color: white;

  width: 100%;
  height: 25%;
  border-radius: 0px 0px 20px 20px;
  box-sizing: border-box;
  padding: 50px;
  text-align: center;
`;
const ArtistBoxName = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 25px;
`;
