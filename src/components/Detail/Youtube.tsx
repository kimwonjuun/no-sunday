import { channel } from 'diagnostics_channel';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ChannelInfo from './ChannelInfo';

export default function Youtube() {
  const {
    state: { item },
  } = useLocation();

  const { title, channelId, channelTitle } = item.snippet;

  return (
    <>
      <YoutubeView>
        <PlayerView>
          <iframe
            id="player"
            width="100%"
            height="100%"
            src={`http://www.youtube.com/embed/${item.id.videoId}`}
          ></iframe>
        </PlayerView>
        <TitleContentsCotainer>
          <Title>{title}</Title>
          <ArtistDateContainer>
            <ArtistContainer>
              <ArtistWrap>
                <ArtistLogo />
                <ArtistName>NewJeans</ArtistName>{' '}
                <UploadDate>01.18. 18:05</UploadDate>
              </ArtistWrap>
              <ArtistLike>
                <LikeBtn />
              </ArtistLike>
            </ArtistContainer>
          </ArtistDateContainer>
        </TitleContentsCotainer>
        <DescriptionArea>NJ train never stop 🚂</DescriptionArea>
      </YoutubeView>
    </>
  );
}

const YoutubeView = styled.div`
  flex-grow: 1;
  overflow: hidden;
  padding: 30px 0px;
`;

const PlayerView = styled.div`
  aspect-ratio: 16 / 9;
  flex: 2;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: red;
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
  color: red;
`;

const ArtistContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const ArtistWrap = styled.div`
  align-items: center;
  display: flex;
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
  margin: 0 -2px -2px auto;
`;

const LikeBtn = styled.div`
  margin-right: -8px;
  position: relative;
`;

const UploadDate = styled.span`
  align-items: center;
  color: rgb(136, 136, 136);
  display: flex;
  font-size: 12px;
  line-height: 13px;
  margin-left: 15px;
`;

const DescriptionArea = styled.div`
  margin: 20px 0px 15px;
  color: rgb(170, 170, 170);
  font-size: 14px;
  line-height: 19px;
`;
