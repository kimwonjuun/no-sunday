import { useEffect, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { authService, storage } from 'common/firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import NickNameChangeInput from './NickNameChangeInput';
import {
  ProfileBg,
  ProfileWrapper,
  ProfileImg,
  InfoWrapper,
  Nickname,
  CurrentNickName,
  PencilIcon,
  Email,
  Logout,
  ImgWrapper,
} from './styles';

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

            <CurrentNickName>
              {newNickName ?? '익명'}
              <PencilIcon
                onClick={() => {
                  setShowNickNameChangeBtn(!showNickNameChangeBtn);
                }}
              />
            </CurrentNickName>

            {showNickNameChangeBtn === true ? (
              // <IconWrapper>
              <NickNameChangeInput
                setNewNickName={setNewNickName}
                setShowNickNameChangeBtn={setShowNickNameChangeBtn}
              />
            ) : // </IconWrapper>
            null}
          </Nickname>

          <Email>{userInfo?.email}</Email>
          <Logout onClick={onSignOut}>로그아웃</Logout>
        </InfoWrapper>
      </ProfileWrapper>
    </ProfileBg>
  );
};

export default MypageHeader;
