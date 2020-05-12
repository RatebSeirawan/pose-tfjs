import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import AppStack from './AppStack';

enableScreens();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <AppStack />
    </NavigationContainer>
  );
};

export {RootNavigator, RootNavigator as default};
