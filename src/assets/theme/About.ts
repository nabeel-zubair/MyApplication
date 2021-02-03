/* Styles for About Screen */

import {Dimensions, Platform} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = {
  width,
  height: Platform.OS === 'ios' ? height - 100 : height,
  backgroundColor: '#ffffff',
  fontSize: 30,
  padding: 16,
};

export default styles;
