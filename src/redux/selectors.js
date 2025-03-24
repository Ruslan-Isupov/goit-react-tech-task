// trucks
export const selectTrucks = (state) => state.trucks.items;
export const selectCurrentCamper = (state) => state.trucks.currentCamper;
export const selectLoader = (state) => state.trucks.loader;
export const selectError = (state) => state.trucks.error;
export const selectCurrentPage = (state) => state.trucks.currentPage;
export const selectItemsPerPage = (state) => state.trucks.itemsPerPage;
export const selectHasLoadMore = (state) => state.trucks.hasLoadMore;
export const selectTotalItems = (state) => state.trucks.totalItems;

// filters
export const selectFiltersEquipment = (state) => state.filters.equipment;
export const selectFormType = (state) => state.filters.formType;
export const selectLocation = (state) => state.filters.location;

// favorites

export const selectFavoritesList = (state) => state.favorites.favoritesList;
