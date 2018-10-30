import {
  SET_CURRENT_USER,
} from '../actions/types';

import initialState from '../store/intialState';

const userReducer = (state = initialState.signup, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      user: action.user,
      authenticated: true
    };
  default:
    return state;
  }
};

export default userReducer;
