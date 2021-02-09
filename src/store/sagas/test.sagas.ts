import {put, takeEvery, retry, all, delay} from 'redux-saga/effects';
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
    yield delay(800);
    yield put(testActions.testAction.pending);
    yield delay(800);
    yield put(testActions.testAction.success(response));
  } catch {
    yield put(testActions.testAction.error('failed!'));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FILTER_ACTIONS.TEST_ACTION_BEGIN, testSaga)]);
}
