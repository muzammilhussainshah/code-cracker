
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
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Colors from '../../../styles/Colors';
import { correctAnswer, wrongAnswer, resetCode } from '../../../store/action/action';
import { appLanguages } from '../../../utilities/languageData';
import Loader from '../../../components/Loader';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import { DEFAULT_LANGUAGE } from './src/utilities';

import { styles } from '../styles';
import { DEFAULT_LANGUAGE } from '../../../utilities';

export const Header = ({ setIsDropDownOpen, selectedLanguage, score, isWrong, isReset, resetModalFunc }) => {
    // console.log(DEFAULT_LANGUAGE,'DEFAULT_LANGUAGEDEFAULT_LANGUAGE')

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
                <TouchableOpacity
                    onPress={() => resetModalFunc(true)}
                    activeOpacity={.8} disabled={isWrong || isReset}
                    style={styles.refreshIconContainer}>
                    <Image
                        source={require('../../../assets/icon.png')}
                        style={styles.refreshIcon} />
                </TouchableOpacity>
                <View style={styles.scoreContainer}>
                    <View style={styles.scoreBorderContainer}>
                        <View style={[styles.scoreBorderContainer, styles.scoreSubContainer]}>
                            <Text style={styles.score}>{
                                t('yourScore')
                            }</Text>
                            <Text style={styles.score}>{score}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    disabled={isWrong || isReset}
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
                    disabled={isWrong || isReset}
                    activeOpacity={.8}
                    style={styles.helpSubContainer}>
                    {selectedLanguage == 'EN' &&
                        <Text style={styles.help}>{`?`}</Text>
                    }
                    <Text style={styles.help}>{t('help')}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.msgContainer}>
                <Text style={styles.whatIsCodeText}>{t('WhatIsCode')}</Text>
                <Image
                    source={require('../../../assets/whatIsCodeBg.png')}
                    style={styles.whatIsCode} />
            </View>
        </View >
    )
}
const Code = ({ v, i, callBack }) => {
    const [value, setValue] = useState(0)
    return (
        <View style={styles.codeAnswerSubContainer}>
            <TouchableOpacity
                onPress={() => {
                    if (value < 9) {
                        callBack(value + 1)
                        setValue(value + 1)
                    }
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
                    if (value > 0) {
                        callBack(value - 1)
                        setValue(value - 1)
                    }
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
export const CodeAnwer = ({ codeWithHints, navigation, currentUser, wrongModalFunc, isWrong, isReset, resetModalFunc, setCodeForUI }) => {
    const [codeSt, setCodeSt] = useState([])
    const [isLoader, setisLoader] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        let initArray = []
        codeWithHints.guessCode.map(() => { initArray.push(0) })
        setCodeSt(initArray)
    }, [codeWithHints.guessCode])

    return (
        <View style={styles.codeAnswerContainer}>
            <View style={styles.answerFrameContainer}>

                {isWrong ? <WrongModal currentUser={currentUser} wrongModalFunc={wrongModalFunc} /> :
                    isReset ? <ResetModal currentUser={currentUser} resetModalFunc={resetModalFunc} setCodeForUI={setCodeForUI} setisLoader={setisLoader} /> :
                        codeWithHints?.guessCode?.map((v, i) =>
                            <Code v={v} i={i}
                                callBack={(codeDigit) => {
                                    let arrayCopy = JSON.parse(JSON.stringify(codeSt));
                                    arrayCopy.splice(i, 1, codeDigit)
                                    setCodeSt(arrayCopy)
                                }}
                            />
                        )
                }

            </View>

            {isLoader ?
                <Loader />
                :
                <View

                    activeOpacity={.8} style={styles.checkBtn}>
                    <TouchableOpacity
                        disabled={isWrong || isReset}

                        onPress={() => {
                            console.log(codeSt, 'codeStcodeSt', codeWithHints.guessCode)
                            setisLoader(true)
                            if (JSON.stringify(codeSt) === JSON.stringify(codeWithHints.guessCode)) {//correct asnwer
                                dispatch(correctAnswer(navigation, currentUser, setisLoader))
                            } else {
                                console.log("The arrays are different.");//wrong asnwer

                                setisLoader(false);
                                dispatch(wrongAnswer(currentUser, navigation));
                                wrongModalFunc(true);

                            }
                        }}
                        style={{ width: '50%', height: '100%', justifyContent: "center", alignItems: 'center' }}>
                        <Text style={styles.whatIsCodeText}>{t('Check')}</Text>
                        <Image
                            source={require('../../../assets/checkcopy.png')}
                            style={styles.check} />
                    </TouchableOpacity>
                </View>

            }

            <View style={{ flex: 2.1, justifyContent: "center", alignItems: 'center', backgroundColor: 'red' }}>
                <Text style={styles.whatIsCodeText}>{t('hint')}</Text>
                <Image
                    source={require('../../../assets/hintsNew.png')}
                    style={styles.hint} />
            </View>
        </View >

    )
}

export const ResetModal = ({ currentUser, resetModalFunc, setCodeForUI, setisLoader }) => {
    const dispatch = useDispatch()

    return (
        <View style={{ width: '105%', height: '100%', }}>
            <TouchableOpacity onPress={() => resetModalFunc(false)} style={{ position: "absolute", zIndex: 200, right: 10, }}>
                <FontAwesome
                    name='close'
                    color={Colors.white}
                    size={RFPercentage(5)}
                    style={{ fontWeight: 'bold' }} />
            </TouchableOpacity>

            <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 44, justifyContent: "center", alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    setisLoader(true)
                    dispatch(resetCode(currentUser, resetModalFunc, setisLoader, setCodeForUI));
                }}
                    style={{ borderBottomColor: 'white', borderWidth: 1 }}>
                    <Text style={{ color: Colors.white, padding: '2%' }}>{t('resetCode')}</Text>
                </TouchableOpacity>
            </View>

            <Image
                source={require('../../../assets/wrongcopy.png')}
                style={{ width: '100%', height: 200, }}
            />
            <View style={{ position: "absolute", zIndex: 1, width: '100%', height: 200, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: Colors.white, marginBottom: '5%' }}>{currentUser.remainingRefresh + t('resetcodeleft')} </Text>
            </View>
        </View>
    )
}

