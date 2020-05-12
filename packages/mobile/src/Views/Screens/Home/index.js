import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from 'Components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Aloha !!</Text>
    </View>
  );
};

export {HomeScreen, HomeScreen as default};
