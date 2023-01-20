import { configureStore } from '@reduxjs/toolkit';
import testSlice from '../modules/testSlice';

const store = configureStore({
  reducer: { testSlice },
});

export default store;
