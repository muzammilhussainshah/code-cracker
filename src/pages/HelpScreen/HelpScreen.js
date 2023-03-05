// @app
import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';

import { t } from 'i18next';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../styles/Colors';
import { styles } from './styles';

const HelpScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={[styles.bgImageStyle]}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => { navigation.pop() }}>
            <AntDesign name={'left'} color={Colors.white} size={RFPercentage(3)} />
          </TouchableOpacity>
          <Text style={styles.intro}>{t('howtoPlay')}</Text>
        </View>
        <Text style={styles.score}>{t('helpText')}</Text>
      </ImageBackground >
    </View >
  );
};
export default HelpScreen;
