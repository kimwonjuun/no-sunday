import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AuthButton,
  AuthLogo,
  AuthLogoImg,
  AuthText,
  AuthWrapper,
  Background,
  Input,
  InputWrapper,
  Label,
  LinkText,
  Title,
} from './Login';
import useAuth from '../hooks/useAuth';
import { FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../common/firebase';

export default function SignUp() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailRef,
    passwordRef,
    changeEmail,
    changePassword,
    checkValidation,
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const submitSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!checkValidation()) return;

    createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
        alert('회원가입이 완료 되었습니다.');
        setEmail('');
        setPassword('');

        if (state) {
          navigate(state);
        } else {
          navigate('/');
        }
      })
      .catch((err) => {
        if (err.message.includes('already-in-use')) {
          alert('이미 가입된 계정입니다.');
          setEmail('');
          setPassword('');
        }
      });
  };

  return (
    <Background>
      <AuthWrapper>
        <AuthLogo>
          <Link to="/">
            <AuthLogoImg src="/assets/logo.png" />
          </Link>
        </AuthLogo>
        <Title>회원가입</Title>
        <form onSubmit={submitSignUp}>
          <InputWrapper>
            <Label htmlFor="email">이메일</Label>
            <Input
              type="text"
              id="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={changeEmail}
              ref={emailRef}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={changePassword}
              ref={passwordRef}
              autoComplete="off"
            />
          </InputWrapper>
          <AuthButton type="submit">가입하기</AuthButton>
          <AuthText>
            계정이 있으신가요?
            <Link to={'/login'}>
              <LinkText>로그인</LinkText>
            </Link>
          </AuthText>
        </form>
      </AuthWrapper>
    </Background>
  );
}
