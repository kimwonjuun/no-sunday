import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { authService } from '@/common/firebase';
import { FiCheck } from 'react-icons/fi';

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
    <InputWrapper>
      <InputStyle
        type="text"
        placeholder="변경할 닉네임을 입력해주세요."
        value={text}
        maxLength={6}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <CheckIcon
        onClick={() => {
          handleNickNameBtn();
        }}
      >
        변경
      </CheckIcon>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const InputStyle = styled.input`
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

const CheckIcon = styled(FiCheck)`
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #ff0098;
  }
`;
