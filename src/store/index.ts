import {createStore, applyMiddleware} from 'redux';
import sagas from './sagas';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
let middlewaresToApply = [sagaMiddleware];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewaresToApply.push(createFlipperDebugger());
}

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewaresToApply)),
);

sagaMiddleware.run(sagas);
