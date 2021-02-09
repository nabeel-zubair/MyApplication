import {connect} from 'react-redux';
import {testActionBegin} from '../../store/actions/test.actions';
import {getUsersList} from '../../store/selectors/users.selectors';
import About from './About';

const mapStateToProps = (state: any) => {
  const usersList = getUsersList(state);
  return {usersList};
};

const mapDispatchToProps = {
  testAction: testActionBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
