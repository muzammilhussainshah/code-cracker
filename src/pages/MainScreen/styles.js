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
        // paddingHorizontal:RFPercentage(1),
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
    helpContainer: { flex: 1,  justifyContent:'center',alignItems:"flex-end"},
    msgContainer: { flex: 1,   },
    codeAnswerContainer: { flex: 4,   marginHorizontal: RFPercentage(1) },
    codeContainer: { flex: 4, backgroundColor: 'red', marginHorizontal: RFPercentage(1) },
    language: {
        fontSize: RFPercentage(2.),
        top: "20%",
        left: '25%',
        fontWeight: '600', color: Colors.secondary, fontStyle: "italic"
    },
    score: { fontSize: RFPercentage(1.7), fontWeight: 'bold', color: Colors.secondary, fontStyle: "italic" }
});