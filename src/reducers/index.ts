import { configureStore, combineReducers } from '@reduxjs/toolkit';

import config from './config';

const rootReducer = combineReducers({
  config,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
