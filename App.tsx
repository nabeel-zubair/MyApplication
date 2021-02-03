import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import store from './src/store';
import routes from './src/routes';
import theme from './src/assets/theme';
import {BAR_STYLE} from './src/assets/constants';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Provider store={store}>
            <StatusBar
              barStyle={BAR_STYLE.light}
              backgroundColor={BAR_STYLE.backgroundColor}
            />
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
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: BAR_STYLE.backgroundColor,
  },
});

export default App;
