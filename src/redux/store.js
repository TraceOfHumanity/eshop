import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  // popups: popupsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
