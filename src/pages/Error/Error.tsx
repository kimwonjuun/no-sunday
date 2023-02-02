import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  ErrorIcon,
  ErrorMsgWrapper,
  Text,
  Title,
  Wrapper,
} from './style';

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
