import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const ssReducer = createSlice({
  name: "ssTrendsCollection",
  initialState: [
    {
      code: "",
      type: "",
      retailPrice: "",
      stickerPrice: "",
      sellingPrice: "",
      profitAmount: "",
      attachment: null,
      settledAmount: "",
      balanceAmount: "",
    },
  ],
  reducers: {
    addItem: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: uuid(),
            ...data,
          },
        };
      },
    },

    updateItem(state, action) {
      const { id, updates } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updates };
      }
    },

    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = ssReducer.actions;

export default ssReducer.reducer;
