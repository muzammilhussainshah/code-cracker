
import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../../styles/Colors';

import { styles } from '../styles';

export const Header = () => {
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
                            <Text style={styles.score}>{`YOUR SCORE`}</Text>
                            <Text style={styles.score}>{`24240`}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={.8}
                    style={styles.languageContainer}>
                    <ImageBackground
                        source={require('../../../assets/lang2.png')}
                        style={styles.enContainer} >
                        <Text style={styles.language}>{`EN`}</Text>
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
export const CodeAnwer = () => {
    return (
        <View style={styles.codeAnswerContainer}>
            <View style={styles.answerFrameContainer}>
                {[3, 4, 9, 7, 4].map((item) => (
                    <View style={styles.codeAnswerSubContainer}>
                        <AntDesign
                            name='caretup'
                            size={RFPercentage(3)}
                            color={Colors.secondary} />
                        <ImageBackground
                            source={require('../../../assets/numberFrame.png')}
                            style={styles.frameIcon} >
                            <Text style={[styles.score, { fontSize: RFPercentage(2.6) }]}>{item}</Text>
                        </ImageBackground>
                        <AntDesign
                            name='caretdown'
                            size={RFPercentage(3)}
                            color={Colors.secondary} />
                    </View>
                ))}

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
            {[0, 0, 0, 0].map(() => (
                <View style={styles.codeSubContainer}>
                    <View style={styles.frameContainer}>
                        {[0, 0, 0, 0].map(() => (
                            <TouchableOpacity activeOpacity={.8} style={{ flex: 1 }}>
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