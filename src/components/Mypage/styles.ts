import styled from 'styled-components';
import { AiFillEdit } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';

/* 1. CommentItem.tsx */
export const ItemWrapper = styled.div`
  width: 400px;
  min-height: 140px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 28px;
  cursor: pointer;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrapper1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImg1 = styled.img`
  width: 32px;
  height: 32px;
`;

export const Writer = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-left: 10px;
`;

export const CreatedAt = styled.p`
  font-size: 14px;
  color: #777;
`;

export const CommentText = styled.p`
  color: #343434;
  margin: 1rem 0;

  &:hover {
    color: #54bfcc;
  }
`;

/* 1. CommentItem.tsx */

/* 2. LikeMediaItem.tsx */
export const Wrapper = styled.div`
  margin-bottom: 1rem;

  &:hover {
    img {
      transform: scale(1.1);
    }
    h2 {
      color: #ff0098;
    }
  }
`;

export const ThumbnailsImgWrap = styled.div`
  // aspect-ratio 썸네일 크기를 이미지나 동영상을 비율대로 줄이거나 늘리는 데 사용 속성
  aspect-ratio: 320/180;
  border-radius: 14px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.6rem;
  cursor: pointer;

  img {
    transition: all 300ms ease-in-out;
  }
`;
export const ThumbnailsTitle = styled.h2`
  color: black;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ThumbnailsDate = styled.p`
  color: #7d7c7c;
  font-size: 14px;
`;
export const ThumbnailsView = styled.em`
  border-radius: 9px;
  bottom: 6px;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  line-height: 17px;
  padding: 0 6px;
  position: absolute;
  right: 6px;
  user-select: none;
  z-index: 30;
`;
/* 2. LikeMediaItem.tsx */

/* 3. LikeMediaList.tsx */
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px 20px;
  padding-top: 20px;
`;
/* 3. LikeMediaList.tsx */

/* 4. MyPageHeader.tsx */
export const ProfileBg = styled.div`
  width: 100%;
  height: 340px;
  background-image: url('/assets/mypage_bg.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  /* max-width: 500px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  width: 300px;
  margin-left: 3rem;
  cursor: default;
`;

export const Nickname = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

export const Email = styled.p`
  color: #ddd;
  font-size: 15px;
  font-weight: 500;

  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Logout = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #eee;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;

export const IconWrapper = styled.div`
  // 하위 컴포넌트 묶어두기 위한 컴포넌트
`;

export const CurrentNickName = styled.div`
  align-items: center;
  display: flex;
`;
export const PencilIcon = styled(AiFillEdit)`
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;

/* 4. MyPageHeader.tsx */

/* 5. NickNameChangeInput.tsx */
export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const InputStyle = styled.input`
  padding: 10px;
  margin-top: 5px;

  background-color: #cab0c0;
  border-radius: 10px;
  border-style: none;
  width: 210px;
  height: 20px;
  font-size: 15px;
  font-weight: 700;
  outline: 0;
  color: white;

  ::placeholder {
    font-size: 13px;
    color: #494848;
  }
`;

export const CheckIcon = styled(FiCheck)`
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;

/* 5. NickNameChangeInput.tsx */
