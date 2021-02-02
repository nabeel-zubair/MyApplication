import {all, spawn} from 'redux-saga/effects';

import testSagas from './test.sagas';

function* myApplicationSagas() {
  yield all([spawn(testSagas)]);
}

export default function* root() {
  yield all([spawn(myApplicationSagas)]);
}
