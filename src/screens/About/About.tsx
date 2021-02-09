import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-paper';

import AboutStyles from '../../assets/theme/About';
import {CustomizedTheme, NavigationType} from '../../assets/types';

type AboutProps = {
  testAction: () => void;
  navigation: NavigationType;
  theme: CustomizedTheme;
  usersList: Function;
};

const {fontSize, padding, width, height, backgroundColor, margin} = AboutStyles;

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
});

const About: FunctionComponent<AboutProps> = (props) => {
  const {testAction, usersList, navigation, theme} = props;

  const onPressHandler = () => {
    testAction();
    navigation.navigate('Home');
  };

  useEffect(() => {
    console.log(usersList);
  }, [usersList]);

  const title = 'About Screen';
  const navigateButton = 'Go To Home';

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      {/*@ts-ignore*/}
      <Button
        style={styles.button}
        color={theme.colors.accent}
        icon="chevron-left"
        mode="contained"
        onPress={onPressHandler}>
        {navigateButton}
      </Button>
    </View>
  );
};

export default withTheme(About);
