/* Route declarations for the application */

import {NavigationRoute} from '../assets/types';
import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';

const appRoutes: NavigationRoute[] = [
  {
    key: 1,
    name: 'Home',
    // @ts-ignore
    component: Home,
  },
  {
    key: 2,
    name: 'About',
    // @ts-ignore
    component: About,
  },
];

const drawerRoutes: NavigationRoute[] = [
  {
    key: 1,
    name: 'Home',
    // @ts-ignore
    component: Home,
  },
  {
    key: 2,
    name: 'About',
    // @ts-ignore
    component: About,
  },
  {
    key: 3,
    name: 'Profile',
    // @ts-ignore
    component: Profile,
  },
];

export {appRoutes, drawerRoutes};
