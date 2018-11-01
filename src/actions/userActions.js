import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';
import {
  SET_CURRENT_USER,
  USER_LOADING,
  USER_SUCCESS,
  USER_FAILURE,
  CLEAR_ERROR,
  LOGOUT_SUCCESS
} from './types';
import setAuthToken from '../utils';


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
export const signUpAction = userData => dispatch => {
  dispatch(userLoading(true));
  const {
    firstname, lastname, phoneno, username, email, password
  } = userData;
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
        const { token } = res.data;
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setAuthToken(token);
        dispatch(userLoading(false));
        return dispatch({
          type: SET_CURRENT_USER,
          user: jsonwebtoken.decode(token)
        });
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
export const loginAction = userData => dispatch => {
  dispatch(userLoading(true));
  return axios
    .post(`${__API__}/api/v1/auth/login`, userData)
    .then((res) => {
      const { authToken } = res.data;
      localStorage.setItem('token', res.data.authToken);
      localStorage.setItem('user', JSON.stringify(res.data.signedInUser));
      setAuthToken(authToken);
      dispatch(userLoading(false));
      return dispatch({
        type: SET_CURRENT_USER,
        user: jsonwebtoken.decode(authToken)
      });
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
