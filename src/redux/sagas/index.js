import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import getSaga from './getSaga';
import postSaga from './postSaga';
import getLoggedInReadSaga from './getLoggedInReadSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    getSaga(),
    postSaga(),
    getLoggedInReadSaga()
    // watchIncrementAsync()
  ]);
}
