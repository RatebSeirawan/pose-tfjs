import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Thunk from 'redux-thunk';

import appReducer from './appSlice';

let store;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    app: appReducer,
  }),
);

if (__DEV__) {
  const reactotron = require('Config/Reactotron').default;
  const reactotronMiddleware = reactotron.createEnhancer();
  store = createStore(
    persistedReducer,
    compose(applyMiddleware(Thunk), reactotronMiddleware),
  );
} else {
  store = createStore(persistedReducer, compose(applyMiddleware(Thunk)));
}

const persistor = persistStore(store);

export {store, persistor};
