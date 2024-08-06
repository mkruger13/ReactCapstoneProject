// Reducer for user state

const initialState = {
  username: "",
};

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
