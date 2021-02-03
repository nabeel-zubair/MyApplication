import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store';
import routes from './src/routes';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar barStyle="light-content" backgroundColor="#2e2e2e" />
          <SafeAreaView style={styles.topSafeArea} />
          <Stack.Navigator headerMode="none">
            {routes.map((route) => (
              <Stack.Screen
                key={route.key}
                name={route.name}
                component={route.component}
              />
            ))}
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: '#2e2e2e',
  },
});

export default App;
