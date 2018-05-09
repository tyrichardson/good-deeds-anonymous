import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getResponseReducer from './getResponseReducer';
import getWriterStoriesReducer from './getWriterStoriesReducer';
import getFavoritesReducer from './getFavoritesReducer';

const store = combineReducers({
  user,
  login,
  getResponseReducer,
  getWriterStoriesReducer,
  getFavoritesReducer,
});

export default store;
