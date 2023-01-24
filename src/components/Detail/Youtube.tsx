import React from 'react';
import styled from 'styled-components';

export default function Youtube() {
  return (
    <>
      <YoutubeView>
        <PlayerView></PlayerView>
        <TitleContentsCotainer>
          <Title>NJ train never stop 🚂</Title>
          <ArtistDateContainer>
            <ArtistWrap>
              <ArtistLogo></ArtistLogo>
              <ArtistName>NewJeans</ArtistName>
              <UploadDate>01.18. 18:05</UploadDate>
            </ArtistWrap>
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
