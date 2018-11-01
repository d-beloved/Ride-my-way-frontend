import axios from 'axios';
import { RIDES_ERROR, RIDES_LOADING, RIDES_SUCCESS } from './types';

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

const getAllRides = () => dispatch => {
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

export default getAllRides;
