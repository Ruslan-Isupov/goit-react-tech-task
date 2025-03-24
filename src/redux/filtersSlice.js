import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  equipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  formType: "",
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilters: (state, { payload }) => {
      // console.log(payload);
      const { name, checked } = payload;
      state.equipment[name] = checked;
    },
    setFormType: (state, { payload }) => {
      // console.log(payload);
      state.formType = payload;
    },
    setLocation: (state, { payload }) => {
      // console.log(payload);
      state.location = payload;
    },
  },
});

export const { toggleFilters, setFormType, setLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
