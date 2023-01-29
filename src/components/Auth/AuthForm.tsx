import { ChangeEvent, FormEvent, ForwardedRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import SocialLogin from './SocialLogin';

interface AuthFormProps {
  title: string;
  buttonText: string;
  authText: string;
  linkText: string;
  email: string;
  password: string;
  confirmPassword?: string | null;
  emailRef: ForwardedRef<HTMLInputElement>;
  passwordRef: ForwardedRef<HTMLInputElement>;
  confirmPasswordRef?: ForwardedRef<HTMLInputElement> | null;
  changeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  changeConfirmPassword?: (event: ChangeEvent<HTMLInputElement>) => void | null;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({
  title,
  buttonText,
  authText,
  linkText,
  email,
  password,
  confirmPassword,
  confirmPasswordRef,
  emailRef,
  passwordRef,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitHandler,
}: AuthFormProps) => {
  const signUp = title === '회원가입';

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
          <CustomInput
            id="email"
            labelText="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={changeEmail}
            valueRef={emailRef}
          />
          <CustomInput
            id="password"
            labelText="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={changePassword}
            valueRef={passwordRef}
            inputType={'password'}
          />
          {signUp ? (
            <CustomInput
              id="confirm-password"
              labelText="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              value={confirmPassword as string}
              onChange={
                changeConfirmPassword as (
                  event: ChangeEvent<HTMLInputElement>,
                ) => void
              }
              valueRef={
                confirmPasswordRef as ForwardedRef<HTMLInputElement> | null
              }
              inputType={'password'}
            />
          ) : (
            ''
          )}
          {signUp && (
            <AuthButton
              type="submit"
              disabled={!email || !password || !confirmPassword}
            >
              {buttonText}
            </AuthButton>
          )}
          {!signUp && (
            <AuthButton type="submit" disabled={!email || !password}>
              {buttonText}
            </AuthButton>
          )}
          <AuthText>
            {authText}
            <Link to={`${signUp ? '/login' : '/signup'}`}>
              <LinkText>{linkText}</LinkText>
            </Link>
          </AuthText>
        </Form>
        {!signUp && <SocialLogin />}
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
  margin: 1rem 0 1.4rem;

  :hover {
    background-position: right center;
  }

  :disabled {
    background-image: linear-gradient(
      to right,
      #dcb8ca 0%,
      #98c3c8 51%,
      #dcb8ca 100%
    );
    cursor: no-drop;
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
