import {put, takeEvery, retry, all} from 'redux-saga/effects';
import {API_CONFIGURATIONS, Api} from '../../services';
import {testActions} from '../actions/';
import {FILTER_ACTIONS} from '../actions/reduxActions';

function* testSaga() {
  try {
    const response = yield retry(
      API_CONFIGURATIONS.MAX_RETRY_COUNT,
      API_CONFIGURATIONS.RETRY_INTERVAL,
      Api.getUsers,
    );
    yield put(testActions.testAction.pending);
    yield put(testActions.testAction.success(response));
  } catch {
    yield put(testActions.testAction.error('failed!'));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FILTER_ACTIONS.TEST_ACTION_BEGIN, testSaga)]);
}
