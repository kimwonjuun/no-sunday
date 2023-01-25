import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { authService } from '../../common/firebase';

interface MypageHeadeProps {
  onSignOut: () => void;
}

interface UserInfoTypes {
  nickname: string | null;
  email: string;
  photoUrl: string | null;
}

const MypageHeader = ({ onSignOut }: MypageHeadeProps) => {
  const [userInfo, setUserInfo] = useState<UserInfoTypes>();

  const getUserInfo = () => {
    const user = authService.currentUser;

    setUserInfo({
      nickname: user?.displayName ?? '익명',
      email: user?.email ?? '',
      photoUrl: user?.photoURL ?? '/assets/default_profile.png',
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileBg>
      <ProfileWrapper>
        <ImgWrapper>
          <ProfileImg
            src={userInfo?.photoUrl ?? '/assets/default_profile.png'}
          />
        </ImgWrapper>
        <InfoWrapper>
          <Nickname>{userInfo?.nickname}</Nickname>
          <Email>{userInfo?.email}</Email>
          <Logout onClick={onSignOut}>로그아웃</Logout>
        </InfoWrapper>
      </ProfileWrapper>
    </ProfileBg>
  );
};

export default MypageHeader;

const ProfileBg = styled.div`
  width: 100%;
  height: 340px;
  background-image: url('/assets/mypage_bg.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  min-width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  margin-left: 3rem;
  cursor: default;
`;

const Nickname = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

const Email = styled.p`
  color: #ddd;
  margin-bottom: 2.4rem;
`;

const Logout = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #eee;
  cursor: pointer;
`;
