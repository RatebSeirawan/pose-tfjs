import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Text} from 'Components';
import {Routes} from 'Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoginScreen = ({navigation}) => {
  const onPress = useCallback(
    item => {
      navigation.push(Routes.Home);
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Button onPress={onPress}>
        <Text>Login</Text>
      </Button>
    </View>
  );
};

export {LoginScreen, LoginScreen as default};
