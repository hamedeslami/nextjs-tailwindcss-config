// store.ts or redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { rootReducers, RootReducersState } from "./rootReducers";
import { api } from "@/services/api";
import { encryptedStorage } from "./encryptedStorage"; // your wrapper

const persistConfig = {
  key: "root",
  storage: encryptedStorage, // use encrypted storage
  blacklist: [api.reducerPath],
};

const persistedReducer = persistReducer<RootReducersState>(
  persistConfig,
  rootReducers
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
