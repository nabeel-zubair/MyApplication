import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import AboutStyles from '../../assets/theme/About';

type AboutProps = {
  testAction?: () => void;
  navigation: any;
};

const {fontSize, padding, width, height, backgroundColor} = AboutStyles;

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

const About: FunctionComponent<AboutProps> = ({testAction, navigation}) => {
  const onPressHandler = () => {
    testAction!();
    navigation.navigate('Home');
  };

  const title = 'About Screen';
  const navigateButton = 'Go To Home';

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      {/*@ts-ignore*/}
      <Button
        style={styles.button}
        color="#c62828"
        icon="chevron-left"
        mode="contained"
        onPress={onPressHandler}>
        {navigateButton}
      </Button>
    </View>
  );
};

export default About;
