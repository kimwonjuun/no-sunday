import { useNavigate } from 'react-router-dom';
import {
  ArtistBgImgWrapper,
  ArtistBox,
  ArtistBoxImgStyle,
  LogoWrapper,
  ArtistBoxLogoStyle,
  ArtistBoxNameStyle,
  ArtistBoxName,
} from './styles';

export const ArtistView = ({ item }: { item: any }) => {
  const navigate = useNavigate();
  return (
    <ArtistBox
      key={item.channelid}
      onClick={() => {
        navigate(`/${item.channelId}`);
      }}
    >
      <ArtistBgImgWrapper>
        <ArtistBoxImgStyle src={item.memberImg} />
      </ArtistBgImgWrapper>
      <LogoWrapper>
        <ArtistBoxLogoStyle src={item.logoImg} />
      </LogoWrapper>

      <ArtistBoxNameStyle>
        <ArtistBoxName>{item.name}</ArtistBoxName>
      </ArtistBoxNameStyle>
    </ArtistBox>
  );
};

export default ArtistView;
