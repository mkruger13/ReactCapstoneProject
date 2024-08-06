// Creating a store and combining all the reducers.

// Importing necessary modules.
import { legacy_createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
