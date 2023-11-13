import { configureStore } from '@reduxjs/toolkit';
import listSlice from './listSlice';
import generalSlice from './generalSlice';
import filterSlice from './filterSlice';
import { useDispatch } from 'react-redux';

const store =  configureStore({
  reducer: {
    list: listSlice,
    general: generalSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;