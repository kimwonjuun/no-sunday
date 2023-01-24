import { useLocation, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authService } from '../common/firebase';
import useAuth from '../hooks/useAuth';
import AuthForm from '../components/Auth/AuthForm';

export default function SignUp() {
  const auth = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const submitSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!auth.checkValidation()) return;

    createUserWithEmailAndPassword(authService, auth.email, auth.password)
      .then(() => {
        alert('회원가입이 완료 되었습니다.');
        auth.setEmail('');
        auth.setPassword('');

        if (state) {
          navigate(state);
        } else {
          navigate('/');
        }
      })
      .catch((err) => {
        if (err.message.includes('already-in-use')) {
          alert('이미 가입된 계정입니다.');
          auth.setEmail('');
          auth.setPassword('');
        }
      });
  };

  return (
    <AuthForm
      title="회원가입"
      buttonText="가입하기"
      authText="계정이 있으신가요?"
      linkText="로그인"
      email={auth.email}
      password={auth.password}
      emailRef={auth.emailRef}
      passwordRef={auth.passwordRef}
      changeEmail={auth.changeEmail}
      changePassword={auth.changePassword}
      submitHandler={submitSignUp}
    />
  );
}
