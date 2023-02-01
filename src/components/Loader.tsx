import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <LoadignBackGroundColor>
      <Loading>
        <ImgWrapper>
          <Img src="/assets/bounce.png" />
        </ImgWrapper>
      </Loading>
    </LoadignBackGroundColor>
  );
};

export default Loader;
const LoadignBackGroundColor = styled.div`
  background-color: #222;
`;
const Loading = styled.div`
  width: 105vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
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
