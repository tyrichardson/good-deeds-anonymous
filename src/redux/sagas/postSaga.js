import { call, put } from 'redux-saga/effects';
import axios from 'axios';

function* postSaga(action) {
  try {
    yield call(axios.post, 'api/writer', action.payload);
    console.log('postSaga axios.post sent to writerRouter');
    yield put({
      type: 'GET_RESPONSE_REDUCER'
    })
  } catch (error) {
 }
}

export default postSaga;