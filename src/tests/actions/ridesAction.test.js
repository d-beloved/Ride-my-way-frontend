import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import expect from 'expect';

import {
  getAllRides,
  createRide
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
});
