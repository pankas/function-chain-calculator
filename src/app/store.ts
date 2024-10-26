import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from './screens/home-screen';

const store = configureStore({
  reducer: {
    functionChain: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
