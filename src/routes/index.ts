/* Route declarations for the application */

import {NavigationRoute} from '../assets/types';
import Home from '../screens/Home';
import About from '../screens/About';

const appRoutes: NavigationRoute[] = [
  {
    key: 1,
    name: 'Home',
    component: Home,
  },
  {
    key: 2,
    name: 'About',
    component: About,
  },
];

export default appRoutes;
