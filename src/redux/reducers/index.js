import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getResponseReducer from './getResponseReducer';
import getLoggedInResponseReducer from './getLoggedInResponseReducer';

const store = combineReducers({
  user,
  login,
  getResponseReducer,
  getLoggedInResponseReducer,
});

export default store;
