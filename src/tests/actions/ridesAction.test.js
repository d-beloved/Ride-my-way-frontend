import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import expect from 'expect';

import {
  getAllRides,
  createRide,
  getOneRide,
  requestRide
} from '../../actions/ridesAction';
import * as types from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe('Ride Actions offers', () => {
  afterEach(() => {
    moxios.reset();
  });

  describe('view all ride offers', () => {
    it('Dispatches get all ride offers', () => {
      moxios.onGet(`${__API__}/api/v1/rides`).reply(200, {
        rides: [
          {
            createdat: "2018-10-31T14:37:11.998Z",
            date: "2018-07-27T00:00:00.000Z",
            departurelocation: "MMA 2 terminal",
            destination: "Los Angeles",
            driverdetails: "David Keji",
            message: "Dave travels",
            rideid: 3,
            userid: 1
          },
          {
            createdat: "2018-10-31T14:37:11.998Z",
            date: "2018-07-27T00:00:00.000Z",
            departurelocation: "MMA 2 terminal",
            destination: "Los Angeles",
            driverdetails: "Kung Fu",
            message: "Dave travels",
            rideid: 3,
            userid: 1
          }
        ],
        success: true
      });

      const expectedActions = [
        { type: types.RIDES_LOADING, payload: true },
        { type: types.RIDES_LOADING, payload: false },
        {
          type: types.RIDES_SUCCESS,
          payload:
            [
              {
                createdat: "2018-10-31T14:37:11.998Z",
                date: "2018-07-27T00:00:00.000Z",
                departurelocation: "MMA 2 terminal",
                destination: "Los Angeles",
                driverdetails: "David Keji",
                message: "Dave travels",
                rideid: 3,
                userid: 1
              },
              {
                createdat: "2018-10-31T14:37:11.998Z",
                date: "2018-07-27T00:00:00.000Z",
                departurelocation: "MMA 2 terminal",
                destination: "Los Angeles",
                driverdetails: "Kung Fu",
                message: "Dave travels",
                rideid: 3,
                userid: 1
              }
            ]
        }
      ];

      const store = mockStore({ data: [] });
      return store.dispatch(getAllRides()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('create a ride offer', () => {
    it('dispatches the create a ride offer action', () => {
      moxios.onPost(`${__API__}/api/v1/users/rides`).reply(201, {
        success: true,
        ride: {
          destination: "Los Angeles"
        }
      });

      const expectedActions = [
        { type: types.CREATE_RIDE_LOADING, payload: true },
        { type: types.CREATE_RIDE_LOADING, payload: false },
        {
          type: types.CREATE_RIDE_SUCCESS,
          payload: {
            ride: {
              destination: "Los Angeles"
            },
            success: true
          }
        }
      ];
      const store = mockStore({ data: {} });
      return store.dispatch(createRide()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('get one ride offer', () => {
    it('dispatches the view a ride offer action', () => {
      moxios.onGet(`${__API__}/api/v1/rides/1`).reply(200, {
        success: true,
        ride: {
          destination: "Los Angeles"
        }
      });

      const expectedActions = [
        { type: types.ONE_RIDE_LOADING, payload: true },
        { type: types.ONE_RIDE_LOADING, payload: false },
        {
          type: types.ONE_RIDE_SUCCESS,
          payload: {
            destination: "Los Angeles"
          }
        }
      ];
      const store = mockStore({ data: {} });
      return store.dispatch(getOneRide(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('request for a ride', () => {
    it('dispatches the request a ride action', () => {
      moxios.onPost(`${__API__}/api/v1/rides/1/requests`).reply(201, {
        success: true
      });

      const expectedActions = [
        { type: types.REQUEST_RIDE_LOADING, payload: true },
      ];
      const store = mockStore({ data: {} });
      return store.dispatch(requestRide(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
