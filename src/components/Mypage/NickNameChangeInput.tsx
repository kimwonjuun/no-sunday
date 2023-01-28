import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { authService } from '../../common/firebase';

interface NickNameChangeInputProps {
  setNewNickName: any;
  setShowNickNameChangeBtn: any;
}

// 원준 닉네임 변경
export default function NickNameChangeInput({
  setNewNickName,
  setShowNickNameChangeBtn,
}: NickNameChangeInputProps) {
  const [text, setText] = useState('');
  const user: any = authService?.currentUser;

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
  );
}
