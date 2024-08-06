// This file contains all the actions that can be dispatched to the store

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_SHIPPING = "SET_SHIPPING";
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// Action to add an item to the cart.
export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

// Action to remove an item from the cart.
export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

// Action to set the shipping method.
export const setShipping = (method) => ({
  type: "SET_SHIPPING",
  payload: method,
});

// Action to set the user.
export const setUser = (username) => ({
  type: "SET_USER",
  payload: username,
});

// Action to logout the user.
export const logoutUser = () => ({
  type: "LOGOUT_USER",
});
