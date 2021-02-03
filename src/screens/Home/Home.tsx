import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

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
  },
  text: {
    fontSize,
  },
  button: {
    justifyContent: 'center',
    margin: 32,
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
      {/*@ts-ignore*/}
      <Button
        style={styles.button}
        color="#0277bd"
        icon="chevron-right"
        mode="contained"
        onPress={onPressHandler}>
        {navigateButton}
      </Button>
    </View>
  );
};

export default Home;
