import { handleActions } from 'redux-actions';

import {
  gifInfoLoaded,
  gifInfoUnloaded,
  editingSubmitted,
  deletingSubmitted,
  addingSubmitted,
} from '../actions';

export const singleGif = {
  value: {},
  isFetching: true,
};

export const singleGifReducer = handleActions(
  {
    [gifInfoLoaded]: (state, action) => (
      {
        ...state,
        value: action.payload.gif,
        isFetching: action.payload.isFetching,
      }
    ),
    [gifInfoUnloaded]: (state) => (
      {
        ...state,
        value: {},
        isFetching: true,
      }
    ),
    [editingSubmitted]: (state, action) => {
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: JSON.stringify(action.payload),
      };
      console.log(request);
      return state;
    },
    [deletingSubmitted]: (state, action) => {
      const request = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload),
      };
      console.log(request);
      return state;
    },
    [addingSubmitted]: (state, action) => {
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'form-data' },
        body: action.payload,
      };
      console.log(request);
      return state;
    },
  },
  singleGif,
);

export default { singleGif, singleGifReducer };
