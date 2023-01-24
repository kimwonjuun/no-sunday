import styled from 'styled-components';
import testLogo from '../common/test-img/Logo.png';

export default function Main() {
  return (
    <MainPageWrapper>
      <MainPageIntroWrapper>
        <MainPageIntroArea />
      </MainPageIntroWrapper>

      <MainPageComponentsWrapper>
        <MainPageComponentsArea>
          <MainPageComponentStyle>
            <MainPageComponentMemberImgStyle />
            <MainPageComponentMemberLogoStyle />
            <MainPageComponentLogoNameStyle>
              <MainPageComponentNameStyle>
                <p>Artist name</p>
              </MainPageComponentNameStyle>
            </MainPageComponentLogoNameStyle>
          </MainPageComponentStyle>
          <MainPageComponentStyle>
            <MainPageComponentMemberImgStyle />
            <MainPageComponentMemberLogoStyle />
            <MainPageComponentLogoNameStyle>
              <MainPageComponentNameStyle>
                <p>Artist name</p>
              </MainPageComponentNameStyle>
            </MainPageComponentLogoNameStyle>
          </MainPageComponentStyle>
          <MainPageComponentStyle>
            <MainPageComponentMemberImgStyle />
            <MainPageComponentMemberLogoStyle />
            <MainPageComponentLogoNameStyle>
              <MainPageComponentNameStyle>
                <p>Artist name</p>
              </MainPageComponentNameStyle>
            </MainPageComponentLogoNameStyle>
          </MainPageComponentStyle>
          <MainPageComponentStyle>
            <MainPageComponentMemberImgStyle />
            <MainPageComponentMemberLogoStyle />
            <MainPageComponentLogoNameStyle>
              <MainPageComponentNameStyle>
                <p>Artist name</p>
              </MainPageComponentNameStyle>
            </MainPageComponentLogoNameStyle>
          </MainPageComponentStyle>
          <MainPageComponentStyle>
            <MainPageComponentMemberImgStyle />
            <MainPageComponentMemberLogoStyle />
            <MainPageComponentLogoNameStyle>
              <MainPageComponentNameStyle>
                <p>Artist name</p>
              </MainPageComponentNameStyle>
            </MainPageComponentLogoNameStyle>
          </MainPageComponentStyle>
        </MainPageComponentsArea>
      </MainPageComponentsWrapper>
    </MainPageWrapper>
  );
}

// const MainPageBody = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const MainPageWrapper = styled.div`
//   display: block;
// `;

// MainPage
const MainPageWrapper = styled.div`
  font-size: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* min-height: calc(100vh - 80px); 헤더, 푸터 들어올 시 그 만큼의 픽셀 빼주기 */
  min-width: 750px;
  min-height: 100vh;
`;

// MainPageIntro
const MainPageIntroWrapper = styled.div`
  background-color: #000;

  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainPageIntroArea = styled.div`
  background: url(${testLogo});

  width: 500px;
  height: 150px;
`;

// MainPageComponents
const MainPageComponentsWrapper = styled.div`
  background-color: #f5f0f0;

  padding: 0 160px;
  position: relative;
`;
const MainPageComponentsArea = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 70px;
`;
const MainPageComponentStyle = styled.div`
  border-radius: 30px;
  width: 300px;
  height: 400px;
  display: inline-block;
  margin: 0 10px 50px 10px;
  position: relative;
`;
const MainPageComponentMemberImgStyle = styled.img`
  background-color: black;

  border-bottom: 5px solid white;
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  height: 75%;
`;
const MainPageComponentMemberLogoStyle = styled.img`
  background-color: black;

  width: 80px;
  height: 80px;
  border: 5px solid white;
  border-radius: 50%;
  position: absolute;
  top: 48%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const MainPageComponentLogoNameStyle = styled.div`
  background-color: white;

  width: 100%;
  height: 25%;
  border-radius: 0px 0px 30px 30px;
  box-sizing: border-box;
  padding: 50px;
  text-align: center;
`;
const MainPageComponentNameStyle = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`;
