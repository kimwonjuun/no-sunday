import {
  browserSessionPersistence,
  GithubAuthProvider,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  TwitterAuthProvider,
} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authService } from '../../common/firebase';
import {
  Icon,
  IconImg,
  SocialList,
  SocialTitle,
  SocialWrapper,
  SocicalItem,
} from './styles';

const SocialLogin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const signInWithSocial = (social: string) => {
    let provider: any;

    if (social === 'github') {
      provider = new GithubAuthProvider();
    } else if (social === 'twitter') {
      provider = new TwitterAuthProvider();
    } else {
      provider = new GoogleAuthProvider();
    }

    // setPersistence => 로그인 시 세션스토리지에 유저 정보 저장
    setPersistence(authService, browserSessionPersistence)
      .then(() => signInWithPopup(authService, provider))
      .then(() => {
        alert('환영합니다!');
        if (state) {
          navigate(state);
        } else {
          navigate('/', { replace: true });
        }
      });
  };

  return (
    <SocialWrapper>
      <SocialTitle>소셜 로그인</SocialTitle>
      <SocialList>
        <SocicalItem onClick={() => signInWithSocial('twitter')}>
          <Icon>
            <IconImg src="/assets/social_twitter.png" />
          </Icon>
        </SocicalItem>
        <SocicalItem onClick={() => signInWithSocial('google')}>
          <Icon>
            <IconImg src="/assets/social_google.png" />
          </Icon>
        </SocicalItem>
        <SocicalItem onClick={() => signInWithSocial('github')}>
          <Icon>
            <IconImg src="/assets/social_github.png" />
          </Icon>
        </SocicalItem>
      </SocialList>
    </SocialWrapper>
  );
};

export default SocialLogin;
