import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
  itemsPerPage: string,
  currentPage: number,
  filtering: boolean,
  filtereID: string,
  totalPages: number,
}

const initialState: FilterState = {
  itemsPerPage: '10',
  currentPage: 1,
  filtering: false,
  filtereID: '',
  totalPages: 10,
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setFilterInputValue: (state, action) => {
      state.filtereID = action.payload;
    },
		setPageItemLimit: (state, action) => {
			state.itemsPerPage = action.payload;
		},
		setFilterStatus: (state, action) => {
			state.filtering = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
  },
});

export const { setFilterInputValue, setPageItemLimit, setFilterStatus, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;