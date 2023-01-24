import { useState, useRef, ChangeEvent } from 'react';
import { emailRegex, passwordRegex } from '../common/util';

const useAuth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  // 이메일 입력받는 함수
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  // 비밀번호 입력받는 함수
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 이메일, 비밀번호 유효성 검사하는 함수
  const checkValidation = (): boolean => {
    const checkEmailValidation = email.match(emailRegex);
    const checkPasswordValidation = password.match(passwordRegex);

    if (!email || !checkEmailValidation) {
      if (!email) {
        alert('이메일을 입력해주세요.');
        emailRef?.current?.focus();
        return false;
      } else {
        alert('이메일 형식을 올바르게 입력해주세요.');
        emailRef?.current?.focus();
        return false;
      }
    }

    if (!password || !checkPasswordValidation) {
      if (!password) {
        alert('비밀번호를 입력해주세요.');
        passwordRef?.current?.focus();
        return false;
      } else {
        alert(
          '비밀번호는 대소문자, 특수문자를 포함하여 8자리 이상이어야 합니다.',
        );
        passwordRef?.current?.focus();
        setPassword('');
        return false;
      }
    }

    return true;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailRef,
    passwordRef,
    changeEmail,
    changePassword,
    checkValidation,
  };
};

export default useAuth;
