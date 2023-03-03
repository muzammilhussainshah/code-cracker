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
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { WrongModal } from './Components/Component';
import { styles } from './styles';

const MainScreen = ({ navigation, route }) => {
  const [isWrong, setisWrong] = useState(false)
  const [isReset, setisReset] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [selectedLanguage, setselectedLanguage] = useState('EN')
  const [CodeHintsST, setCodeHintsST] = useState()
  const currentUser = useSelector((state) => state.root.currentUser);
  const codeWithHints = useSelector((state) => state.root.codeWithHints);
  // Get user document with an ID of ABC
  const isFocused = useIsFocused();
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];

  console.log(prevRoute, 'previousRouteName')

  useEffect(() => {
    if (prevRoute?.name === "LevelScreen") {
      // setCodeHintsST(codeWithHints[Math.floor(Math.random() * codeWithHints.length)]);
      setCodeForUI()

    }
  }, [isFocused])

  useEffect(() => {
    // setCodeHintsST(codeWithHints[Math.floor(Math.random() * codeWithHints.length)])
    setCodeForUI()

  }, [])
  const setCodeForUI = () => {
    setCodeHintsST(codeWithHints[Math.floor(Math.random() * codeWithHints.length)])
  }


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={[styles.bgImageStyle, { opacity: isWrong || isReset ? 0.6 : 1 }]}>

        {isDropDownOpen &&
          <DropDown
            isDropDownOpen={isDropDownOpen}
            setselectedLanguage={setselectedLanguage}
            setIsDropDownOpen={setIsDropDownOpen} />
        }
        <Header
          isWrong={isWrong}
          isReset={isReset}
          resetModalFunc={(bool) => setisReset(bool)}

          selectedLanguage={selectedLanguage}
          score={currentUser.score}
          setIsDropDownOpen={() => setIsDropDownOpen(!isDropDownOpen)} />

        {CodeHintsST && <CodeAnwer codeWithHints={CodeHintsST} navigation={navigation} currentUser={currentUser}
          isReset={isReset}
          wrongModalFunc={(bool) => setisWrong(bool)} isWrong={isWrong} resetModalFunc={(bool) => setisReset(bool)}
          setCodeForUI={() => setCodeForUI()}

        />}
        {CodeHintsST && <Codes codeWithHints={CodeHintsST} />}


      </ImageBackground >
    </View >
  );
};
export default MainScreen;
