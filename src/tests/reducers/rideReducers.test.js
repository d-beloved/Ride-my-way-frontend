import { allRides, createRide, oneRide } from '../../reducers/ridesReducers';
import * as types from '../../actions/types';
import index from '../../reducers/index';

describe("Ride reducers", () => {
  it("should return initial state", () => {
    expect(allRides(undefined, {})).toEqual({
      isLoading: false,
      error: false,
      data: []
    });
  });
  it("should return all rides loading", () => {
    const action = {
      type: types.RIDES_LOADING,
      payload: { isLoading: true }
    };
    expect(allRides({}, action)).toEqual({
      isLoading: action.payload
    });
  });

  it("should return all rides error", () => {
    const action = {
      type: types.RIDES_ERROR,
      payload: "error"
    };
    expect(allRides({}, action)).toEqual({
      error: action.payload
    });
  });

  it("should return all rides success", () => {
    const action = {
      type: types.RIDES_SUCCESS,
      payload: {
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
        ]
      }
    };
    expect(allRides({}, action)).toEqual({
      data: action.payload
    });
  });

  it("should return initial state", () => {
    expect(oneRide(undefined, {})).toEqual({
      ride: {},
      isLoading: false,
      error: ""
    });
  });
  it("should return one ride loading", () => {
    const action = {
      type: types.ONE_RIDE_LOADING,
      payload: { isLoading: true }
    };
    expect(oneRide({}, action)).toEqual({
      isLoading: action.payload
    });
  });

  it("should return one ride error", () => {
    const action = {
      type: types.ONE_RIDE_ERROR,
      payload: "error"
    };
    expect(oneRide({}, action)).toEqual({
      error: action.payload
    });
  });

  it("should return one ride success", () => {
    const action = {
      type: types.ONE_RIDE_SUCCESS,
      payload: {
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
          }
        ]
      }
    };
    expect(oneRide({}, action)).toEqual({
      ride: action.payload
    });
  });

  it("should return initial state", () => {
    expect(createRide(undefined, {})).toEqual({
      data: {},
      isLoading: false,
      error: ""
    });
  });
  it("should return creating ride loading", () => {
    const action = {
      type: types.CREATE_RIDE_LOADING,
      payload: { isLoading: true }
    };
    expect(createRide({}, action)).toEqual({
      isLoading: action.payload
    });
  });

  it("should return creating ride error", () => {
    const action = {
      type: types.CREATE_RIDE_ERROR,
      payload: "error"
    };
    expect(createRide({}, action)).toEqual({
      error: action.payload
    });
  });

  it("should return all rides success", () => {
    const action = {
      type: types.CREATE_RIDE_SUCCESS,
      payload: {
        destination: "Los Angeles"
      }
    };
    expect(createRide({}, action)).toEqual({
      data: action.payload
    });
  });
});
