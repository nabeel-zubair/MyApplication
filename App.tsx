import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';

import Home from './src/screens/Home';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2e2e2e" />
      <SafeAreaView style={styles.topSafeArea} />
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    width,
    height,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: '#2e2e2e',
  },
});

export default App;
