import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getLoggedInResponseCall(action) {
  console.log('getLoggedInResponseCall running in saga');
  const config = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try {
    const getLoggedInResponse = yield call(axios.get, '/api/writer');
    console.log('getLoggedInReadSaga axios.get sent to writerRouter:', getLoggedInResponse);
    yield put({
      type: 'GET_LOGGED_IN_RESPONSE_REDUCER',
      payload: getLoggedInResponse.data
    })
  } catch (error) {
    console.log('error in getLoggedInReadSaga axios get call', error);
 }
}

function* getLoggedInReadSaga() {
    yield takeEvery('GET_LOGGED_IN_READ', getLoggedInResponseCall)
}

export default getLoggedInReadSaga;