// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
  Share,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Rate, { AndroidMarket } from 'react-native-rate'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from '../../styles/Colors';
import { styles } from './styles';

const LevelScreen = ({ navigation, route }) => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Would you like to share Football App ',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const rateUs = () => {
    const options = {
      AppleAppID: "2193813192",
      GooglePackageName: "com.mywebsite.myapp",
      AmazonPackageName: "com.mywebsite.myapp",
      OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: true,
      openAppStoreIfInAppFails: true,
      fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
    }
    Rate.rate(options, (success, errorMessage) => {
      if (success) {
        console.log(success, errorMessage)
      }
      if (errorMessage) {
        // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
        console.error(`Example page Rate.rate() error: ${errorMessage}`)
      }
    })
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/nextBG.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
        <TouchableOpacity activeOpacity={.8} style={[styles.nextContainer, { flex: 6, justifyContent: "flex-end" }]}>

          <FontAwesome name='angle-double-right' color={Colors.white} size={RFPercentage(10)} style={{ fontWeight: 'bold' }} />
          <Text
            style={styles.next}
          >{`Next`}</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            onPress={rateUs}

            activeOpacity={.8} style={styles.nextContainer}>
            <Image source={require('../../assets/star.png')}
              style={styles.starIcon}
            />
            <Text
              style={styles.next}
            >{`Rate Us`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.8}
            style={styles.nextContainer}
            onPress={() => { onShare() }}
          >

            <Image source={require('../../assets/rate.png')}
              style={styles.rateIcon}
            />
            <Text
              style={styles.next}
            >{`Next`}</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground >

    </View >
  );
};
export default LevelScreen;
