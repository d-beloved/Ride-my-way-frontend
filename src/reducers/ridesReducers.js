import {
  RIDES_ERROR,
  RIDES_LOADING,
  RIDES_SUCCESS,
  CREATE_RIDE_ERROR,
  CREATE_RIDE_LOADING,
  CREATE_RIDE_SUCCESS,
  ONE_RIDE_ERROR,
  ONE_RIDE_LOADING,
  ONE_RIDE_SUCCESS,
  REQUEST_RIDE_ERROR,
  REQUEST_RIDE_LOADING,
  SET_REQUEST_STATUS
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

export const oneRide = (state = initialState.rides.oneRide, action) => {
  switch (action.type) {
  case ONE_RIDE_ERROR:
    return {
      ...state,
      error: action.payload
    };
  case ONE_RIDE_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case ONE_RIDE_SUCCESS:
    return {
      ...state,
      ride: action.payload
    };
  default:
    return state;
  }
};

export const requestRide = (state = initialState.request, action) => {
  switch (action.type) {
  case REQUEST_RIDE_ERROR:
    return {
      ...state,
      error: action.payload
    };
  case REQUEST_RIDE_LOADING:
    return {
      ...state,
      requesting: action.payload
    };
  case SET_REQUEST_STATUS:
    return {
      ...state,
      requested: action.payload
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
