import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getResponseReducer from './getResponseReducer';

const store = combineReducers({
  user,
  login,
  getResponseReducer,
});

export default store;
