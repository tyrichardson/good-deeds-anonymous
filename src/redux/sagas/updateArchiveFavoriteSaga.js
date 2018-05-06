import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateArchiveFavoriteCall(action) {
  console.log('updateArchiveFavoriteCall running in updateArchiveFavoriteSaga');
  const config = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try {
    yield call(axios.put, `api/writer/${action.payload.id}`, action.payload, config)
    console.log("update/put saga axios call:", action.payload.id);
    yield put({
      type: 'GET_WRITER_STORIES_SAGA'
    })
    yield put({
      type: 'GET_FAVORITES'
    })
  }
    catch(error){
      console.log('an error occurred in updateArchiveFavoriteCall saga:', error);
    }
}

function* updateArchiveFavoriteSaga() {
  yield takeEvery('UPDATE_ARCHIVE_FAVORITE', updateArchiveFavoriteCall)
}

export default updateArchiveFavoriteSaga;