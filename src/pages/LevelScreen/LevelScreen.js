// @app
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { onShare, rateUs } from './Components/Component';
import { CommonActions } from '@react-navigation/native';

const LevelScreen = ({navigation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/nextBG.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
        <TouchableOpacity
        onPress={()=>{


const resetAction = CommonActions.reset({
  index: 0,
  routes: [{ name: 'MainScreen' }],
});

navigation.dispatch(resetAction);
          
          
        }
     
        }
          activeOpacity={.8}
          style={[styles.nextContainer, { flex: 6, justifyContent: "flex-end" }]}>

          <FontAwesome
            name='angle-double-right'
            color={Colors.white}
            size={RFPercentage(10)}
            style={{ fontWeight: 'bold' }} />
          <Text
            style={styles.next}
          >{`Next`}</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            onPress={rateUs}
            activeOpacity={.8}
            style={styles.nextContainer}>
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
