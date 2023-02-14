// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator,
  ImageBackground
} from 'react-native';


import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  useDispatch,
  useSelector
} from 'react-redux';

// import Button from '../../components/Button';
// import Header from '../../components/Header'; 
import { styles } from './styles';

const LevelScreen = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode="cover" style={styles.bgImageStyle}>
        <View style={{ flex: 2, backgroundColor: 'red', marginHorizontal: RFPercentage(1) }}>
          <View style={{ flex: 1, backgroundColor: "blue", flexDirection: 'row' }}>
            <View style={{ flex: 1.5, backgroundColor: "blue" }}>
              <Image
                source={require('../../assets/icon.png')} style={{
                  height: '100%', width: "100%",
                  resizeMode: 'contain'
                }}
              ></Image>
            </View>
            <View style={{ flex: 7, backgroundColor: 'red' ,justifyContent:"center",alignItems:'center'}}>
              <View style={{height:'75%',backgroundColor:'blue',width:'90%',borderRadius:5}}></View>
            </View>
            <View style={{ flex: 1.5, backgroundColor: "blue" }}></View>

          </View>
          <View style={{ flex: 1, backgroundColor: "red" }}></View>
          <View style={{ flex: 1, backgroundColor: "green" }}></View>
        </View>
        <View style={{ flex: 4, backgroundColor: 'blue', marginHorizontal: RFPercentage(1) }}></View>
        <View style={{ flex: 4, backgroundColor: 'red', marginHorizontal: RFPercentage(1) }}></View>
      </ImageBackground>
    </View >
  );
};
export default LevelScreen;
