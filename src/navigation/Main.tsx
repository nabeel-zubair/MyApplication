import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import {appRoutes as routes} from '../routes';

const Stack = createStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator headerMode="none">
      {routes.map((route) => (
        <Stack.Screen
          key={route.key}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Main;
