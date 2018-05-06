import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getEditStoryCall(action) {
  console.log('editStoryCall running in editStorySaga');
  const config = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try {
    const getResponse = yield call(axios.get, `/api/writer/editStory/${action.payload.id}`, action.payload, config)
    console.log('return from editStory GET router:', getResponse);
    yield put({
      type: 'GET_EDIT_STORY_REDUCER',
      payload: getResponse.data
    })
   } catch (error) {
      console.log('error coming from editStorySaga axios.put call:', error);
  }

}

function* getEditStorySaga(){
  yield takeEvery('EDIT_ARCHIVE_STORY', getEditStoryCall)
}

export default getEditStorySaga;