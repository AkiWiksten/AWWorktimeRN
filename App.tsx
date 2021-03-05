import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainContainer from './src/containers/MainContainer';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

export default () => (
  <StoreProvider store={store}>
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  </StoreProvider>
);
