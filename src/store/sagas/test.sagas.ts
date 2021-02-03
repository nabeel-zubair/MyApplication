import {put, takeEvery, all, delay} from 'redux-saga/effects';
import {testActions} from '../actions/';
import {FILTER_ACTIONS} from '../actions/reduxActions';

function* testSaga() {
  try {
    yield put(testActions.testAction.pending);
    yield delay(500);
    yield put(testActions.testAction.success('succeeded!'));
    yield delay(500);
  } catch {
    yield put(testActions.testAction.error('failed!'));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FILTER_ACTIONS.TEST_ACTION_BEGIN, testSaga)]);
}
