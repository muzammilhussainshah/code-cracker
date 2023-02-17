
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { setItem } from '../../../helpers/AsyncStorage';
import i18n from '../../../i18n';
import Colors from '../../../styles/Colors';
import { appLanguages } from '../../../utilities/languageData';

import { styles } from '../styles';

export const Header = ({ setIsDropDownOpen, selectedLanguage }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.refreshIconContainer}>
                    <Image
                        source={require('../../../assets/icon.png')}
                        style={styles.refreshIcon} />
                </TouchableOpacity>
                <View style={styles.scoreContainer}>
                    <View style={styles.scoreBorderContainer}>
                        <View style={[styles.scoreBorderContainer, styles.scoreSubContainer]}>
                            <Text style={styles.score}>{
                                // t('fullName')
                                t('yourScore')
                                // `YOUR SCORE`
                            }</Text>
                            <Text style={styles.score}>{`24240`}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => setIsDropDownOpen()}
                    style={styles.languageContainer}>
                    <ImageBackground
                        source={require('../../../assets/lang2.png')}
                        style={styles.enContainer} >
                        <Text style={styles.language}>{selectedLanguage}</Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View>
            <View style={styles.helpContainer}>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.helpSubContainer}>
                    <Text style={styles.help}>{`?`}</Text>
                    <Text style={styles.help}>{`Help`}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.msgContainer}>
                <Image
                    source={require('../../../assets/whatIsCode.png')}
                    style={styles.whatIsCode} />
            </View>
        </View>
    )
}
const code = () => {
    const [value, setValue] = useState(0)
    return (
        <View style={styles.codeAnswerSubContainer}>
            <TouchableOpacity
                onPress={() => {
                    if (value < 9) setValue(value + 1)
                }}
                activeOpacity={.8}>
                <AntDesign
                    name='caretup'
                    size={RFPercentage(3)}
                    color={Colors.secondary} />
            </TouchableOpacity>
            <ImageBackground
                source={require('../../../assets/numberFrame.png')}
                style={styles.frameIcon} >
                <Text style={[styles.score, { fontSize: RFPercentage(2.6) }]}>{value}</Text>
            </ImageBackground>
            <TouchableOpacity
                onPress={() => {
                    if (value > 0) setValue(value - 1)
                }}
                activeOpacity={.8}>
                <AntDesign
                    name='caretdown'
                    size={RFPercentage(3)}
                    color={Colors.secondary} />
            </TouchableOpacity>

        </View>
    )
}
export const CodeAnwer = () => {

    return (
        <View style={styles.codeAnswerContainer}>
            <View style={styles.answerFrameContainer}>
                {[0, 0].map(() => code())}

            </View>
            <TouchableOpacity activeOpacity={.8} style={styles.checkBtn}>
                <Image
                    source={require('../../../assets/check.png')}
                    style={styles.check} />
            </TouchableOpacity>
            <View style={{ flex: 2, }}>
                <Image
                    source={require('../../../assets/hints.png')}
                    style={styles.hint} />
            </View>
        </View>

    )
}
export const Codes = () => {
    return (
        <View style={[styles.codeContainer, { paddingBottom: RFPercentage(3) }]}>
            {[0, 0, 0, 0].map((val,index) => (
                <View style={styles.codeSubContainer} key={index.toString()}>
                    <View style={styles.frameContainer}>
                        {[0, 0, 0, 0].map((val,index) => (
                            <TouchableOpacity activeOpacity={.8} style={{ flex: 1 }} key={index.toString()} >
                                <ImageBackground
                                    source={require('../../../assets/numberFrame.png')}
                                    resizeMode="contain"
                                    style={styles.frameIcon} >
                                    <Text style={[styles.score, { fontSize: RFPercentage(2.6) }]}>{`3`}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.resultMsgContainer}>
                        <ImageBackground
                            source={require('../../../assets/hintframe.png')}
                            resizeMode="stretch"
                            style={styles.codeFrame}>
                            <Text style={[styles.score, styles.resultMsg]}>{`TWO NUMBERS ARE CORRECT BUT WRONGLY PLACED`}</Text>
                        </ImageBackground>
                    </View>
                </View>
            ))}
        </View>

    )
}
export const DropDown = ({ setselectedLanguage, setIsDropDownOpen, isDropDownOpen }) => {


    const setLanguageAsync = async (lang) => {
        await setItem('languagecode', lang)
    }

    const onLanguageSelect = (langId) => {
        let lang = appLanguages.find((item) => item.id === langId)
        console.log(lang?.code, 'lang?.codelang?.code')
        i18n.changeLanguage(lang?.code)
        setLanguageAsync(lang?.code)
        // setSelected(langId)
    }
    return (
        <View style={styles.dropDown}>
            {
                // ['EN', 'RU', 'FR']
                appLanguages.map((item) => (
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={() => {
                            onLanguageSelect(item.id)
                            setselectedLanguage(item.code)
                            setIsDropDownOpen(!isDropDownOpen)
                        }}
                        style={styles.dropDownContainer}>
                        <Text style={styles.dropDownVal}>{item.code}</Text>
                    </TouchableOpacity>
                ))}
        </View>
    )
}