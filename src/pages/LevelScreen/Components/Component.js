import { Share } from "react-native";
import Rate, { AndroidMarket } from 'react-native-rate'

export const onShare = async () => {
    try {
        const result = await Share.share({
            message:
                'Would you like to share Code Finder ',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        Alert.alert(error.message);
    }
};


export const rateUs = () => {
    const options = {
        AppleAppID:"2193813192",
        GooglePackageName:"com.codefinder",
        AmazonPackageName:"com.codefinder",
        OtherAndroidURL:"http://www.randomappstore.com/app/47172391",
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp:false,
        openAppStoreIfInAppFails:true,
        fallbackPlatformURL:"http://www.mywebsite.com/myapp.html",
      }
    // const options = {
    //     AppleAppID: "2193813192",
    //     GooglePackageName: "com.codefinder",
    //     OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
    //     preferredAndroidMarket: AndroidMarket.Google,
    //     preferInApp: true,
    //     openAppStoreIfInAppFails: true,
    //     fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
    // }
    
    Rate.rate(options, (success, errorMessage) => {
        if (success) {
            console.log(success,'successsuccesssuccess', errorMessage)
        }
        if (errorMessage) {
            // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
            console.error(`Example page Rate.rate() error: ${errorMessage}`)
        }
    })
}