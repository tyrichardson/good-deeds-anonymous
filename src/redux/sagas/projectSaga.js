import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getSaga(action) {
  try {
    const getResponse = yield call(axios.get, 'api/reader');
    console.log('getSaga axios.get readerRouter', getResponse);
    yield put({
      type: 'SET_GET_RESPONSE',
      payload: getResponse.data
    })
  } catch (error)
}

export default projectSaga;