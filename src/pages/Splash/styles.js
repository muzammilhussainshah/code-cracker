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
    next: { fontSize: RFPercentage(3), fontWeight: 'bold', color: Colors.white, fontStyle: "italic", fontWeight: 'bold' },
 
});