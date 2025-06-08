import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducers";
import { api } from "@/services/api";

export const rootReducers = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

export type RootReducersState = ReturnType<typeof rootReducers>;
