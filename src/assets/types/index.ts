/* Type declarations for the application */

import {FunctionComponent} from 'react';

export type NavigationRoute = {
  key: number;
  name: string;
  component: FunctionComponent;
};
