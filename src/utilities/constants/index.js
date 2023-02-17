import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

export const paginationLimit = 10;
export const DEFAULT_LANGUAGE = 'en';
export const version = DeviceInfo.getVersion();
export const systemVersion = DeviceInfo.getSystemVersion();
export const platform = Platform.OS;
export const deviceUId = DeviceInfo.getUniqueId();
export const deviceType = DeviceInfo.getDeviceType();
export const hasNotch = DeviceInfo.hasNotch();
export  const bucketRestoPic = "https://s3-ap-southeast-1.amazonaws.com/bistrochat-restaurant-pictures/";
export const bucketRestoMenuPic = "https://s3-ap-southeast-1.amazonaws.com/dev-bistrochat-restaurant-menu/";
export const bucketPulsePic = "https://s3-ap-southeast-1.amazonaws.com/dev-bistrochat-pulse-pictures/";
export const googleAPIKey = "AIzaSyA7wSc5ta45wpDj7ehWCxWalxXjzx8Twso";


// export const DEFAULT_LANGUAGE = "cn";
