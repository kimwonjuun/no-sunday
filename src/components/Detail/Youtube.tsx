import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { textRegex } from './../../utils/VaildText';

export default function Youtube() {
  const {
    state: { item },
  } = useLocation();

  const { title, channelTitle, publishTime, description } = item.snippet;

  const timestamp: any = { publishTime };
  const date: any = new Date(timestamp.publishTime.toString()).toLocaleString();

  console.log('date', date);

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
            <LikeBtn />
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

const LikeBtn = styled(AiOutlineHeart)`
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
