import styled from 'styled-components';

// MainPage
export const MainPageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 100vh;
`;

// MainPageIntro
export const MainPageIntroWrapper = styled.div`
  background-color: #000;

  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainPageIntroArea = styled.div`
  background: url('/assets/bounce.png') no-repeat center;

  width: 500px;
  height: 150px;
`;

// MainPageComponents
export const MainPageComponentsWrapper = styled.div`
  background-color: #f7f7f7;

  padding: 0 160px;
  position: relative;
`;
export const MainPageArtistBoxArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 70px 50px;
`;
