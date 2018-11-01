import {
  RIDES_ERROR,
  RIDES_LOADING,
  RIDES_SUCCESS,
  CREATE_RIDE_ERROR,
  CREATE_RIDE_LOADING,
  CREATE_RIDE_SUCCESS
} from "../actions/types";
import initialState from "../store/intialState";

export const allRides = (state = initialState.rides.allRides, action) => {
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

export const createRide = (state = initialState.rides.createRides, action) => {
  switch (action.type) {
  case CREATE_RIDE_ERROR:
    return {
      ...state,
      error: action.payload
    };
  case CREATE_RIDE_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case CREATE_RIDE_SUCCESS:
    return {
      ...state,
      data: action.payload
    };
  default:
    return state;
  }
};
