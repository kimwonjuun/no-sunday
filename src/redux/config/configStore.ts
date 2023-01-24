import { combineReducers, createStore } from '@reduxjs/toolkit';
import { MediaVideos } from './../reducers/MediaVideos';
import { applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({
  MediaVideos,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

// const store = configureStore({
//   reducer: {
//     MediaVideos,
//   },
// });
// export type RootState = ReturnType<typeof rootReducer>;
export default store;
export type RootState = ReturnType<typeof rootReducer>;
