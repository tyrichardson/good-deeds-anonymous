import { combineReducers } from 'redux';

const getLoggedInResponseReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_LOGGED_IN_RESPONSE_REDUCER' :
      return action.payload;
    default:
      return state;
  }
}

export default getLoggedInResponseReducer;