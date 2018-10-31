import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';
import {
  SET_CURRENT_USER,
  USER_LOADING,
  USER_SUCCESS,
  USER_FAILURE,
  CLEAR_ERROR
} from './types';

import setAuthToken from '../utils';

// API URL
const API = process.env.REACT_APP_API;

export const userSuccess = body => ({
  type: USER_SUCCESS,
  payload: body
});

export const userLoading = payload => ({
  type: USER_LOADING,
  payload
});

export const userFailure = error => ({
  type: USER_FAILURE,
  payload: error
});

export const clearErrors = () => ({
  type: CLEAR_ERROR
});

/**
 * @description Request to the API to signup user
 *
 * @param {Object} userData the user data to be saved
 *
 * @return {object} dispatch object
 */
export const signUpAction = userData => dispatch => {
  dispatch(userLoading(true));
  return axios
    .post(`${API}/api/v1/auth/signup`, userData) // eslint-disable-line
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      setAuthToken(token);
      dispatch(userLoading(false));
      dispatch({
        type: SET_CURRENT_USER,
        user: jsonwebtoken.decode(token)
      });
    })
    .catch(error => {
      dispatch(userLoading(false));
      if (error.res) {
        return dispatch(userFailure(error.res.data));
      }
      return dispatch(
        userFailure({
          error: { message: "An error occured" }
        })
      );
    });
};

/**
 * @description Request to the API to login user
 *
 * @param {Object} userData the user data to be saved
 *
 * @return {object} dispatch object
 */
export const loginAction = userData => dispatch => {
  dispatch(userLoading(true));
  return axios
    .post(`${API}/api/v1/auth/login`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      setAuthToken(token);
      dispatch(userLoading(false));
      dispatch({
        type: SET_CURRENT_USER,
        user: jsonwebtoken.decode(token)
      });
    })
    .catch(error => {
      dispatch(userLoading(false));
      if (error.res) {
        return dispatch(userFailure(error.res.data));
      }
      return dispatch(
        userFailure({
          error: { message: "An error occured" }
        })
      );
    });
};
