import reactotron from 'reactotron-react-native';

let log = () => {};

if (__DEV__) {
  log = params => {
    reactotron.logImportant(params);
  };
}

export {log, log as default};
