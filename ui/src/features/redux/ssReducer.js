import { ADD_ITEM } from "../../utilities/constants";

export const reducer = { itemsList: [] };

const ssReducer = (currentState = reducer, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...currentState,
        itemsList: [...currentState.itemsList, action.payload],
      };

    default:
      return currentState;
  }
};

export default ssReducer;
