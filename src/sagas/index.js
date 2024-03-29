import {
  takeLatest,
  put,
  call,
  fork,
  all,
} from 'redux-saga/effects';

import {
  gifsLoaded,
  gifInfoLoaded,
  addingSubmitted,
  deletingSubmitted,
  editingSubmitted,
} from '../actions';
import { getGifs, getGif, createApiRequest } from '../services/api';


function* fetchGifList(action) {
  const offset = action.payload;
  const response = yield call(getGifs, { offset: offset || 0 });
  yield put(gifsLoaded({ newGifs: response, isFetching: false, offset }));
}

function* fetchSingleGif(action) {
  const response = yield call(getGif, action.payload);
  yield put(gifInfoLoaded({ gif: response, isFetching: false }));
}

function deleteGif(action) {
  const request = createApiRequest('DELETE', 'application/json', JSON.stringify(action.payload));
  console.log(request);
}

function addGif(action) {
  const request = createApiRequest('PUT', 'multipart/form-data', action.payload);
  console.log(request);
}

function editGif(action) {
  const request = createApiRequest('POST', 'application/json', JSON.stringify(action.payload));
  console.log(request);
}

function* watchFetchGifList() {
  yield takeLatest('FETCH_GIF_LIST', fetchGifList);
}

function* watchFetchSingleGif() {
  yield takeLatest('FETCH_SINGLE_GIF', fetchSingleGif);
}

function* watchDeleteGifRequest() {
  yield takeLatest(deletingSubmitted, deleteGif);
}

function* watchAddGifRequest() {
  yield takeLatest(addingSubmitted, addGif);
}

function* watchEditGifRequest() {
  yield takeLatest(editingSubmitted, editGif);
}

export default function* rootSaga() {
  yield all(
    [
      fork(watchFetchGifList),
      fork(watchFetchSingleGif),
      fork(watchDeleteGifRequest),
      fork(watchAddGifRequest),
      fork(watchEditGifRequest),
    ],
  );
}
