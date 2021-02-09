import {Map} from 'immutable';
import createSelector from './reselect';

const getUsers = (state: any) => {
  const {appRoot} = state;
  return appRoot || Map();
};

export const getUsersList = createSelector(getUsers, (state) => {
  return state.getIn(['test', 'value']);
});
