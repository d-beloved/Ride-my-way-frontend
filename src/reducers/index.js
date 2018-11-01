import { combineReducers } from 'redux';
import userReducer from './userReducers';
import { allRides, createRide } from './ridesReducers';

const rootReducer = combineReducers({
  users: userReducer,
  allRides,
  createRide
});

export default rootReducer;
