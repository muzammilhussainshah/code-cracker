import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },

    bgImageStyle: {
        height: "100%", width: '100%', justifyContent: "center", alignItems: "center"
    },
    nextContainer: { alignItems: "center" },
    next: { fontSize: RFPercentage(3), fontWeight: 'bold', color: Colors.white, fontStyle: "italic", fontWeight: 'bold', },
    starIcon: {
        height: RFPercentage(10),
        width: RFPercentage(10),
        resizeMode: 'contain'
    },
    rateIcon: {
        height: RFPercentage(9),
        width: RFPercentage(9),
        resizeMode: 'contain'
    },
    buttonContainer: { flexDirection: 'row', flex: 4, width: '100%', justifyContent: "space-evenly" },
    elevation: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }
});