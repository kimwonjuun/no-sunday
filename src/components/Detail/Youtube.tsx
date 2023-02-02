import { useLocation } from 'react-router-dom';
import { textRegex } from './../../utils/VaildText';
import SocialShare from './SocialShare';
import Likes from './Likes';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useRedux';
import {
  PlayerView,
  YoutubeView,
  TitleContentsCotainer,
  Title,
  ArtistDateContainer,
  ArtistContainer,
  ArtistWrap,
  ArtistLogo,
  ArtistName,
  UploadDate,
  ArtistLikeAndSocial,
  ArtistSocial,
  DropdownOptions,
  DescriptionArea,
  Social,
} from './styles';

export default function Youtube() {
  // 소셜 공유 옵션 상태 저장
  const [showOptions, setShowOptions] = useState(false);

  const {
    state: { item },
  } = useLocation();

  // 디테일 페이지에서 보여지는 동영상 정보들
  const {
    title,
    channelTitle,
    publishTime,
    description,
    channelId,
    thumbnails,
  } = item.snippet;

  // 날짜 정보
  const timestamp: any = { publishTime };
  const date: any = new Date(timestamp.publishTime.toString()).toLocaleString();

  // 아티스트 정보 가져오기
  const { artists } = useAppSelector((state) => state.artists);

  const artistLogoImg = artists.find(
    (artist) => artist?.channelId === channelId,
  );

  return (
    <>
      <YoutubeView>
        <PlayerView>
          <iframe
            title="title"
            id="player"
            width="100%"
            height="100%"
            src={`http://www.youtube.com/embed/${item.id.videoId}`}
            frameBorder="none"
          ></iframe>
        </PlayerView>
        <TitleContentsCotainer>
          <Title>{textRegex(title)}</Title>
          <ArtistDateContainer>
            <ArtistContainer>
              <ArtistWrap>
                <ArtistLogo src={artistLogoImg?.logoImg} />
                <ArtistName>{channelTitle}</ArtistName>
                <UploadDate>{date}</UploadDate>
              </ArtistWrap>
            </ArtistContainer>
            <ArtistLikeAndSocial>
              <Likes
                title={title}
                channelTitle={channelTitle}
                channelId={channelId}
                thumbnails={thumbnails}
                date={date}
              />
              <ArtistSocial>
                <Social
                  onClick={() => {
                    setShowOptions(!showOptions);
                  }}
                >
                  <DropdownOptions />
                </Social>
                {showOptions === true ? <SocialShare /> : null}
              </ArtistSocial>
            </ArtistLikeAndSocial>
          </ArtistDateContainer>
        </TitleContentsCotainer>
        <DescriptionArea>{description}</DescriptionArea>
      </YoutubeView>
    </>
  );
}
