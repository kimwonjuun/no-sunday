import { dbService } from '../../common/firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import ArtistView from '../../components/Main/ArtistView';
import { useAppDispatch } from '../../hooks/useRedux';
import { saveArtists } from '../../redux/modules/ArtistsSlice';
import { ArtistsTypes } from '../../redux/modules/ArtistsSlice';
import {
  MainPageArtistBoxArea,
  MainPageComponentsWrapper,
  MainPageIntroArea,
  MainPageIntroWrapper,
  MainPageWrapper,
} from './style';

export default function Main() {
  const [artists, setArtists] = useState<any[]>([]);
  const dispatch = useAppDispatch();

  const getArtist = async () => {
    const querySnapshot = await getDocs(collection(dbService, 'artists'));
    const artist: ArtistsTypes[] = [];

    querySnapshot.forEach((doc) => {
      const newArtist: ArtistsTypes = {
        id: doc.id,
        ...doc.data(),
      };

      artist.push(newArtist);
    });

    setArtists(artist);
    dispatch(saveArtists(artist));
  };

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <MainPageWrapper>
      <MainPageIntroWrapper>
        <MainPageIntroArea />
      </MainPageIntroWrapper>

      <MainPageComponentsWrapper>
        <MainPageArtistBoxArea>
          {artists.map((item: any) => (
            <ArtistView item={item} key={item.id} />
          ))}
        </MainPageArtistBoxArea>
      </MainPageComponentsWrapper>
    </MainPageWrapper>
  );
}
