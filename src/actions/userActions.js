import axios from 'axios';
import {
  SET_CURRENT_USER,
  USER_LOADING,
  USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_SUCCESS
} from './types';


export const setCurrentUser = body => ({
  type: SET_CURRENT_USER,
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

const logoutUser = () => ({
  type: LOGOUT_SUCCESS
});

/**
 * @description Request to the API to signup user
 *
 * @param {Object} userData the user data to be saved
 *
 * @return {object} dispatch object
 */

export const signUpAction = (
  firstname,
  lastname,
  phoneno,
  username,
  email,
  password
) => dispatch => {
  dispatch(userLoading(true));
  return axios
    .post(`${__API__}/api/v1/auth/signup`, {
      firstname,
      lastname,
      phoneno: Number(phoneno),
      username,
      email,
      password
    })
    .then((res) => {
      if (res.data.success === true) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch(userLoading(false));
        return dispatch(setCurrentUser(res.data));
      }
    })
    .catch(error => {
      dispatch(userLoading(false));
      if (typeof error.response !== undefined) {
        return dispatch(userFailure(error.response.data.message));
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

export const loginAction = (email, password) => dispatch => {
  dispatch(userLoading(true));
  return axios
    .post(`${__API__}/api/v1/auth/login`, {
      email,
      password
    })
    .then((res) => {
      localStorage.setItem('token', res.data.authToken);
      localStorage.setItem('user', JSON.stringify(res.data.signedInUser));
      dispatch(userLoading(false));
      return dispatch(setCurrentUser(res.data));
    })
    .catch(error => {
      dispatch(userLoading(false));
      if (typeof error.response !== undefined) {
        return dispatch(userFailure(error.response.data.message));
      }
      return dispatch(
        userFailure({
          error: { message: "An error occured" }
        })
      );
    });
};

export const logoutAction = () => dispatch => {
  dispatch(logoutUser());
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
