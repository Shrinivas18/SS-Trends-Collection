import { configureStore } from "@reduxjs/toolkit";
import { ssReducer } from "./ssReducer";

export const store = configureStore({
  reducer: {
    counter: ssReducer,
  },
});
