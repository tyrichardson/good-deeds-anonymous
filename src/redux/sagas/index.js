import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import getSaga from './getSaga';
import postSaga from './postSaga';
import getWriterStoriesSaga from './getWriterStoriesSaga';
import getFavoritesSaga from './getFavoritesSaga';
import deleteArchiveStorySaga from './deleteArchiveStorySaga';
import updateArchiveFavoriteSaga from './updateArchiveFavoriteSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    getSaga(),
    postSaga(),
    getWriterStoriesSaga(),
    getFavoritesSaga(),
    deleteArchiveStorySaga(),
    updateArchiveFavoriteSaga(),
    // watchIncrementAsync()
  ]);
}
