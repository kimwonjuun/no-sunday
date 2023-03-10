import styled from 'styled-components';

export const ArtistBox = styled.div`
  border-radius: 10px;
  min-width: 230px;
  height: 320px;
  margin: 0 10px 20px 10px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: color 300ms ease-in-out;

  &:hover {
    color: #ff0098;
  }
`;

export const ArtistBgImgWrapper = styled.div`
  width: inherit;
  height: 230px;
  overflow: hidden;
`;

export const ArtistBoxImgStyle = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 300ms ease-in-out;
  transition: -webkit-transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoWrapper = styled.div`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 42%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
  outline: 3px solid white;
  overflow: hidden;
`;

export const ArtistBoxLogoStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ArtistBoxNameStyle = styled.div`
  width: 100%;
  height: 25%;
  border-radius: 0px 0px 10px 10px;
  background-color: white;
  box-sizing: border-box;
  padding: 30px 0 50px;
  text-align: center;
`;
export const ArtistBoxName = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`;
