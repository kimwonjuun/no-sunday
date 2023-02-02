import { ChangeEvent, FormEvent, ForwardedRef } from 'react';
import { Form, Link } from 'react-router-dom';
import CustomInput from './CustomInput';
import SocialLogin from './SocialLogin';
import {
  AuthButton,
  AuthLogo,
  AuthLogoImg,
  AuthText,
  AuthWrapper,
  Background,
  LinkText,
  Title,
} from './styles';

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
