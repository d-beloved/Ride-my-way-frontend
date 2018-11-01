import { RIDES_ERROR, RIDES_LOADING, RIDES_SUCCESS } from "../actions/types";
import initialState from "../store/intialState";

const allRides = (state = initialState.rides.allRides, action) => {
  switch (action.type) {
  case RIDES_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case RIDES_SUCCESS:
    return {
      ...state,
      data: action.payload
    };
  case RIDES_ERROR:
    return {
      ...state,
      error: action.payload
    };
  default:
    return state;
  }
};

export default allRides;
