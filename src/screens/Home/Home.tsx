import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import HomeStyles from '../../assets/theme/Home';

type HomeProps = {
  testAction?: () => void;
  navigation: any;
};

const {fontSize, padding, width, height, backgroundColor} = HomeStyles;

const styles = StyleSheet.create({
  content: {
    width,
    height,
    padding,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize,
  },
});

const Home: FunctionComponent<HomeProps> = ({testAction, navigation}) => {
  const onPressHandler = () => {
    testAction!();
    navigation.navigate('About');
  };

  const title = 'Home Screen';
  const navigateButton = 'Go To About';

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <Button title={navigateButton} onPress={onPressHandler} />
    </View>
  );
};

export default Home;
