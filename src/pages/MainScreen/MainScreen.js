// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  Text,
  View,
  AsyncStorage,
  ImageBackground,
  Image
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../styles/Colors';

import { styles } from './styles';

const MainScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrongCodeContainer}>
        <Image
          source={require('../../assets/wrong.jpg')}
          style={styles.wrongCode} />
      </View>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
        <View style={styles.headerContainer}>
          <View style={styles.headerSubContainer}>
            <View style={styles.refreshIconContainer}>
              <Image
                source={require('../../assets/icon.png')}
                style={styles.refreshIcon} />
            </View>
            <View style={styles.scoreContainer}>
              <View style={styles.scoreBorderContainer}>
                <View style={[styles.scoreBorderContainer, styles.scoreSubContainer]}>
                  <Text style={styles.score}>{`YOUR SCORE`}</Text>
                  <Text style={styles.score}>{`24240`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.languageContainer}>
              <ImageBackground
                source={require('../../assets/lang2.png')}
                style={styles.enContainer} >
                <Text style={styles.language}>{`EN`}</Text>
              </ImageBackground>
            </View>

          </View>
          <View style={styles.helpContainer}>
            <View style={styles.helpSubContainer}>
              <Text style={styles.help}>{`?`}</Text>
              <Text style={styles.help}>{`Help`}</Text>
            </View>
          </View>
          <View style={styles.msgContainer}>
            <Image
              source={require('../../assets/whatIsCode.png')}
              style={styles.whatIsCode} />
          </View>
        </View>
        <View style={styles.codeAnswerContainer}>
          <View style={{ flex: 6, justifyContent: "center", flexDirection: 'row' }}>
            {[3, 4, 9, 7, 4].map((item) => (
              <View style={styles.codeAnswerSubContainer}>
                <AntDesign name='caretup' size={RFPercentage(3)} color={Colors.secondary} />
                <ImageBackground
                  source={require('../../assets/numberFrame.png')}
                  style={styles.frameIcon} >
                  <Text style={[styles.score, { fontSize: RFPercentage(2.6) }]}>{item}</Text>
                </ImageBackground>
                <AntDesign name='caretdown' size={RFPercentage(3)} color={Colors.secondary} />
              </View>
            ))}

          </View>
          <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require('../../assets/check.png')}
              style={styles.check} />
          </View>
          <View style={{ flex: 2, }}>
            <Image
              source={require('../../assets/hints.png')}
              style={styles.hint} />
          </View>
        </View>
        <View style={[styles.codeContainer, { paddingBottom: RFPercentage(3) }]}>
          {[0, 0, 0, 0].map(() => (
            <View style={styles.codeSubContainer}>
              <View style={styles.frameContainer}>
                {[0, 0, 0, 0].map(() => (
                  <View style={{ flex: 1 }}>
                    <ImageBackground
                      source={require('../../assets/numberFrame.png')}
                      resizeMode="contain"
                      style={styles.frameIcon} >
                      <Text style={[styles.score, { fontSize: RFPercentage(2.6) }]}>{`3`}</Text>
                    </ImageBackground>
                  </View>
                ))}
              </View>
              <View style={{ flex: 1, backgroundColor: Colors.black }}>
                <ImageBackground
                  source={require('../../assets/hintframe.png')}
                  resizeMode="stretch"
                  style={styles.codeFrame}>
                  <Text style={[styles.score, styles.resultMsg]}>{`TWO NUMBERS ARE CORRECT BUT WRONGLY PLACED`}</Text>
                </ImageBackground>
              </View>
            </View>
          ))}
        </View>
      </ImageBackground >
    </View >
  );
};
export default MainScreen;
