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
                dispatch(getCode(newUserData.level))


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

            let levelRange;
            if (level >= 0 && level <= 3) levelRange = '0-3'
            else if (level >= 4 && level <= 10) levelRange = '4-10'
            else if (level >= 11 && level <= 30) levelRange = '11-30'
            else if (level >= 31 && level <= 60) levelRange = '31-60'
            else if (level >= 61 && level <= 100) levelRange = '61-100'
            else if (level > 100) levelRange = '100+'


            const userDocRef = firestore().collection('CodeLevels').doc(levelRange);
            const userDocSnapshot = await userDocRef.get();

            if (userDocSnapshot.exists) {
                const codesWithHints = userDocSnapshot.data();
                dispatch({ type: ActionTypes.CODEWITHHINTS, payload: codesWithHints.codesWithHints });

                // console.log('getCode data:', codesWithHints.codesWithHints);
            } else {
                console.log('Code not found so creating new one', deviceId);
                dispatch(createCode(level))


            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
}








export const createCode = (level) => {
    return async (dispatch) => {

        try {

            // let obj = [
            //     {guessCode: [2,7]},
            //     {'Nothing correct': [3,1]},
            //     {'1 number correct but incorrectly placed': [7,4]},
            //     {'1 number correct but incorrectly placed': [7,6]},
            //     {'1 number correct and well placed': [1,7]},
            // ]
            let NCstr = 'Nothing correct';
            let oneCWstr = '1 number correct and well placed';
            let twoCWstr = '2 number correct and well placed';
            let oneCIstr = '1 number correct but incorrectly placed';
            let oneCIstrDot = '1 number correct but incorrectly placed.';
            let twoCIstr = '2 number correct but incorrectly placed';
            let codesWithHints = [];

            if (level >= 0 && level <= 3) {
                console.log(`${level} is between 2 and 5`);

                for (let index = 0; index < 10; index++) {
                    // guess code
                    let guessCode = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
                    // guess code
                    // NC
                    const NC = getNC(guessCode);
                    // NC
                    // oneCI
                    const oneCI = getoneCI(guessCode);
                    // oneCI
                    // oneCI
                    const oneCIClone = getoneCI(guessCode);
                    // oneCI
                    // oneCI
                    const oneCW = getoneCW(guessCode);
                    // oneCI


                    codesWithHints.push({
                        guessCode: guessCode,
                        [NCstr]: NC,
                        [oneCIstr]: oneCI,
                        [oneCIstrDot]: oneCIClone,
                        [oneCWstr]: oneCW
                    })
                }

                // console.log(codesWithHints, 'codesWithHintscodesWithHints')
                const userDocRef = firestore().collection('CodeLevels').doc('0-3');
                userDocRef.set({
                    codesWithHints: codesWithHints
                })

                dispatch({ type: ActionTypes.CODEWITHHINTS, payload: codesWithHints });






            } else {
                console.log(`${level} is not between 2 and 5`);
            }


        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
}


const getNC = (guessCode) => {
    let NC = [];
    while (NC.length < guessCode.length) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!guessCode.includes(randomNumber) && !NC.includes(randomNumber)) {
            NC.push(randomNumber);
        }
    }
    return NC
}

const getoneCI = (guessCode) => {
    let oneCI = [];
    while (oneCI.length < guessCode.length) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!guessCode.includes(randomNumber) && !oneCI.includes(randomNumber)) {
            oneCI.push(randomNumber);
        }
    }
    var arr = [];
    while (arr.length < guessCode.length) {
        var r = Math.floor(Math.random() * guessCode.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    oneCI.splice(arr[0], 1, guessCode[arr[1]])
    return oneCI
}



const getoneCW = (guessCode) => {
    let oneCW = [];
    const randomIndex = Math.floor(Math.random() * guessCode.length); // choose a random index in A
    for (let i = 0; i < guessCode.length; i++) {
        if (i === randomIndex) {
            oneCW.push(guessCode[randomIndex]); // push the random index value of A into B
        } else {
            let num = Math.floor(Math.random() * 10); // generate a random number between 1 and 10
            while (guessCode.includes(num) || oneCW.includes(num)) { // check if the number is already in A or B
                num = Math.floor(Math.random() * 10); // if so, generate a new random number
            }
            oneCW.push(num); // push the unique number into B
        }
    }
    return oneCW
}