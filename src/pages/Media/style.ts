import styled from 'styled-components';

export const DetailBackColor = styled.div`
  background-color: #222;
`;
export const DetailWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 30px 20px;
  overflow: hidden;
  margin: 0 50px;
  padding-top: 20px;
  padding-bottom: 50px;
`;
export const Title = styled.p`
  margin: 0 50px;
  padding-top: 41px;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
