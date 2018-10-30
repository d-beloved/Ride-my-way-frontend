import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';
import {
  SET_CURRENT_USER,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CLEAR_ERROR
} from './types';
import setAuthToken from '../utils';

// API URL
const API = process.env.REACT_APP_API;

export const signInSuccess = body => ({
  type: SIGN_UP_SUCCESS,
  payload: body
});

export const signInLoading = payload => ({
  type: SIGN_UP_LOADING,
  payload
});

export const signInFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

export const clearErrors = () => ({
  type: CLEAR_ERROR
});

const signUpAction = (userData) => (dispatch) => axios.post(`${API}/api/v1/auth/signup`, userData)
  .then((res) => {
    const { token } = res.data;
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', res.data.user);
    setAuthToken(token);
    dispatch({
      type: SET_CURRENT_USER,
      user: jsonwebtoken.decode(token)
    });
  }).catch(error => Promise.reject(error.response.data.message));

export default signUpAction;
