if (__DEV__) {
  require('Config/Reactotron');
}

import {AppRegistry, unstable_enableLogBox} from 'react-native';
import App from 'Src/App';
import {name as appName} from './app.json';

unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
