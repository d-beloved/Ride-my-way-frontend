import { combineReducers } from 'redux';
import userReducers from './userReducers';

const rootReducer = combineReducers({
  users: userReducers
});

export default rootReducer;
