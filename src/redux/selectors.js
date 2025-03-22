// import { createSelector } from "@reduxjs/toolkit";
// import trucksSlice from "./trucksSlice";

export const selectVehicles = (state) => state.trucks.list;

export const selectTrucks = (state) => state.trucks.items;
export const selectLoader = (state) => state.trucks.loader;
export const selectError = (state) => state.trucks.error;
export const selectCurrentPage = (state) => state.trucks.currentPage;
export const selectItemsPerPage = (state) => state.trucks.itemsPerPage;
