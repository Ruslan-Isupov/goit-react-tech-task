import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
import { filtersReducer } from "./filtersSlice";
import sessionStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  trucks: trucksReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
