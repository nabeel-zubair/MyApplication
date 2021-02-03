/* Global styles for the application */

import {DefaultTheme} from 'react-native-paper';
import {CustomizedTheme} from '../types';

const createSpacing = (multiplier: number) => 16 * multiplier;

const customTheme: CustomizedTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1565c0',
    accent: '#fdd835',
  },
  spacing: createSpacing,
};

export default customTheme;
