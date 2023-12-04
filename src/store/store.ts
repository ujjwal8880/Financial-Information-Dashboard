import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/app.slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: {
    app: appReducer,
  },
});