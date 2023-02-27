import ActionTypes from "../constant/constant";
import DeviceInfo from 'react-native-device-info';
import firestore from '@react-native-firebase/firestore';
import remoteConfig from '@react-native-firebase/remote-config';

const deviceId = DeviceInfo.getUniqueId();









export const getUser = (navigation) => {
    return async (dispatch) => {

        await remoteConfig().fetchAndActivate(); //remote config for remainingRefresh,remainingWrongAttempt
        remoteConfig().setConfigSettings({
            minimumFetchIntervalMillis: 0,
        });
        const remainingRefresh = remoteConfig().getValue('remainingRefresh').asString();
        const remainingWrongAttempt = remoteConfig().getValue('remainingWrongAttempt').asString();

        try {
            const userDocRef = firestore().collection('Users').doc(deviceId);
            const userDocSnapshot = await userDocRef.get();

            if (userDocSnapshot.exists) {
                const userData = userDocSnapshot.data();
                dispatch({ type: ActionTypes.CURRENTUSER, payload: userData });
                dispatch(getCode(userData.level, navigation))
                // console.log('User data:', userData);
            } else {
                // console.log('User not found so creating new one', deviceId);
                let newUserData = {
                    score: '0',
                    remainingRefresh: remainingRefresh,
                    level: '0',
                    remainingWrongAttempt: remainingWrongAttempt,
                }
                userDocRef.set(newUserData)
                dispatch({ type: ActionTypes.CURRENTUSER, payload: newUserData });
                dispatch(getCode(newUserData.level, navigation))
            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
}



export const getCode = (level, navigation) => {
    return async (dispatch) => {
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
                navigation.navigate('MainScreen')
            } else {
                dispatch(createCode(level, navigation))
            }
        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
}








export const createCode = (level, navigation) => {
    return async (dispatch) => {
        try {
            let NCstr = 'Nothing correct';
            let oneCWstr = '1 number correct and well placed';
            let oneCWstrDot = '1 number correct and well placed.';
            let twoCWstr = '2 number correct and well placed';
            let oneCIstr = '1 number correct but incorrectly placed';
            let oneCIstrDot = '1 number correct but incorrectly placed.';
            let oneCIstrDotCo = '1 number correct but incorrectly placed.,';
            let twoCIstr = '2 number correct but incorrectly placed';
            let twoCIstrDot = '2 number correct but incorrectly placed.';
            let codesWithHints = [];
            let levelRange;

            if (level >= 0 && level <= 3) {
                levelRange = '0-3';
                for (let index = 0; index < 10; index++) {
                    let guessCode = getGuessCode(2); // guess code 2 digit
                    const NC = getNC(guessCode);// nothing correct
                    const oneCI = getoneCI(guessCode);// one correct but incorrectly placed
                    const oneCIClone = getoneCI(guessCode);// one correct but incorrectly placed with .
                    const oneCW = getoneCW(guessCode);// one correct and well placed
                    codesWithHints.push({
                        guessCode: guessCode,
                        [NCstr]: NC,
                        [oneCIstr]: oneCI,
                        [oneCIstrDot]: oneCIClone,
                        [oneCWstr]: oneCW
                    })
                }
            }

            else if (level >= 4 && level <= 10) {
                levelRange = '4-10';
                for (let index = 0; index < 10; index++) {
                    // guess code 3 digit
                    let guessCode = getGuessCode(3); // guess code 3 digit
                    const NC = getNC(guessCode);  // nothing correct
                    const oneCI = getoneCI(guessCode);   // one correct but incorrectly placed
                    const twoCI = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const oneCW = getoneCW(guessCode);    // one correct and well placed
                    codesWithHints.push({
                        guessCode: guessCode,
                        [NCstr]: NC,
                        [oneCIstr]: oneCI,
                        [twoCIstr]: twoCI,
                        [oneCWstr]: oneCW
                    })
                }

            }
            else if (level >= 11 && level <= 30) {
                levelRange = '11-30';
                for (let index = 0; index < 10; index++) {
                    let guessCode = getGuessCode(4); // guess code 4 digit

                    const NC = getNC(guessCode);  // nothing correct
                    const twoCI = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const twoCIClone = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const oneCW = getoneCW(guessCode);    // one correct and well placed
                    codesWithHints.push({
                        guessCode: guessCode,
                        [NCstr]: NC,
                        [twoCIstr]: twoCI,
                        [twoCIstrDot]: twoCIClone,
                        [oneCWstr]: oneCW
                    })
                }
            }
            else if (level >= 31 && level <= 60) {
                levelRange = '31-60';
                for (let index = 0; index < 10; index++) {
                    let guessCode = getGuessCode(5); // guess code 5 digit

                    const NC = getNC(guessCode);  // nothing correct
                    const twoCI = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const twoCIClone = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const oneCW = getoneCW(guessCode);    // one correct and well placed
                    const oneCWClone = getoneCW(guessCode);    // one correct and well placed
                    const twoCW = gettwoCW(guessCode);    // one correct and well placed
                    codesWithHints.push({
                        guessCode: guessCode,
                        [twoCIstr]: twoCI,
                        [twoCIstrDot]: twoCIClone,
                        [NCstr]: NC,
                        [oneCWstr]: oneCW,
                        [oneCWstrDot]: oneCWClone,
                        [twoCWstr]: twoCW,
                    })
                }
            }
            else if (level >= 61 && level <= 100) {
                levelRange = '61-100';
                for (let index = 0; index < 10; index++) {
                    let guessCode = getGuessCode(5); // guess code 5 digit

                    const oneCI = getoneCI(guessCode);   // one correct but incorrectly placed
                    const oneCIClone = getoneCI(guessCode);// one correct but incorrectly placed with .
                    const oneCICloneDC = getoneCI(guessCode);// one correct but incorrectly placed with .
                    const twoCI = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const NC = getNC(guessCode);  // nothing correct
                    const oneCW = getoneCW(guessCode);    // one correct and well placed
                    const oneCWClone = getoneCW(guessCode);    // one correct and well placed

                    codesWithHints.push({
                        guessCode: guessCode,
                        [oneCIstr]: oneCI,
                        [oneCIstrDot]: oneCIClone,
                        [oneCIstrDotCo]: oneCICloneDC,
                        [twoCIstr]: twoCI,
                        [NCstr]: NC,
                        [oneCWstr]: oneCW,
                        [oneCWstrDot]: oneCWClone,
                    })
                }
            }
            else if (level >= 101) {
                levelRange = '101+';
                for (let index = 0; index < 10; index++) {
                    let guessCode = getGuessCode(5); // guess code 5 digit

                    const oneCI = getoneCI(guessCode);   // one correct but incorrectly placed
                    const oneCIClone = getoneCI(guessCode);// one correct but incorrectly placed with .
                    const oneCICloneDC = getoneCI(guessCode);// one correct but incorrectly placed with .
                    const twoCI = getTwoCI(guessCode);   // two correct but incorrectly placed
                    const oneCW = getoneCW(guessCode);    // one correct and well placed
                    const oneCWClone = getoneCW(guessCode);    // one correct and well placed

                    codesWithHints.push({
                        guessCode: guessCode,
                        [oneCIstr]: oneCI,
                        [oneCIstrDot]: oneCIClone,
                        [oneCIstrDotCo]: oneCICloneDC,
                        [twoCIstr]: twoCI,
                        [oneCWstr]: oneCW,
                        [oneCWstrDot]: oneCWClone,
                    })
                }
            }
            else {
            }
            const userDocRef = firestore().collection('CodeLevels').doc(levelRange);


            const userDocSnapshot = await userDocRef.get();

            if (userDocSnapshot.exists) {
                userDocRef.set({
                    codesWithHints: codesWithHints.concat(userDocSnapshot.data().codesWithHints)
                })
            } else {
                userDocRef.set({
                    codesWithHints: codesWithHints
                })
            }

            dispatch({ type: ActionTypes.CODEWITHHINTS, payload: codesWithHints });
            navigation.navigate('MainScreen')

        } catch (error) {
            console.error('Error getting user data:', error);
        }
    }
}


const getGuessCode = (codeLength) => {
    const GC = [];
    while (GC.length < codeLength) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (!GC.includes(randomNumber)) {
            GC.push(randomNumber);
        }
    }
    return GC
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

const getTwoCI = (guessCode) => {
    let twoCI = [];

    let a = [1, 7, 3];
    let b = [];
    while (twoCI.length < guessCode.length) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!guessCode.includes(randomNumber) && !twoCI.includes(randomNumber)) {
            twoCI.push(randomNumber);
        }
    }
    var arr = [];
    while (arr.length < guessCode.length) {
        var r = Math.floor(Math.random() * guessCode.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    twoCI.splice(arr[0], 1, guessCode[arr[1]])
    twoCI.splice(arr[1], 1, guessCode[arr[2]])

    console.log(twoCI);// one digit correct but wrongly placed






    return twoCI
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

const gettwoCW = (guessCode) => {
    let twoCW = [];
    var arr = [];
    while (arr.length < guessCode.length) {
        var r = Math.floor(Math.random() * guessCode.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    for (let i = 0; i < guessCode.length; i++) {
        if (i === arr[0]) {
            twoCW.push(guessCode[arr[0]]); // push the random index value of A into B
        }
        else if (i === arr[1]) {
            twoCW.push(guessCode[arr[1]]); // push the random index value of A into B
        }
        else {
            let num = Math.floor(Math.random() * 10); // generate a random number between 1 and 10
            while (guessCode.includes(num) || twoCW.includes(num)) { // check if the number is already in A or B
                num = Math.floor(Math.random() * 10); // if so, generate a new random number
            }
            twoCW.push(num); // push the unique number into B
        }
    }
    return twoCW
}

export const correctAnswer = (navigation, currentUser) => {
    return async (dispatch) => {

        await remoteConfig().fetchAndActivate(); //remote config for remainingRefresh,remainingWrongAttempt
        remoteConfig().setConfigSettings({
            minimumFetchIntervalMillis: 0,
        });
        const remainingRefresh = remoteConfig().getValue('remainingRefresh').asString();
        const remainingWrongAttempt = remoteConfig().getValue('remainingWrongAttempt').asString();


        try {
            const userDocRef = firestore().collection('Users').doc(deviceId);

            let currentUserUpdate = currentUser;
            currentUserUpdate.level = currentUser.level + 1;
            currentUserUpdate.score = currentUser.score + 1;
            currentUserUpdate.remainingRefresh = remainingRefresh;
            currentUserUpdate.remainingWrongAttempt = remainingWrongAttempt



            
            await userDocRef.update(currentUserUpdate);
            // await userDocRef.update({ level: firestore.FieldValue.increment(1) });
            // await userDocRef.update({ level: firestore.FieldValue.increment(1) });
            await dispatch(getCode(currentUser.level + 1, navigation));
            navigation.navigate('LevelScreen')
           

            dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUpdate });


            console.log('Score incremented in Firestore document.');
        } catch (error) {
            console.error('Error incrementing score in Firestore document: ', error);
        }
    }
}

