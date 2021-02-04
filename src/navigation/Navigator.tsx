import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import store from '../store';
import theme from '../assets/theme';
// import Main from "./Main";
import LeftDrawer from './LeftDrawer';
import {BAR_STYLE} from '../assets/constants';

const Stack = createStackNavigator();
// const mainNavigation = 'Main';
const LeftDrawerNavigation = 'LeftDrawer';

const Navigator = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar
            barStyle={BAR_STYLE.light}
            backgroundColor={BAR_STYLE.backgroundColor}
          />
          <SafeAreaView style={styles.topSafeArea} />
          <Stack.Navigator headerMode="none">
            {/* <Stack.Screen name={mainNavigation} component={Main} /> */}
            <Stack.Screen name={LeftDrawerNavigation} component={LeftDrawer} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: BAR_STYLE.backgroundColor,
  },
});

export default Navigator;
