import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../common/firebase';
import AuthForm from '../components/Auth/AuthForm';
import useAuth from '../hooks/useAuth';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!auth.checkValidation()) return;

    // setPersistence => 로그인 시 세션스토리지에 유저 정보 저장
    setPersistence(authService, browserSessionPersistence)
      .then(() =>
        signInWithEmailAndPassword(authService, auth.email, auth.password),
      )
      .then(() => {
        alert('환영합니다!');
        auth.setEmail('');
        auth.setPassword('');

        if (state) {
          navigate(state);
        } else {
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        if (err.message.includes('user-not-found')) {
          alert('회원을 찾을 수 없습니다. 회원가입을 먼저 진행해 주세요.');
          navigate('/signup', { state });
        }

        if (err.message.includes('wrong-password')) {
          alert('잘못된 비밀번호 입니다.');
          auth.setPassword('');
        }
      });
  };

  return (
    <AuthForm
      title="바운스 계정 로그인"
      buttonText="로그인"
      authText="아직 회원이 아니신가요?"
      linkText="회원가입"
      email={auth.email}
      password={auth.password}
      emailRef={auth.emailRef}
      passwordRef={auth.passwordRef}
      changeEmail={auth.changeEmail}
      changePassword={auth.changePassword}
      submitHandler={submitLogin}
    />
  );
}
