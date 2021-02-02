/* Redux Action Types */

const asyncActionType = (type: any) => ({
  PENDING: `${type} - Pending`,
  SUCCESS: `${type} - Success`,
  ERROR: `${type} - Error`,
});

export const FILTER_ACTIONS = {
  TEST_ACTION_BEGIN: '[MY_APPLICATION]_TEST_ACTION_BEGIN',
  TEST_ACTION: asyncActionType('[[MY_APPLICATION]TEST_ACTION]'),
};
