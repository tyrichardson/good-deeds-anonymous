import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import getResponseReducer from './getResponseReducer';
import getWriterStoriesReducer from './getWriterStoriesReducer';
import getFavoritesReducer from './getFavoritesReducer';
import getEditStoryReducer from './getEditStoryReducer';

const store = combineReducers({
  user,
  login,
  getResponseReducer,
  getWriterStoriesReducer,
  getFavoritesReducer,
  getEditStoryReducer,
});

export default store;
