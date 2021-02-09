/* Type declarations for the application */

import {FunctionComponent} from 'react';
import {StatusBarStyle} from 'react-native';
import {Theme} from 'react-native-paper/src/types';

export type NavigationRoute = {
  key: number;
  name: string;
  component: FunctionComponent;
};

export interface CustomizedTheme extends Theme {
  spacing: (factor: number) => number;
}

export type BarStyles = {
  light: StatusBarStyle;
  dark: StatusBarStyle;
  default: StatusBarStyle;
  backgroundColor?: string;
};

export type NavigationType = {
  [key: string]: any;
};
