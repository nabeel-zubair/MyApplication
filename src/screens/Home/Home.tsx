import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import HomeStyles from '../../assets/theme/Home';

type HomeProps = {
  // Props go here
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

const Home: FunctionComponent<HomeProps> = () => {
  const title = 'Home Screen';

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Home;
