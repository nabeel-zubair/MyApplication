import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {drawerRoutes as routes} from '../routes';

const Drawer = createDrawerNavigator();

function LeftDrawer() {
  return (
    <Drawer.Navigator>
      {routes.map((route) => (
        <Drawer.Screen
          key={route.key}
          name={route.name}
          component={route.component}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default LeftDrawer;
