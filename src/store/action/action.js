// import ActionTypes from '../constant/constant';

import axios from "axios";
import ActionTypes from "../constant/constant";

import DeviceInfo from 'react-native-device-info';

import firestore from '@react-native-firebase/firestore';

export const getUser = (date) => {
    return async (dispatch) => {
        // w6nGp47IlLsO9htyYf2q
        const deviceId = DeviceInfo.getUniqueId();
        try {
            const userDocRef = firestore().collection('Users').doc(deviceId);
            const userDocSnapshot = await userDocRef.get();

            if (userDocSnapshot.exists) {
                const userData = userDocSnapshot.data();
                dispatch({ type: ActionTypes.CURRENTUSER, payload: userData });
                dispatch(getCode(userData.level))
                console.log('User data:', userData);
            } else {
                console.log('User not found so creating new one', deviceId);
                let newUserData = {
                    score: '0',
                    remainingRefresh: '5',
                    level: '1'
                }
                userDocRef.set(newUserData)
                dispatch({ type: ActionTypes.CURRENTUSER, payload: newUserData });

            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
} 



export const getCode = (level) => {
    return async (dispatch) => {
        // w6nGp47IlLsO9htyYf2q
        const deviceId = DeviceInfo.getUniqueId();
        try {
            const userDocRef = firestore().collection('CodeLevels').doc(level);
            const userDocSnapshot = await userDocRef.get();

            if (userDocSnapshot.exists) {
                const userData = userDocSnapshot.data();
                // dispatch({ type: ActionTypes.CURRENTUSER, payload: userData });

                console.log('User data:', userData);
            } else {
                console.log('Code not found so creating new one', deviceId);
                dispatch(createCode(0))
              

            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
} 


export const createCode = (level) => {
    return async (dispatch) => {
        try {
          
            if (level >= 0 && level <= 3) {
                console.log(`${level} is between 2 and 5`);
              } else {
                console.log(`${level} is not between 2 and 5`);
              }


        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
} 