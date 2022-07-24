import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import reducer from "./rootReducer";

// 스토어
export const store = configureStore({
  reducer,
  preloadedState: window.__INITIAL_STATE__ || {},
});

// RootState
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch
export type AppDispatch = typeof store.dispatch;

// Optional Object Types
export type ActionType<T> = PayloadAction<Partial<T>>;
