import { call, put } from 'redux-saga/effects';
import axios from 'axios';

function* getSaga(action) {
  try {
    const getResponse = yield call(axios.get, 'api/reader');
    console.log('getSaga axios.get sent to readerRouter', getResponse);
    yield put({
      type: 'GET_RESPONSE_REDUCER',
      payload: getResponse.data
    })
  } catch (error) {
 }
}

export default getSaga;