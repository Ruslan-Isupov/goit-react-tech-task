import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers, getCamperById } from "./camperOps";

const handlePending = (state) => {
  state.loader = true;
};

const handleRejected = (state, action) => {
  state.loader = false;
  state.error = action.payload;
  // return "Помилка";
};

const initialState = {
  items: [],
  loader: false,
  error: null,
  currentCamper: null,
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 0,
  hasNextPage: false,
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    incrementCurrentPage: (state) => {
      state.currentPage += 1;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
      state.items = [];
    },
    appendTrucks: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.items];
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        console.log(action.payload);
        state.currentCamper = action.payload;
        state.loader = false;
      })
      .addCase(getCamperById.rejected, handleRejected);
  },
});

export const { incrementCurrentPage, resetCurrentPage, appendTrucks } =
  trucksSlice.actions;

export const trucksReducer = trucksSlice.reducer;
