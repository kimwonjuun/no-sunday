import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiMessageError } from 'react-icons/bi';
import { Container } from './Mypage';
import { AuthButton } from '../components/Auth/AuthForm';

const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const errorMsg = location.state.msg;

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <ErrorMsgWrapper>
        <ErrorIcon />
        <Title>원하시는 페이지를 찾을 수 없습니다. </Title>
        <Text>{errorMsg ?? '잘못된 경로입니다.'} 😥</Text>
        <Button type="button" onClick={goToHome}>
          홈으로 가기
        </Button>
      </ErrorMsgWrapper>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  height: calc(100vh - 42px - 60px);
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMsgWrapper = styled(Container)`
  flex-direction: column;
  text-align: center;
`;

const ErrorIcon = styled(BiMessageError)`
  font-size: 12rem;
  color: #36b6c6;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  color: #555;
  font-weight: 500;
`;

const Text = styled.p`
  color: #777;
`;

const Button = styled(AuthButton)`
  display: block;
  margin: 3rem auto 2rem;
  width: 120px;
`;
