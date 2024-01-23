import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./features/themeSlice";
import userSlice from "./features/user";
import popupsSlice from "./features/popupsSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    popups: popupsSlice,
  },
});
