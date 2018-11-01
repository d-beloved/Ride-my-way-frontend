import {
  SET_CURRENT_USER,
  USER_FAILURE,
  CLEAR_ERROR,
  USER_LOADING,
  LOGOUT_SUCCESS
} from "../actions/types";

import initialState from "../store/intialState";

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      user: action.user,
      isAuthenticated: true
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
  case USER_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  case LOGOUT_SUCCESS:
    return {
      ...state,
      isAuthenticated: false
    };
  default:
    return state;
  }
};

export default userReducer;
