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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { onShare, rateUs } from './Components/Component';
import { CommonActions } from '@react-navigation/native';
import { t } from 'i18next';

const LevelScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/nextBG.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
        <TouchableOpacity
          onPress={() => {
            const resetAction = CommonActions.reset({
              index: 0,
              routes: [{ name: 'MainScreen' }],
            });
            navigation.dispatch(resetAction);
          }}
          activeOpacity={.8}
          style={[styles.nextContainer, { flex: 6, justifyContent: "flex-end" }]}>

          <FontAwesome
            name='angle-double-right'
            color={Colors.white}
            size={RFPercentage(10)}
            style={{ fontWeight: 'bold' }} />
          <Text
            style={styles.next}
          >{t('next')}</Text>
        </TouchableOpacity>
        <View style={[styles.buttonContainer]}>

          <TouchableOpacity
            onPress={rateUs}
            activeOpacity={.8}
            style={styles.nextContainer}> 
            <MaterialIcons
              style={styles.elevation}
              name="star-rate"
              color={Colors.orange}
              size={RFPercentage(10)}
            />
            <Text
              style={[styles.next]}
            >{t('rateUs')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.8}
            style={styles.nextContainer}
            onPress={() => { onShare() }}
          > 
            <Entypo
              style={styles.elevation}
              color={Colors.orange}
              size={RFPercentage(10)}
              name='share' />
            <Text
              style={styles.next}
            >{t('Share')}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground >

    </View >
  );
};
export default LevelScreen;
