import { configureStore } from "@reduxjs/toolkit";
import ssReducer from "../redux/ssReducer";

export const store = configureStore({
  reducer: {
    counter: ssReducer,
  },
});
