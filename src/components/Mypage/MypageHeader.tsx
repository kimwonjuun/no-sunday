import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { updateProfile } from 'firebase/auth';
import { authService, storage } from '../../common/firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { AiFillEdit } from 'react-icons/ai';

interface MypageHeadeProps {
  onSignOut: () => void;
  currentUser: any;
}

interface UserInfoTypes {
  nickname: string | null;
  email: string;
  photoUrl: string | null;
}

const MypageHeader = ({ onSignOut, currentUser }: MypageHeadeProps) => {
  const user: any = authService?.currentUser;
  const [userInfo, setUserInfo] = useState<UserInfoTypes>();
  const [photoURL, setPhotoURL] = useState<any>(currentUser.photoURL);

  const [text, setText] = useState('');
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

  // 원준 닉네임 변경

  const editNickName = async () => {
    setNewNickName(text);
    await updateProfile(user, {
      displayName: text,
    })
      .then(() => {
        alert('닉네임 변경 완료');
      })
      .catch((error) => {
        alert('닉네임 변경 실패');
      });
  };
  const handleNickNameBtn = () => {
    editNickName();
    setText('');
    setShowNickNameChangeBtn(false);
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
            {/* {userInfo?.nickname} */}
            {newNickName}
            <AiFillEdit
              onClick={() => {
                setShowNickNameChangeBtn(!showNickNameChangeBtn);
              }}
            />
            {showNickNameChangeBtn === true ? (
              <>
                <input
                  type="text"
                  placeholder="변경할 닉네임을 입력해주세요."
                  value={text}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    handleNickNameBtn();
                  }}
                >
                  변경
                </button>
              </>
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
  max-width: 500px;
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
