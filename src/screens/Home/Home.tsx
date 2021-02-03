import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-paper';

import HomeStyles from '../../assets/theme/Home';
import {CustomizedTheme} from '../../assets/types';

type HomeProps = {
  testAction: () => void;
  navigation: any;
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
});

const Home: FunctionComponent<HomeProps> = (props) => {
  const {testAction, navigation, theme} = props;

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
        color={theme.colors.primary}
        icon="chevron-right"
        mode="contained"
        onPress={onPressHandler}>
        {navigateButton}
      </Button>
    </View>
  );
};

export default withTheme(Home);
