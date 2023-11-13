import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MetaDataInterface, ResponseRequest, TankInterface } from "../models/types";
import { RequestStatus } from "../models/enums";
import { apiCall } from "../utils/apiCall";

interface InitialState {
  list: TankInterface[];
  filteredList: TankInterface[];
  meta: MetaDataInterface;
  status: string;
  error: string;
}

export interface FetchResult {
  list: TankInterface[];
  meta: MetaDataInterface;
}

interface FetchListProp {
  itemsPerPage: string;
  currentPage: number;
}

export const fetchList = createAsyncThunk(
  "listSlice/fetchList",
  async (requestParametrs: FetchListProp, { rejectWithValue }) => {
    try {
      const { itemsPerPage, currentPage } = requestParametrs;
      const response = await apiCall({ itemsPerPage, currentPage });
      const data: ResponseRequest = await response.json();
      const list = Object.values(data.data).filter((item) => item);
      const meta = data.meta;
      return { list, meta };
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);

const initialState: InitialState = {
  list: [],
  filteredList: [],
  meta: {
    count: 10,
    limit: 10,
    page: 1,
    page_total: 0,
    total: 0,
  },
  status: "",
  error: "",
};

const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    saveList: (state, action) => {
      state.list = action.payload;
      state.status = RequestStatus.succes;
    },
    startLoading: (state) => {
      state.status = RequestStatus.loading;
    },
  },
  extraReducers: {
    [fetchList.pending.toString()]: (state: InitialState) => {
      state.status = "loading";
      state.error = "";
    },
    [fetchList.fulfilled.toString()]: (
      state: InitialState,
      action: PayloadAction<FetchResult>
    ) => {
      state.status = "succes";
      state.list = action.payload.list;
      state.meta = action.payload.meta;
    },
    [fetchList.rejected.toString()]: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { saveList, startLoading } = listSlice.actions;

export default listSlice.reducer;
