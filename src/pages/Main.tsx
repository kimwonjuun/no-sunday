import styled from 'styled-components';
import testLogo from '../common/test-img/Logo.png';
import { dbService } from '../common/firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

export default function Main() {
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
          {artists.map((a) => {
            return (
              <ArtistBox key={a.channelId}>
                <ArtistBoxImgStyle src={a.memberImg} />
                <ArtistBoxLogoStyle src={a.logoImg} />
                <ArtistBoxNameStyle>
                  <ArtistBoxName>{a.name}</ArtistBoxName>
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
  min-width: 750px;
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
  background: url(${testLogo});

  width: 500px;
  height: 150px;
`;

// MainPageComponents
const MainPageComponentsWrapper = styled.div`
  background-color: #f5f0f0;

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
const ArtistBox = styled.div`
  border-radius: 30px;
  width: 250px;
  height: 350px;
  display: inline-block;
  margin: 0 10px 50px 10px;
  position: relative;
`;
const ArtistBoxImgStyle = styled.img`
  background-color: black;

  border-bottom: 5px solid white;
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  height: 75%;
`;
const ArtistBoxLogoStyle = styled.img`
  background-color: black;

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
  border-radius: 0px 0px 30px 30px;
  box-sizing: border-box;
  padding: 50px;
  text-align: center;
`;
const ArtistBoxName = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`;
