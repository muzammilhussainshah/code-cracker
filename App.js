
import React, { useState, useEffect } from 'react';
import axios from "axios";

import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
import store from './src/store';

import { I18nextProvider } from 'react-i18next';
import i18n, { fetchTranslations } from './src/i18n';
import { Provider } from 'react-redux';
import { LogBox, StatusBar, View } from 'react-native';
import { DEFAULT_LANGUAGE } from './src/utilities';
import { getItem, setItem } from './src/helpers/AsyncStorage';
import { appLanguages } from './src/utilities/languageData';

// ignore warnings

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
]);

LogBox.ignoreAllLogs();
function App() {

  const setDefaultLocale = async () => {
    const lang = await getItem('languagecode');
    if (!lang) {
      await setItem('languagecode', DEFAULT_LANGUAGE);
    }
  };

  const getTranslations = async () => {
    return fetchTranslations();
  };
  const setLanguageAsync = async (lang) => {
    await setItem('languagecode', lang)
  }
  const updateDefaultLanguage = async () => {
    const langData = await getItem('languagecode');
    i18n.changeLanguage(langData)
    setLanguageAsync(langData)
  }
  useEffect(async () => { 
    await updateDefaultLanguage() 
    getTranslations(); 
    // setDefaultLocale(); 
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}

export default App;
