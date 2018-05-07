import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import getSaga from './getSaga';
import postSaga from './postSaga';
import getWriterStoriesSaga from './getWriterStoriesSaga';
import getFavoritesSaga from './getFavoritesSaga';
import deleteArchiveStorySaga from './deleteArchiveStorySaga';
import deleteArchiveFavoriteSaga from './deleteArchiveFavoriteSaga';
import getEditStorySaga from './getEditStorySaga';
import addFavoriteSaga from './addFavoriteSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    getSaga(),
    postSaga(),
    getWriterStoriesSaga(),
    getFavoritesSaga(),
    deleteArchiveStorySaga(),
    deleteArchiveFavoriteSaga(),
    getEditStorySaga(),
    addFavoriteSaga(),
    // watchIncrementAsync()
  ]);
}
