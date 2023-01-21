import React from 'react';
import { Link } from 'react-router-dom';
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

export default function SignUp() {
  return (
    <Background>
      <AuthWrapper>
        <AuthLogo>
          <Link to="/">
            <AuthLogoImg src="/assets/logo.png" />
          </Link>
        </AuthLogo>
        <Title>회원가입</Title>
        <form>
          <InputWrapper>
            <Label htmlFor="email">이메일</Label>
            <Input type="text" id="email" placeholder="이메일을 입력해주세요" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </InputWrapper>
          <AuthButton type="button">가입하기</AuthButton>
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
