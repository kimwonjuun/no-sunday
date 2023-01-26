import { configureStore } from '@reduxjs/toolkit';
import media from '../modules/MediaSlice';
import artists from '../modules/ArtistsSlice';

const store = configureStore({
  reducer: {
    media,
    artists,
  },
});

export default store;

// State의 타입 얻기
export type RootState = ReturnType<typeof store.getState>;

// Dispatch 타입 얻기
export type AppDispatch = typeof store.dispatch;
