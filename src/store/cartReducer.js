// Purpose: Reducer for cart actions.

// Import actions from actions.js.
import { ADD_TO_CART, REMOVE_FROM_CART, SET_SHIPPING } from "./actions.js";

// Initial state for cart
const initialState = {
  cartItems: [],
  shipping: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add an item to the cart.
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    // Remove an item from the cart.
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    // Set the shipping method.
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
