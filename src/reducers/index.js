import { combineReducers } from 'redux';
import userReducer from './userReducers';
import { allRides, createRide, oneRide } from './ridesReducers';

const rootReducer = combineReducers({
  users: userReducer,
  allRides,
  createRide,
  oneRide
});

export default rootReducer;
