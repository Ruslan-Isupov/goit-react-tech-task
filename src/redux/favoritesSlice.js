import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const camper = action.payload;
      const isSome = state.favoritesList.some((item) => item.id === camper.id);
      if (!isSome) {
        state.favoritesList.push(camper);
      }
    },
    removeFavorites: (state, action) => {
      const camperId = action.payload;
      state.favoritesList = state.favoritesList.filter(
        (camper) => camper.id !== camperId
      );
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
