import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-paper';
import MapView from 'react-native-maps';

import HomeStyles from '../../assets/theme/Home';
import {CustomizedTheme, NavigationType} from '../../assets/types';

type HomeProps = {
  testAction: () => void;
  navigation: NavigationType;
  theme: CustomizedTheme;
};

const {fontSize, width, height, padding, backgroundColor, margin} = HomeStyles;

const styles = StyleSheet.create({
  content: {
    width,
    height,
    padding,
    backgroundColor,
    alignItems: 'center',
  },
  text: {
    fontSize,
  },
  button: {
    justifyContent: 'center',
    margin,
  },
  mapView: {
    height: 640,
    width,
  },
});

const Home: FunctionComponent<HomeProps> = (props) => {
  const {testAction, navigation, theme} = props;

  const onPressHandler = () => {
    testAction();
    navigation.navigate('About');
  };

  const title = 'Home Screen';
  const navigateButton = 'Go To About';
  const testLocation = {
    latitude: 31.529977,
    longitude: 74.344114,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      {/*@ts-ignore*/}
      <Button
        style={styles.button}
        color={theme.colors.primary}
        icon="chevron-right"
        mode="contained"
        onPress={onPressHandler}>
        {navigateButton}
      </Button>
      <MapView style={styles.mapView} initialRegion={testLocation} />
    </View>
  );
};

export default withTheme(Home);
