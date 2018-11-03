import axios from 'axios';
import {
  RIDES_ERROR,
  RIDES_LOADING,
  RIDES_SUCCESS,
  CREATE_RIDE_ERROR,
  CREATE_RIDE_LOADING,
  CREATE_RIDE_SUCCESS,
  CLEAR_ERROR,
  ONE_RIDE_ERROR,
  ONE_RIDE_LOADING,
  ONE_RIDE_SUCCESS
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

const fetchOneRideError = payload => ({
  type: ONE_RIDE_ERROR,
  payload
});

const fetchOneRideLoading = payload => ({
  type: ONE_RIDE_LOADING,
  payload
});

const fetchOneRideSuccess = payload => ({
  type: ONE_RIDE_SUCCESS,
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

export const getOneRide = rideid => dispatch => {
  dispatch(fetchOneRideLoading(true));
  const { token } = localStorage;
  return axios
    .get(`${__API__}/api/v1/rides/${rideid}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.data.success === true) {
        dispatch(fetchOneRideLoading(false));
        return dispatch(fetchOneRideSuccess(res.data.ride));
      }
      return dispatch(fetchOneRideError(res));
    })
    .catch(error => dispatch(fetchOneRideError(error)));
};

export const createRide = (message, destination, departurelocation, date) => dispatch => {
  const { token } = localStorage;
  dispatch(createRideLoading(true));
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
        return dispatch(createRideSuccess(res.data));
        return res.data;
      }
      return dispatch(createRideError(res.data.error));
    })
    .catch(error => {
      dispatch(createRideError(error.res.data.message));
    });
};
