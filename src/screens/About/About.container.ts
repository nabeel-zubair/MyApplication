import {connect} from 'react-redux';
import {testActionBegin} from '../../store/actions/test.actions';
import About from './About';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  testAction: testActionBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
