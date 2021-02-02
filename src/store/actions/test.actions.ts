import {FILTER_ACTIONS} from './reduxActions';
import {FETCH_STATUS} from '../../assets/constants';

export const testAction = {
  pending: {
    type: FILTER_ACTIONS.TEST_ACTION.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: any) => ({
    type: FILTER_ACTIONS.TEST_ACTION.SUCCESS,
    status: FETCH_STATUS.SUCCESS,
    data,
  }),
  error: (error: any) => ({
    type: FILTER_ACTIONS.TEST_ACTION.ERROR,
    status: FETCH_STATUS.ERROR,
    error,
  }),
};

export const testActionBegin = () => ({
  type: FILTER_ACTIONS.TEST_ACTION_BEGIN,
});
