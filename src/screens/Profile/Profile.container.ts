import {connect} from 'react-redux';
import {testActionBegin} from '../../store/actions/test.actions';
import Profile from './Profile';

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = {
  testAction: testActionBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
