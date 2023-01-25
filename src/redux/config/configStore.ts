import { configureStore } from '@reduxjs/toolkit';
import media from '../modules/MediaSlice';

const store = configureStore({
  reducer: {
    media,
  },
});

export default store;

// State의 타입 얻기
export type RootState = ReturnType<typeof store.getState>;

// Dispatch 타입 얻기
export type AppDispatch = typeof store.dispatch;
