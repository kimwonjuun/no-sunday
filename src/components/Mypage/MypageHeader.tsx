import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { updateProfile } from 'firebase/auth';
import { authService, storage } from '../../common/firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { AiFillEdit } from 'react-icons/ai';
import NickNameChangeInput from './NickNameChangeInput';

interface MypageHeaderProps {
  onSignOut: () => void;
  currentUser: any;
}

interface UserInfoTypes {
  nickname: string | null;
  email: string;
  photoUrl: string | null;
}

const MypageHeader = ({ onSignOut, currentUser }: MypageHeaderProps) => {
  const user: any = authService?.currentUser;
  const [userInfo, setUserInfo] = useState<UserInfoTypes>();
  const [photoURL, setPhotoURL] = useState<any>(currentUser.photoURL);

  const [newNickName, setNewNickName] = useState(currentUser.displayName);
  const [showNickNameChangeBtn, setShowNickNameChangeBtn] = useState(false);

  const getUserInfo = () => {
    setUserInfo({
      nickname: currentUser?.displayName ?? '익명',
      email: currentUser?.email ?? '',
      photoUrl: currentUser?.photoURL ?? '/assets/default_profile.png',
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const uploadFB = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoURL(reader.result);
    };

    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0],
    );

    const file_url = await getDownloadURL(uploaded_file.ref);

    updateProfile(user, {
      photoURL: file_url,
    })
      .then(() => {})
      .catch((error) => {
        alert('이미지 업로드 실패');
      });
  };

  // console.log(photoURL);

  return (
    <ProfileBg>
      <ProfileWrapper>
        <ImgWrapper>
          <label htmlFor="img">
            <ProfileImg
              src={photoURL ? photoURL : '/assets/default_profile.png'}
            />
            <input
              type="file"
              onChange={uploadFB}
              accept="image/*"
              id="img"
              style={{ display: 'none' }}
            ></input>
          </label>
        </ImgWrapper>
        <InfoWrapper>
          <Nickname>
            {/* {userInfo?.nickname} 이게 아니라  */}
            {/* 이것이다 */}

            <CurrentNickNameWrapper>
              {newNickName ?? '익명'}
              <PencilIcon
                onClick={() => {
                  setShowNickNameChangeBtn(!showNickNameChangeBtn);
                }}
              />
            </CurrentNickNameWrapper>

            {showNickNameChangeBtn === true ? (
              <IconWrapper>
                <NickNameChangeInput
                  setNewNickName={setNewNickName}
                  setShowNickNameChangeBtn={setShowNickNameChangeBtn}
                />
              </IconWrapper>
            ) : null}
          </Nickname>

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
  /* max-width: 500px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  width: 300px;
  margin-left: 3rem;
  cursor: default;
`;

const Nickname = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

const Email = styled.p`
  color: #ddd;
  font-size: 15px;
  font-weight: 500;

  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Logout = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #eee;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;

// 김원준css

const IconWrapper = styled.div``;

const CurrentNickNameWrapper = styled.div`
  align-items: center;
  display: flex;
`;
const PencilIcon = styled(AiFillEdit)`
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;
