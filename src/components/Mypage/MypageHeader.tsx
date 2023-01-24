import styled from 'styled-components';

interface MypageHeadeProps {
  onSignOut: () => void;
}

const MypageHeader = ({ onSignOut }: MypageHeadeProps) => {
  return (
    <ProfileBg>
      <ProfileWrapper>
        <ImgWrapper>
          <ProfileImg src="/assets/default_profile.png" />
        </ImgWrapper>
        <InfoWrapper>
          <Nickname>닉네임</Nickname>
          <Email>user123@test.com</Email>
          <Logout onClick={onSignOut}>로그아웃</Logout>
        </InfoWrapper>
      </ProfileWrapper>
    </ProfileBg>
  );
};

export default MypageHeader;

const ProfileBg = styled.div`
  width: 100%;
  height: 400px;
  background-color: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img``;

const InfoWrapper = styled.div`
  margin-left: 3rem;
  cursor: default;
`;

const Nickname = styled.p`
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`;

const Email = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
`;

const Logout = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #bbb;
  cursor: pointer;
`;
