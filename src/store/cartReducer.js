// Reducer for cart actions

import { ADD_TO_CART, REMOVE_FROM_CART, SET_SHIPPING } from "./actions.js";

const initialState = {
  cartItems: [],
  shipping: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case SET_SHIPPING:
      return {
        ...state,
        shipping: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
