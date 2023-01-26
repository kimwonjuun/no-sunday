import { createSlice } from '@reduxjs/toolkit';

export interface ArtistsTypes {
  id?: string;
  channelId?: string;
  logoImg?: string;
  memberImg?: string;
  name?: string;
  nameKr?: string;
}

interface initialStateTypes {
  artists: ArtistsTypes[];
  error: object | null;
}

const initialState: initialStateTypes = {
  artists: [],
  error: null,
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    // 파이어베이스에서 받아온 아티스트 리스트를 리덕스에 저장 (검색 데이터를 위해!)
    saveArtists: (state, action) => {
      state.artists = action.payload;
    },
  },
});

export const { saveArtists } = artistsSlice.actions;

export default artistsSlice.reducer;
