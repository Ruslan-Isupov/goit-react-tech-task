import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers, getCamperById } from "./camperOps";

const handlePending = (state) => {
  state.loader = true;
};

const handleRejected = (state, action) => {
  state.loader = false;
  state.error = action.payload;
};
const checkHasLoadMore = (state) => {
  const totalPages = Math.ceil(state.totalItems / state.itemsPerPage);
  state.hasLoadMore = state.currentPage < totalPages;
};
const initialState = {
  items: [],
  currentCamper: null,
  loader: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 0,
  hasLoadMore: false,
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
        // state.items = [...state.items, ...action.payload.items];
        if (state.currentPage === 1) {
          state.items = action.payload.items;
        } else {
          state.items.push(...action.payload.items);
        }
        state.totalItems = action.payload.total;
        checkHasLoadMore(state);
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

export const { incrementCurrentPage, resetCurrentPage } = trucksSlice.actions;

export const trucksReducer = trucksSlice.reducer;
