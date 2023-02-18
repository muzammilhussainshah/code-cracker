// @app
import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

import { color } from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import firestore from '@react-native-firebase/firestore';
import Colors from '../../styles/Colors';

import {
  CodeAnwer,
  Codes,
  DropDown,
  Header
} from './Components/Component';

import { styles } from './styles';

const MainScreen = ({ navigation, route }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [selectedLanguage, setselectedLanguage] = useState('EN')

  // Get user document with an ID of ABC
  useEffect(async () => {

    const user = await firestore().collection('Users').doc('w6nGp47IlLsO9htyYf2q').get();
    console.log(user.data(), 'usersusers')
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
        {isDropDownOpen &&
          <DropDown
            isDropDownOpen={isDropDownOpen}
            setselectedLanguage={setselectedLanguage}
            setIsDropDownOpen={setIsDropDownOpen} />
        }
        <Header
          selectedLanguage={selectedLanguage}
          setIsDropDownOpen={() => setIsDropDownOpen(!isDropDownOpen)} />

        <CodeAnwer />

        <Codes />

      </ImageBackground >
    </View >
  );
};
export default MainScreen;
