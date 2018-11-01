import axios from 'axios';
import {
  RIDES_ERROR,
  RIDES_LOADING,
  RIDES_SUCCESS,
  CREATE_RIDE_ERROR,
  CREATE_RIDE_LOADING,
  CREATE_RIDE_SUCCESS,
  CLEAR_ERROR
} from './types';

const fetchRidesSuccess = payload => ({
  type: RIDES_SUCCESS,
  payload
});

const fetchRidesLoading = payload => ({
  type: RIDES_LOADING,
  payload
});

const fetchRidesError = payload => ({
  type: RIDES_ERROR,
  payload
});

const createRideError = payload => ({
  type: CREATE_RIDE_ERROR,
  payload
});

const createRideLoading = payload => ({
  type: CREATE_RIDE_LOADING,
  payload
});

const createRideSuccess = payload => ({
  type: CREATE_RIDE_SUCCESS,
  payload
});

export const clearErrors = () => ({
  type: CLEAR_ERROR
});

export const getAllRides = () => dispatch => {
  dispatch(fetchRidesLoading(true));
  return axios
    .get(`${__API__}/api/v1/rides`)
    .then(response => {
      if (response.data.success === true) {
        dispatch(fetchRidesLoading(false));
        return dispatch(fetchRidesSuccess(response.data.rides));
      }
      return dispatch(fetchRidesError(response));
    })
    .catch(error => dispatch(fetchRidesError(error)));
};

export const createRide = userData => dispatch => {
  const { token } = localStorage;

  dispatch(createRideLoading(true));
  const {
    message, destination, departurelocation, date
  } = userData;
  return axios
    .post(`${__API__}/api/v1/users/rides`, {
      message,
      destination,
      departurelocation,
      date
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      if (res.data.success === true) {
        dispatch(createRideLoading(false));
        dispatch(createRideSuccess(res.data));
        return res.data;
      }
      return dispatch(createRideError(res.data.error));
    })
    .catch(error => dispatch(createRideError(error.response.data.message)));
};
