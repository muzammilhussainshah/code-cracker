import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    bgImageStyle: {
        height: "100%", width: '100%', paddingTop: RFPercentage(7),
    },
    headerContainer: { flex: 2, marginHorizontal: RFPercentage(1) },
    headerSubContainer: { flex: 1, flexDirection: 'row' },
    refreshIconContainer: { flex: 1.5, },
    refreshIcon: {
        height: '100%', width: "100%",
        resizeMode: 'contain'
    },
    scoreContainer: { flex: 7, justifyContent: "center", alignItems: 'center' },
    scoreBorderContainer: { height: '70%', width: '80%', borderRadius: RFPercentage(1), borderWidth: 1, borderColor: Colors.primary, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    languageContainer: { flex: 1.5, },
    helpContainer: { flex: 1, justifyContent: 'center', alignItems: "flex-end" },
    msgContainer: { flex: 1, justifyContent: 'center', alignItems: "center" },
    codeAnswerContainer: { flex: 4, marginHorizontal: RFPercentage(1) },
    codeContainer: { flex: 4, marginHorizontal: RFPercentage(1) },
    language: {
        fontSize: RFPercentage(2.),
        top: "20%",
        left: '25%',
        fontWeight: '600', color: Colors.secondary, fontStyle: "italic"
    },
    score: { fontSize: RFPercentage(1.7), fontWeight: 'bold', color: Colors.secondary, fontStyle: "italic" },
    codeAnswerSubContainer: {
        width: RFPercentage(7),
        justifyContent: "center",
        alignItems: "center"
    },
    frameIcon: { height: RFPercentage(8), width: '100%', resizeMode: 'contain', justifyContent: "center", alignItems: 'center' },
    whatIsCode: {
        height: '80%', width: '80%', resizeMode: 'contain',

        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        // elevation: 9,

    },
    help: { fontSize: RFPercentage(2.), fontWeight: '600', color: Colors.black, fontStyle: "italic" },
    helpSubContainer: {
        height: '90%', backgroundColor: Colors.secondary, width: RFPercentage(6), borderRadius: RFPercentage(1),
        justifyContent: "center", alignItems: 'center'
    },
    enContainer: {
        height: '95%', width: '95%', resizeMode: 'contain',
    },

    scoreSubContainer: {
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
        // elevation: 9,
    },
    wrongCode: { height: RFPercentage(20), top: '28%', width: '100%', },
    wrongCodeContainer: {
        position: 'absolute', zIndex: 2, height: "100%",
        paddingBottom: RFPercentage(7),
        width: '100%', backgroundColor: 'rgba(0,0,0,0.6)'
    },
    hint: {
        height: '100%', width: '100%', marginLeft: '2%'
        , opacity: .8
        , resizeMode: 'contain'
    },
    codeSubContainer: { flex: 1, borderWidth: 1, marginVertical: RFPercentage(.5), flexDirection: 'row', borderColor: Colors.primary },
    frameContainer: { flex: 1, flexDirection: 'row' },


    codeFrame: {
        height: '100%', width: '100%', resizeMode: 'stretch',
        justifyContent: "center",
        alignItems: 'center'
    },
    resultMsg: { textAlign: 'center', letterSpacing: RFPercentage(-.15), width: '80%', fontSize: RFPercentage(1.3) },
    check: { height: '80%', width: '80%', resizeMode: 'contain' },
    resultMsgContainer: { flex: 1, backgroundColor: Colors.black },
    answerFrameContainer: { flex: 6, justifyContent: "center", flexDirection: 'row' },
    checkBtn: { flex: 2, justifyContent: "center", alignItems: "center" },
    dropDownVal: { color: Colors.secondary, fontWeight: "bold", fontStyle: 'italic' ,textTransform:"uppercase"},
    dropDownContainer: {
        borderColor: Colors.primary,
        backgroundColor: Colors.black,
        borderWidth: 2, justifyContent: 'center', alignItems: 'center',
        height: RFPercentage(5)
    },
    dropDown: {
        position: 'absolute', zIndex: 2,
        height: RFPercentage(10),
        top: '13%',
        right: '4.5%',
        width: RFPercentage(5)
    },
});