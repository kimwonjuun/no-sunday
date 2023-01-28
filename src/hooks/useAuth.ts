import { useState, useRef, ChangeEvent } from 'react';
import { emailRegex, passwordRegex } from '../common/util';

const useAuth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  // 이메일 입력받는 함수
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  // 비밀번호 입력받는 함수
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 비밀번호 다시 입력하는 함수
  const changeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
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

  // 비밀번호 일치여부 확인하는 함수
  const checkValidationForSignUp = (): boolean => {
    if (!confirmPassword) {
      alert('비밀번호를 다시 한번 더 입력해주세요.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      setConfirmPassword('');
      return false;
    }

    return true;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    emailRef,
    passwordRef,
    confirmPasswordRef,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    checkValidation,
    checkValidationForSignUp,
  };
};

export default useAuth;
