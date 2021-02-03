import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

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
    justifyContent: 'center',
  },
  text: {
    fontSize,
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
      <Button
        title={navigateButton}
        onPress={onPressHandler}
      />
    </View>
  );
};

export default About;
