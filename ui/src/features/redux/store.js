import { configureStore } from "@reduxjs/toolkit";
import ssReducer from "../redux/ssReducer";

const store = configureStore({
  reducer: {
    ssTrendsCollection: ssReducer,
  },
});

export default store;
