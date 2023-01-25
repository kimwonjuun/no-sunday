import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Artist = ({ item }: { item: any }) => {
  const navigate = useNavigate();
  return (
    <ArtistBox
      key={item.channelId}
      onClick={() => {
        navigate(`/${item.channelId}`);
      }}
    >
      <ArtistBoxImgStyle src={item.memberImg} />
      <ArtistBoxLogoStyle src={item.logoImg} />
      <ArtistBoxNameStyle>
        <ArtistBoxName>{item.name}</ArtistBoxName>
      </ArtistBoxNameStyle>
    </ArtistBox>
  );
};

export default Artist;

const ArtistBox = styled.button`
  border-radius: 30px;
  width: 230px;
  height: 300px;
  display: inline-block;
  margin: 0 10px 50px 10px;
  position: relative;
`;
const ArtistBoxImgStyle = styled.img`
  border-bottom: 5px solid white;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 75%;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
`;
const ArtistBoxLogoStyle = styled.img`
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
const ArtistBoxNameStyle = styled.div`
  background-color: white;

  width: 100%;
  height: 25%;
  border-radius: 0px 0px 20px 20px;
  box-sizing: border-box;
  padding: 50px;
  text-align: center;
`;
const ArtistBoxName = styled.div`
  font-size: 17px;
  font-weight: bold;
  line-height: 25px;
`;
