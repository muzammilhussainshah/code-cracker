
import React, { useState, useEffect } from 'react';
import axios from "axios";

import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
import store from './src/store';

import { Provider } from 'react-redux';
import { LogBox, StatusBar, View } from 'react-native';

function App() {

  // useEffect(async () => { LogBox.ignoreLogs(['Remote debugger']); }, [])
  
  return (
    <Provider store={store}>
      <StatusBar
        hidden={true}
      />
      <SafeAreaProvider>
        <PortalProvider>
          <Navigation />
        </PortalProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
