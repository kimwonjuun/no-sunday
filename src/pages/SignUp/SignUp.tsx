import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from 'firebase/auth';
import { authService } from 'common/firebase';
import useAuth from 'hooks/useAuth';
import AuthForm from 'components/Auth/AuthForm';

export default function SignUp() {
  const auth = useAuth();
  const navigate = useNavigate();

  const submitSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 이메일, 비밀번호 유효성 검사 확인
    if (!auth.checkValidation()) return;

    // 비밀번호 일치여부 확인
    if (!auth.checkValidationForSignUp()) return;

    setPersistence(authService, browserSessionPersistence)
      .then(() =>
        createUserWithEmailAndPassword(authService, auth.email, auth.password),
      )
      .then(() => {
        alert(
          '회원가입이 완료 되었습니다. 마이페이지에서 닉네임을 변경해주세요.',
        );
        auth.setEmail('');
        auth.setPassword('');
        auth.setConfirmPassword('');

        navigate('/mypage');
      })
      .catch((err) => {
        if (err.message.includes('already-in-use')) {
          alert('이미 가입된 계정입니다.');
          auth.setEmail('');
          auth.setPassword('');
          auth.setConfirmPassword('');
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
      confirmPassword={auth.confirmPassword}
      emailRef={auth.emailRef}
      passwordRef={auth.passwordRef}
      confirmPasswordRef={auth.confirmPasswordRef}
      changeEmail={auth.changeEmail}
      changePassword={auth.changePassword}
      changeConfirmPassword={auth.changeConfirmPassword}
      submitHandler={submitSignUp}
    />
  );
}
