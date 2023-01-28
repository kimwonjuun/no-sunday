import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { authService, firebaseConfig } from '../common/firebase';
import CommentList from '../components/Mypage/CommentList';
import LikeMediaList from '../components/Mypage/LikeMediaList';
import MypageHeader from '../components/Mypage/MypageHeader';

export default function Mypage() {
  const navigate = useNavigate();

  // 세션스토리지에서 로그인 했을 때 저장된 currentUser 가져오기
  const userSession = sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
  );
  const currentUser = JSON.parse(userSession ?? '');

  const handleSignOut = () => {
    signOut(authService).then(() => {
      alert('로그아웃 되었습니다. 다시 만나요!');
      sessionStorage.clear();
      navigate('/', { replace: true });
    });
  };

  return (
    <MyPageWrapper>
      <MypageHeader onSignOut={handleSignOut} currentUser={currentUser} />
      <Container>
        <Section>
          <SectionTitle>영상 보관함</SectionTitle>
          <LikeMediaList currentUser={currentUser} />
        </Section>
        <Section>
          <SectionTitle>나의 쓴 댓글</SectionTitle>
          <CommentList currentUser={currentUser} />
        </Section>
      </Container>
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f7f7;
`;

const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;

const Section = styled.section`
  min-height: 300px;
  margin: 3rem 0 4rem;
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  margin-left: 1rem;
`;
