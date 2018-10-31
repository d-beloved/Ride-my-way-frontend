import { SET_CURRENT_USER, USER_FAILURE, CLEAR_ERROR } from "../actions/types";

import initialState from "../store/intialState";

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      user: action.user,
      authenticated: true
    };
  case USER_FAILURE:
    return {
      ...state,
      error: action.payload
    };
  case CLEAR_ERROR:
    return {
      ...state,
      error: ""
    };
  default:
    return state;
  }
};

export default userReducer;
