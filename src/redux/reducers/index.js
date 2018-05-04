import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getResponseReducer from './getResponseReducer';
import getWriterStoriesReducer from './getWriterStoriesReducer';

const store = combineReducers({
  user,
  login,
  getResponseReducer,
  getWriterStoriesReducer,
});

export default store;
