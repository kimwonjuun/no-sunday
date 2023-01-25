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
      <Title>소셜 로그인</Title>
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

const SocialWrapper = styled.div`
  width: 100%;
  margin: 3rem 0 1rem;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    width: 150px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: 4.2rem;
    top: 0.8rem;
    content: '';
  }

  &::after {
    width: 150px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    right: 4.2rem;
    top: 0.8rem;
    content: '';
  }
`;

const SocialList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocicalItem = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    margin: 0 1.5rem;
    border: 1px solid #ddd;
  }
`;

const Icon = styled.span`
  display: block;
`;

const IconImg = styled.img``;
