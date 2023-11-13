import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const generalSlice = createSlice({
  name: 'generalSlice',
  initialState,
  reducers: {
    getList: (state) => {
      state.value += 1;
    },
  },
});

export const { getList } = generalSlice.actions;

export default generalSlice.reducer;