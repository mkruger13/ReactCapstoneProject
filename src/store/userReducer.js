// Reducer for user state

// Initial state for user
const initialState = {
  username: "",
};

// Reducer for user actions
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        username: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
};

export default userReducer;
