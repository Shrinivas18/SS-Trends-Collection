// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const ssReducer = createSlice({
  name: "SS Trends Collection",
  initialState: {
    code: "",
    type: "",
    retailPrice: "",
    sellingPrice: "",
    soldAt: "",
    profit: "",
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = ssReducer.actions;

export default ssReducer.reducer;
