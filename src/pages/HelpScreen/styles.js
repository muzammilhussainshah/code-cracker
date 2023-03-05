import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.black, },

    bgImageStyle: { height: "100%", width: '100%', paddingTop: RFPercentage(7), },

    intro: { fontSize: RFPercentage(2.5), textAlign: 'justify', fontWeight: 'bold', color: Colors.white, flex: 1, textAlign: "center" },

    score: { fontSize: RFPercentage(2.5), textAlign: 'justify', fontWeight: '600', color: Colors.secondary, fontStyle: "italic", margin: RFPercentage(4), },

    headerContainer: { flexDirection: 'row', alignItems: 'center', marginHorizontal: RFPercentage(2), },
});