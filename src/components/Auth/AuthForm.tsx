import { ChangeEvent, FormEvent, ForwardedRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SocialLogin from './SocialLogin';

interface AuthFormProps {
  title: string;
  buttonText: string;
  authText: string;
  linkText: string;
  email: string;
  password: string;
  emailRef: ForwardedRef<HTMLInputElement>;
  passwordRef: ForwardedRef<HTMLInputElement>;
  changeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({
  title,
  buttonText,
  authText,
  linkText,
  email,
  password,
  emailRef,
  passwordRef,
  changeEmail,
  changePassword,
  submitHandler,
}: AuthFormProps) => {
  return (
    <Background>
      <AuthWrapper>
        <AuthLogo>
          <Link to="/">
            <AuthLogoImg src="/assets/logo.png" />
          </Link>
        </AuthLogo>
        <Title>{title}</Title>
        <Form onSubmit={submitHandler}>
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
          <AuthButton type="submit">{buttonText}</AuthButton>
          <AuthText>
            {authText}
            <Link to={`${linkText === '회원가입' ? '/signup' : '/login'}`}>
              <LinkText>{linkText}</LinkText>
            </Link>
          </AuthText>
        </Form>
        {buttonText === '로그인' && <SocialLogin />}
      </AuthWrapper>
    </Background>
  );
};

export default AuthForm;

const Background = styled.div`
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const AuthWrapper = styled.section`
  width: 600px;
  min-width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  margin: 3rem 0;
`;

const AuthLogo = styled.h1`
  width: 150px;
  margin: 10px auto;
`;

const AuthLogoImg = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #54bfcc;
  margin-bottom: 4rem;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 600;
  font-size: 0.94rem;
`;

const Input = styled.input`
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

const AuthButton = styled.button`
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
  margin: 1rem 0 1.4rem;

  :hover {
    background-position: right center;
  }
`;

const AuthText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #555;
`;

const LinkText = styled.span`
  color: #333;
  font-weight: 700;
  margin-left: 10px;
`;
