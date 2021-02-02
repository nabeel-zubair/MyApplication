import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import HomeStyles from '../../assets/theme/Home';

type HomeProps = {
  // Props go here
  testAction?: () => void;
};

const {fontSize} = HomeStyles;

const styles = StyleSheet.create({
  content: {
    // Content styles
  },
  text: {
    fontSize,
  },
});

const Home: FunctionComponent<HomeProps> = ({testAction}) => {
  const title = 'Home Screen';
  const buttonText = 'Dispatch';

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <Button title={buttonText} onPress={() => testAction!()} />
    </View>
  );
};

export default Home;
