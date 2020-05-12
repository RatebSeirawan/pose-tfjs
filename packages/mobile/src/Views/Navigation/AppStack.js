import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from 'Constants';

import Login from 'Screens/Login';
import Home from 'Screens/Home';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Login} headerMode="float">
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export {AppStack, AppStack as default};
