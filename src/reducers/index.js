import { combineReducers } from 'redux';
import userReducer from './userReducers';
import allRides from './ridesReducers';

const rootReducer = combineReducers({
  users: userReducer,
  allRides
});

export default rootReducer;
