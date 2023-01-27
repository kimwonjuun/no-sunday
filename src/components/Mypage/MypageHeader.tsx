import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { getAuth, updateProfile } from 'firebase/auth';
import { authService, storage } from '../../common/firebase';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from 'firebase/storage';

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
  const user: any = authService?.currentUser;
  const [photoURL, setPhotoURL] = useState<any>(user.photoURL);
  const imgRef = useRef(null);
  const getUserInfo = () => {
    setUserInfo({
      nickname: user?.displayName ?? '익명',
      email: user?.email ?? '',
      photoUrl: user?.photoURL ?? '/assets/default_profile.png',
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

    console.log(file_url);
    console.log(authService.currentUser);
  };

  console.log(photoURL);

  // 원준 일하는 중 ~
  const editNickName = () => {};
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
          <Nickname>{userInfo?.nickname}</Nickname>
          <button
            onClick={() => {
              alert('아직은 안돼요~');
            }}
          >
            닉네임 수정하기
          </button>
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
