import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getWriterStoriesResponseCall(action) {
  try {
    const getResponse = yield call(axios.get, '/api/writer');
    console.log('getWriterStoriesSaga axios.get sent to writerRouter:', getResponse);
    yield put({
      type: 'GET_WRITER_STORIES_REDUCER',
      payload: getResponse.data
    })
  } catch (error) {
    console.log('error in getWriterStoriesSaga axios get call', error);
 }
}

function* getWriterStoriesSaga() {
    yield takeEvery('GET_WRITER_STORIES', getWriterStoriesResponseCall)
}

export default getWriterStoriesSaga;