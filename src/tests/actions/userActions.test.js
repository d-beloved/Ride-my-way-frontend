import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import expect from 'expect';

import {
  loginAction,
  signUpAction,
  logoutAction
} from '../../actions/userActions';
import * as types from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe('User actions', () => {
  afterEach(() => {
    moxios.reset();
  });

  describe('sign up user action', () => {
    it('Dispatches the signup action', () => {
      moxios.onPost(`${__API__}/api/v1/auth/signup`).reply(201, {
        user: {
          firstname: "Morayo",
          token: "user.token"
        }
      });

      const expectedActions = [
        { type: types.USER_LOADING, payload: true }
      ];
      const store = mockStore({ data: [] });
      return store.dispatch(signUpAction()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('sign in user action', () => {
    it('Dispatches the signin action', () => {
      moxios.onPost(`${__API__}/api/v1/auth/login`).reply(200, {
        user: {
          firstname: "Morayo",
          token: "user.authtoken"
        }
      });

      const expectedActions = [
        { type: types.USER_LOADING, payload: true },
        { type: types.USER_LOADING, payload: false },
        { type: types.SET_CURRENT_USER, user: null }
      ];
      const store = mockStore({ data: [] });
      return store.dispatch(loginAction()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('logout action', () => {
    it('clears user data from localStorage', () => {
      localStorage.setItem('user', { name: 'the user' });

      const store = mockStore({});
      store.dispatch(logoutAction());

      expect(localStorage.getItem('user')).toEqual(null);
    });
  });
});
