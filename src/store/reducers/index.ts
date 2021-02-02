import {combineReducers} from 'redux';
import testReducer from './test.reducer';

const rootReducer = combineReducers({
  appRoot: testReducer,
});

export default rootReducer;
