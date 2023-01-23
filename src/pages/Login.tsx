import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { authService } from '../common/firebase';

import useAuth from '../hooks/useAuth';

export default function Login() {
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

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!checkValidation()) return;

    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        alert('환영합니다!');

        setEmail('');
        setPassword('');

        if (state) {
          navigate(state);
        } else {
          navigate('/');
        }
      })
      .catch((err) => {
        if (err.message.includes('user-not-found')) {
          alert('회원을 찾을 수 없습니다. 회원가입을 먼저 진행해 주세요.');
          navigate('/signup', { state });
        }

        if (err.message.includes('wrong-password')) {
          alert('잘못된 비밀번호 입니다.');
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
        <Title>바운스 계정 로그인</Title>
        <form onSubmit={submitLogin}>
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
          <AuthButton type="submit">로그인</AuthButton>
          <AuthText>
            아직 회원이 아니신가요?{' '}
            <Link to={'/signup'}>
              <LinkText>회원가입</LinkText>
            </Link>
          </AuthText>
        </form>
      </AuthWrapper>
    </Background>
  );
}

export const Background = styled.div`
  height: 90vh;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const AuthWrapper = styled.section`
  box-sizing: border-box;
  padding: 30px;
  width: 600px;
  min-width: 400px;
  height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthLogo = styled.h1`
  width: 150px;
  margin: 10px auto;
`;

export const AuthLogoImg = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #54bfcc;
  margin-bottom: 5rem;
`;

export const InputWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const Label = styled.label`
  color: #333;
  font-weight: 600;
  font-size: 0.94rem;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ff0098;
  color: #555;

  ::placeholder {
    color: #999;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 46px;
  background-image: linear-gradient(
    to right,
    #e32586 0%,
    #54bfcc 51%,
    #e32586 100%
  );
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  border-radius: 10px;
  display: block;
  margin: 2rem 0 1.4rem;

  :hover {
    background-position: right center;
  }
`;

export const AuthText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #555;
`;

export const LinkText = styled.span`
  color: #333;
  font-weight: 700;
  margin-left: 10px;
`;
