import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import { textRegex } from './../../utils/VaildText';
import SocialShare from './SocialShare';
import Likes from './Likes';
import { useState } from 'react';

export default function Youtube() {
  // 소셜 공유 옵션 상태 저장
  const [showOptions, setShowOptions] = useState(false);

  const {
    pathname,
    state: { item, page },
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
            <ArtistLikeAndSocial>
              {/* title, channelTitle, channelId, thumbnails, videoId date */}
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

const YoutubeView = styled.div`
  overflow: hidden;
  padding: 30px 0px;
  width: 1015px;
  margin-bottom: 2rem;
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
  justify-content: space-between;
  align-items: center;
`;

const ArtistContainer = styled.div`
  align-items: center;
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
  font-size: 16px;
  line-height: 17px;
  margin-left: 7px;
`;

const ArtistLikeAndSocial = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

const ArtistSocial = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  position: relative;
`;

const Social = styled.span`
  display: block;
`;

const DropdownOptions = styled(HiDotsVertical)`
  font-size: 20px;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
`;

const ArtistLike = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

const HeartWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 1.2rem;
`;
const LikeBtnLine = styled(AiOutlineHeart)`
  font-size: 26px;
  color: white;
  cursor: pointer;
`;
const LikeBtnFill = styled(AiFillHeart)`
  font-size: 26px;
  color: white;
  cursor: pointer;
`;

const UploadDate = styled.span`
  align-items: center;
  color: rgb(136, 136, 136);
  display: flex;
  font-size: 14px;
  line-height: 13px;
  margin-left: 15px;
  padding-top: 3px;
`;

const DescriptionArea = styled.p`
  width: 100%;
  margin: 20px 0px 15px;
  color: #ccc;
  line-height: 19px;
`;
