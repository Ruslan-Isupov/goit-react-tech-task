// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { trucksReducer } from "./trucksSlice";
// import { filtersReducer } from "./filtersSlice";
// import { favoritesReducer } from "./favoritesSlice";
// import sessionStorage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage: sessionStorage,
//   whitelist: ["favorites"],
// };

// const rootReducer = combineReducers({
//   trucks: trucksReducer,
//   filters: filtersReducer,
//   favorites: favoritesReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
import { filtersReducer } from "./filtersSlice";
import { favoritesReducer } from "./favoritesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesList"],
};

const persistFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: filtersReducer,
    favorites: persistFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
