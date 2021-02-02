import {fromJS} from 'immutable';

import {FILTER_ACTIONS} from '../actions/reduxActions';
import {FETCH_STATUS} from '../../assets/constants';

const testReducer = (state = fromJS({test: {}}), action: any) => {
  switch (action.type) {
    case FILTER_ACTIONS.TEST_ACTION.PENDING:
      return state.setIn(
        ['test', 'value'],
        action.status === FETCH_STATUS.LOADING,
      );
    case FILTER_ACTIONS.TEST_ACTION.SUCCESS:
      return state.setIn(['test', 'value'], action.data);
    case FILTER_ACTIONS.TEST_ACTION.ERROR:
      return state.setIn(['test', 'value'], action.error);
    default:
      return state;
  }
};

export default testReducer;
