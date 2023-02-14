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
import Colors from '../../styles/Colors';

import { styles } from './styles';

const MainScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
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
                <View style={[styles.scoreBorderContainer, {
                  backgroundColor: 'rgba(0,0,0,.3)',
                  flexDirection: 'row',
                  justifyContent: "space-evenly",
                  width: '98%',
                  height: '85%',
                  borderWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,
                  elevation: 9,
                }]}>
                  <Text style={styles.score}>{`YOUR SCORE`}</Text>
                  <Text style={styles.score}>{`24240`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.languageContainer}>
              <ImageBackground
                source={require('../../assets/lang2.png')}
                style={{
                  height: '95%', width: '95%', resizeMode: 'contain',
                }} >
                <Text style={styles.language}>{`EN`}</Text>
              </ImageBackground>
            </View>

          </View>
          <View style={styles.helpContainer}>
            <View style={{
              height: '90%', backgroundColor: Colors.secondary, width: RFPercentage(6), borderRadius: RFPercentage(1),
              justifyContent: "center", alignItems: 'center'
            }}>
              <Text style={{ fontSize: RFPercentage(2.), fontWeight: '600', color: Colors.black, fontStyle: "italic" }}>{`?`}</Text>
              <Text style={{ fontSize: RFPercentage(2.), fontWeight: '600', color: Colors.black, fontStyle: "italic" }}>{`Help`}</Text>
            </View>
          </View>
          <View style={styles.msgContainer}>
            <Image
              source={require('../../assets/whatIsCode.png')}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
          </View>
        </View>
        <View style={styles.codeAnswerContainer}>
          <View style={{ flex: 6, backgroundColor: 'red' }}>
            <View style={{
              // height: 100,
              backgroundColor: 'blue',
              width: 50
            }}>
              <Image
                source={require('../../assets/numberFrame.png')}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
            </View>
          </View>
          <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require('../../assets/check.png')}
              style={{ height: '80%', width: '80%', resizeMode: 'contain' }} />
          </View>
          <View style={{ flex: 2, }}>
            <Image
              source={require('../../assets/hints.png')}
              style={{ height: '100%', width: '100%', marginLeft: '2%', resizeMode: 'contain' }} />
          </View>
        </View>
        <View style={styles.codeContainer}></View>
      </ImageBackground>
    </View>
  );
};
export default MainScreen;
