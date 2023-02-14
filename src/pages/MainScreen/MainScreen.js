// @app
import React from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';

import {
  CodeAnwer,
  Codes,
  Header
} from './Components/Component';

import { styles } from './styles';

const MainScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
      
        <Header />
      
        <CodeAnwer />
      
        <Codes />
      
      </ImageBackground >
    </View >
  );
};
export default MainScreen;
