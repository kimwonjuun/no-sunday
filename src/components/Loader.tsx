import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Loading>
      <ImgWrapper>
        <Img src="/assets/bounce.png" />
      </ImgWrapper>
    </Loading>
  );
};

export default Loader;

const Loading = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const rotate = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`;
const ImgWrapper = styled.div`
  margin: 0 auto;
`;
const Img = styled.img`
  width: 60%;
  height: 40%;
  animation: ${rotate} 2s ease infinite;
  z-index: 9999;
`;
