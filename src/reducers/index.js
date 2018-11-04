import { combineReducers } from 'redux';
import userReducer from './userReducers';
import {
  allRides,
  createRide,
  oneRide,
  requestRide
} from './ridesReducers';

const rootReducer = combineReducers({
  users: userReducer,
  allRides,
  createRide,
  oneRide,
  requestRide
});

export default rootReducer;
