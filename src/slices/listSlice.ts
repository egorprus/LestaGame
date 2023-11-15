import { createSlice } from "@reduxjs/toolkit";
import { FilterProperty, ShipInterface } from "../models/types";

interface InitialState {
  list: ShipInterface[];
  filteredList: ShipInterface[];
	currentPage: ShipInterface[];
	indexCurrentPage: number;
  loading: boolean;
	filter: Partial<Record<FilterProperty, string>>;
}

const initialState: InitialState = {
  list: [],
  filteredList: [],
	currentPage: [],
	indexCurrentPage: 0,
  loading: true,
	filter: {},
};

const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    setDefaultList: (state, action) => {
      state.list = action.payload;
			state.filteredList = action.payload;
			state.currentPage = action.payload.slice(0, 10);
      state.loading = false;
    },
		setFilteredList: (state, action) => {
      state.filteredList = action.payload;
			state.currentPage = action.payload.slice(0, 10);
    },
		setCurrentPage: (state, action) => {
			state.indexCurrentPage = action.payload;
			state.currentPage = state.filteredList.slice(action.payload, action.payload + 10);
		},
		setFilterValue: (state, action) => {
			console.log(action.payload);
			state.filter = action.payload;
		}
  },
});

export const { setDefaultList, setCurrentPage, setFilteredList, setFilterValue } = listSlice.actions;

export default listSlice.reducer;
