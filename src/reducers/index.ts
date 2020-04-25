import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import config from './config';
import user from './user';

const staticReducers = { config, user };
const rootReducer = combineReducers(staticReducers);

const store = configureStore({
  reducer: rootReducer,
});

const asyncReducers: LooseObject = {};
export function injectReducer<State>(key: string, reducer: Reducer<State>) {
  asyncReducers[key] = reducer;
  const newRootReducer = combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
  store.replaceReducer(newRootReducer);
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export default store;
