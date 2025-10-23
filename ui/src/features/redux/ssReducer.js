import { ADD_ITEM } from "../../utilities/constants";

export const reducer = { itemsList: [] };

// {
//   code: "",
//   type: "",
//   retailPrice: "",
//   stickerPrice: "",
//   sellingPrice: "",
//   profitAmount: "",
//   attachment: null,
//   settledAmount: "",
//   balanceAmount: "",
//   isSold: "",
//   inStock:""
// },
const ssReducer = (currentState = reducer, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log(action.payload);
      return {
        ...currentState,
        itemsList: [...currentState.itemsList, action.payload],
      };
    default:
      return currentState;
  }
};

export default ssReducer;
