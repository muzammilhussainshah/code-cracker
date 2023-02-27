// @app
import React, { useEffect, useState, } from 'react';
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
  useDispatch, useSelector
} from 'react-redux';
import {
  CodeAnwer,
  Codes,
  DropDown,
  Header
} from './Components/Component';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const MainScreen = ({ navigation, route }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [selectedLanguage, setselectedLanguage] = useState('EN')
  const [CodeHintsST, setCodeHintsST] = useState()
  const currentUser = useSelector((state) => state.root.currentUser);
  const codeWithHints = useSelector((state) => state.root.codeWithHints);
  // Get user document with an ID of ABC

  useEffect(() => {
    setCodeHintsST(codeWithHints[Math.floor(Math.random() * codeWithHints.length)])

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
          score={currentUser.score}
          setIsDropDownOpen={() => setIsDropDownOpen(!isDropDownOpen)} />
        {CodeHintsST && <CodeAnwer codeWithHints={CodeHintsST} navigation={navigation} currentUser={currentUser}/>}
        {CodeHintsST && <Codes codeWithHints={CodeHintsST} />}
        

      </ImageBackground >
    </View >
  );
};
export default MainScreen;
