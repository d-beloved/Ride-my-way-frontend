import axios from 'axios';
import swal from 'sweetalert';
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
  ONE_RIDE_SUCCESS,
  REQUEST_RIDE_LOADING,
  REQUEST_RIDE_ERROR,
  SET_REQUEST_STATUS
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

const requestRideLoading = isRequesting => ({
  type: REQUEST_RIDE_LOADING,
  payload: isRequesting
});

const setRequestStatus = status => ({
  type: SET_REQUEST_STATUS,
  payload: status
});

const requestRideError = error => ({
  type: REQUEST_RIDE_ERROR,
  payload: error
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

export const requestRide = rideId => dispatch => {
  dispatch(requestRideLoading(true));
  const { token } = localStorage;
  return axios
    .post(`${__API__}/api/v1/rides/${rideId}/requests`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.success === 'true') {
        dispatch(requestRideLoading(false));
        dispatch(setRequestStatus(true));
        return swal('Ride request successful!', '', 'success');
      }
    })
    .catch(error => {
      dispatch(requestRideLoading(false));
      if (typeof error.response !== undefined) {
        dispatch(requestRideError(error.response.data.message));
        return swal('', `${error.response.data.message}`, 'info');
      }
      return dispatch(
        requestRideError({
          error: { message: "An error occured" }
        })
      );
    });
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
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      if (res.data.success === true) {
        dispatch(createRideLoading(false));
        dispatch(createRideSuccess(res.data));
        return res.data;
      }
    })
    .catch(error => {
      dispatch(createRideLoading(false));
      if (typeof error.response !== undefined) {
        return dispatch(createRideError(error.response.data.message));
      }
      return dispatch(
        createRideError({
          error: { message: "An error occured" }
        })
      );
    });
};
