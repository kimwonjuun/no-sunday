import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ArrowIcon } from '../ScrollTopTopButton/style';
import { AiOutlineHeart, AiFillHeart, AiFillEdit } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';
import { FiCheck } from 'react-icons/fi';

/* 1. Comment.tsx */
export const CommentView = styled.div`
  margin: 0 0 0 50px;
  width: 410px;
  padding: 30px 0px;

  @media screen and (min-width: 1200px) {
    margin-left: 90px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa; /* 또는 트랙에 추가한다 */
  }
`;

export const CommentsView = styled.div`
  flex: 1;
  box-sizing: border-box;
  height: min(100%, 100vh - 130px);
  min-height: 660px;
  position: sticky;
  background-color: rgb(46, 46, 46);
  border-radius: 20px;
`;

export const CommentsViewer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export const CommentHeader = styled.header`
  box-sizing: border-box;
  flex-shrink: 0;
  height: 70px;
  padding: 24px 20px;
`;

export const CommentHeaderWrap = styled.div`
  align-items: center;
  display: flex;
`;

export const CommentProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentHeaderTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  color: white;
`;

export const CommnetScrollArea = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px 20px 20px;
  position: relative;
`;

export const CommentContent = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const CommentPostHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const CommentProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

export const CommentProfile = styled.div`
  margin-left: 8px;
  overflow: hidden;
`;

export const CommentProfileName = styled.div`
  display: block;
  font-size: 14px;
  line-height: 17px;
  overflow: hidden;
  font-weight: bold;
  color: #eee;
`;

export const CommentProfileDate = styled.div`
  align-items: center;
  display: flex;
  margin-top: 2px;
  font-size: 12px;
  line-height: 14px;
  color: #8e8e8e;
`;

export const CommentViewArea = styled.div`
  line-height: 21px;
  overflow-wrap: break-word;
  padding: 7px 0 7px 42px;
  position: relative;
  color: white;
`;

export const CommentWriteContainer = styled.div`
  display: flex;
  flex: 0 0 75px;
  flex-direction: column;
`;

export const CommentWriteBox = styled.div`
  border-top: none;
  padding: 15px 18px;
`;

export const CommentWriteArea = styled.div`
  align-items: flex-end;
  display: flex;
`;

export const CommentWrite = styled.input`
  background-color: #444;
  color: #eee;
  height: 22px;
  border-radius: 23px;
  box-sizing: border-box;
  flex-grow: 1;
  min-height: 46px;
  padding: 12px 18px;

  &::placeholder {
    color: #aaa;
  }
`;

export const CommentBtn = styled.div`
  background-image: linear-gradient(
    to bottom,
    #e32586 0%,
    #e32586 20%,
    #54bfcc 100%
  );
  width: 40px;
  height: 40px;
  margin: 0 0 5px 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      #c32074 0%,
      #c32074 20%,
      #48a5b1 100%
    );
  }
`;

export const Arrow = styled(ArrowIcon)`
  font-size: 20px;
`;

export const EditIconWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const UpdateIcon = styled(AiFillEdit)`
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  font-size: 1.2rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;

export const EditCommentWrapper = styled.div``;
export const EditCommentInput = styled.input`
  width: 16rem;
  height: 1.5rem;
`;

export const CheckUpdateIcon = styled(FiCheck)`
  font-size: 1.2rem;
  margin-left: 0.9rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }

  left: -1rem;
`;

/* 1. Comment.tsx */

/* 2. DetailView.tsx */
export const ContentFrameView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentsView = styled.div`
  background-color: rgb(34, 34, 34);
  box-sizing: border-box;
  padding: 0px 50px 60px;
`;

export const ContentView = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 1635px;
  min-width: 1100px;
`;

export const RelatedContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1635px;
  min-width: 1100px;
  padding-top: 40px;
`;

export const RelatedContentTitle = styled.div`
  color: #eee;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

export const RelatedContentNumber = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 19px 0 30px;
  color: #ccc;
  font-size: 14px;
  line-height: 16px;
`;

export const RelatedContentList = styled.div`
  grid-gap: 30px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
`;

/* 2. DetailView.tsx */

/* 3. Likes.tsx */
export const ArtistLike = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;
export const HeartWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 1.2rem;
`;
export const LikeBtnFill = styled(AiFillHeart)`
  font-size: 26px;
  color: white;
  cursor: pointer;
`;
export const LikeBtnLine = styled(AiOutlineHeart)`
  font-size: 26px;
  color: white;
  cursor: pointer;
`;

/* 3. Likes.tsx */

/* 4. RelatedContent.tsx */
export const Content = styled.div`
  cursor: pointer;
`;

export const ContentThumbnail = styled.div`
  aspect-ratio: 320/180;
  width: auto;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
`;

export const ContentTitle = styled.div`
  color: #eee;
  display: -webkit-box;
  font-weight: 600;
  line-height: 19px;
  margin-top: 15px;
`;

export const ContentDate = styled.div`
  align-items: center;
  color: #8e8e8e;
  display: flex;
  font-size: 12px;
  line-height: 13px;
  align-items: center;
  display: flex;
  margin-top: 6px;
`;

/* 4. RelatedContent.tsx */

/* 5. SocialShare.tsx */
export const DropdownOption = styled.div`
  position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width: 200px;
  border-radius: 8px;
  padding: 15px;
  top: 25px;
  right: 5px;
`;

export const KakaoShareButton = styled.button`
  all: unset;
`;

export const TwitterShare = styled(BsTwitter)`
  margin-right: 5px;
  size: 15px;
`;

export const KakaoShare = styled(RiKakaoTalkFill)`
  margin-right: 5px;
  size: 15px;
`;

export const Wrapping = styled.div`
  align-items: center;
  display: flex;
`;

export const SharePh = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

/* 5. SocialShare.tsx */

/* 6. Youtube.tsx */
export const YoutubeView = styled.div`
  overflow: hidden;
  padding: 30px 0px;
  width: 1150px;
  margin-bottom: 2rem;
`;

export const PlayerView = styled.div`
  aspect-ratio: 16 / 9;
  flex: 2;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const TitleContentsCotainer = styled.div`
  padding: 30px 0px 20px;
  position: relative;
`;

export const Title = styled.div`
  color: rgb(255, 255, 255);
  padding-right: 100px;
  font-size: 30px;
  font-weight: 800;
  line-height: 36px;
`;

export const ArtistDateContainer = styled.div`
  display: flex;
  padding-top: 13px;
  justify-content: space-between;
  align-items: center;
`;

export const ArtistContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const ArtistWrap = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

export const ArtistLogo = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

export const ArtistName = styled.div`
  color: rgb(238, 238, 238);
  display: block;
  font-size: 16px;
  line-height: 17px;
  margin-left: 7px;
`;

export const ArtistLikeAndSocial = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

export const ArtistSocial = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  position: relative;
`;

export const Social = styled.span`
  display: block;
`;

export const DropdownOptions = styled(HiDotsVertical)`
  font-size: 20px;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
`;

export const UploadDate = styled.span`
  align-items: center;
  color: rgb(136, 136, 136);
  display: flex;
  font-size: 14px;
  line-height: 13px;
  margin-left: 15px;
  padding-top: 3px;
`;

export const DescriptionArea = styled.p`
  width: 100%;
  margin: 20px 0px 15px;
  color: #ccc;
  line-height: 19px;
`;