export const WrongModal = ({ currentUser, wrongModalFunc }) => {
    return (
        <View style={{ width: '105%', height: '100%' }}>
            <TouchableOpacity onPress={() => wrongModalFunc(false)} style={{ position: "absolute", zIndex: 2, right: 10, }}>
                <FontAwesome
                    name='close'
                    color={Colors.white}
                    size={RFPercentage(5)}
                    style={{ fontWeight: 'bold' }} />
            </TouchableOpacity>
            <Image
                source={require('../../../assets/wrong.jpg')}
                style={{ width: '100%', height: 200, }}
            // style={{ width: 200, height: 200, elevation: 5 }}
            />
            <View style={{ position: "absolute", zIndex: 1, width: '100%', height: 200, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ color: Colors.white, marginBottom: '5%' }}>{currentUser.remainingWrongAttempt < 2 ? t('demoteMsg') : currentUser.remainingWrongAttempt - 1 + t('wrongAttempMsg')} </Text>
            </View>
        </View>
    )
}
const getkeyLanguage = (key) => {
    if (key == "Nothing correct") return t('hint1')
    if (key == "1 number correct and well placed") return t('hint2')
    if (key == "1 number correct and well placed.") return t('hint3')
    if (key == "2 number correct and well placed") return t('hint4')
    if (key == "1 number correct but incorrectly placed") return t('hint5')
    if (key == "1 number correct but incorrectly placed.") return t('hint6')
    if (key == "1 number correct but incorrectly placed.,") return t('hint7')
    if (key == "2 number correct but incorrectly placed") return t('hint8')
    if (key == "2 number correct but incorrectly placed.") return t('hint9')
}
export const Codes = ({ codeWithHints }) => {
    console.log(codeWithHints, 'codeWithHintsijii')
    return (
        <View style={[styles.codeContainer, { paddingBottom: RFPercentage(3) }]}>

            {
                Object.keys(codeWithHints).map((key, index) => {
                    if (key !== 'guessCode')
                        return (
                            <View style={styles.codeSubContainer} key={index.toString()}>
                                <View style={styles.frameContainer}>
                                    {codeWithHints[key].map((val, index) => (
                                        <TouchableOpacity activeOpacity={.8} style={{ flex: 1 }} key={index.toString()} >
                                            <ImageBackground
                                                source={require('../../../assets/numberFrame.png')}
                                                resizeMode="contain"
                                                style={[styles.frameIcon, { height: '100%', }]} >
                                                <Text style={[styles.score, { fontSize: RFPercentage(2.6) }]}>{val}</Text>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.resultMsgContainer}>
                                    <ImageBackground
                                        source={require('../../../assets/hintframe.png')}
                                        resizeMode="stretch"
                                        style={styles.codeFrame}>
                                        <Text style={[styles.score, styles.resultMsg]}>{getkeyLanguage(key)}</Text>
                                    </ImageBackground>
                                </View>
                            </View>
                        )
                })
            }




            {/* {codeWithHints.map((val, index) => (
                <View style={styles.codeSubContainer} key={index.toString()}>
                    <View style={styles.frameContainer}>
                        {[0, 0, 0, 0].map((val, index) => (
                            <TouchableOpacity activeOpacity={.8} style={{ flex: 1 }} key={index.toString()} >
                                <ImageBackground
                                    source={require('../../../assets/numberFrame.png')}
                                    resizeMode="contain"
                                    style={[styles.frameIcon, { height: '100%', }]} >
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
            ))} */}
        </View>

    )
}

export const DropDown = ({ setselectedLanguage, setIsDropDownOpen, isDropDownOpen }) => {


    const setLanguageAsync = async (lang) => {
        await setItem('languagecode', lang)
    }

    const onLanguageSelect = (langId) => {
        let lang = appLanguages.find((item) => item.id === langId)
        console.log(lang?.code, 'lang?.codelang?.code', appLanguages)
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
                            // console.log(item, 'itemitemitem')
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