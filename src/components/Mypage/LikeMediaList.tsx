import styled from 'styled-components';

const LikeMediaList = () => {
  return <ListWrapper>유튜브 영상 컴포넌트 재활용</ListWrapper>;
};

export default LikeMediaList;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
`;
