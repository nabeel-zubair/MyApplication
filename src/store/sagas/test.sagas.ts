import {put, takeEvery, all} from 'redux-saga/effects';
import {testActions} from '../actions/';
import {FILTER_ACTIONS} from '../actions/reduxActions';

function* testSaga() {
  try {
    yield put(testActions.testAction.pending);
    yield put(testActions.testAction.success('succeeded!'));
  } catch {
    yield put(testActions.testAction.error('failed!'));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FILTER_ACTIONS.TEST_ACTION_BEGIN, testSaga)]);
}
