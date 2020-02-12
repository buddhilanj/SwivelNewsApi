/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import ConfigureStore from './src/store';

const {store} = ConfigureStore();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
