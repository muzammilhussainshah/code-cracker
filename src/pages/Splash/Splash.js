// @app
import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from './styles';
import Loader from '../../components/Loader';
import { getUser } from '../../store/action/action';
import {
  useDispatch,useSelector
} from 'react-redux';
import remoteConfig from '@react-native-firebase/remote-config';


const Splash = ({ navigation}) => {
  const currentUser = useSelector((state) => state.root.currentUser);
  const codeWithHints = useSelector((state) => state.root.codeWithHints);

  const dispatch = useDispatch()
  
  useEffect( async() => {
    dispatch(getUser(navigation))
//     await remoteConfig().fetchAndActivate();

//     remoteConfig().setConfigSettings({
//       minimumFetchIntervalMillis: 0, // Cache the values for 1 hour
//     });
    

//     const remainingRefresh = remoteConfig().getValue('remainingRefresh').asString();
//     const remainingWrongAttempt = remoteConfig().getValue('remainingWrongAttempt').asString();
// alert(remainingRefresh)
// alert(remainingWrongAttempt)

  }, []);
  // useEffect( () => {
  //   console.log(codeWithHints,'codeWithHintscodeWithHintscodeWithHintscodeWithHints')
  // }, [codeWithHints]);
  useEffect( () => {
    console.log(currentUser,codeWithHints,'codeWithHintscodeWithHintscodeWithHintscodeWithHints')
  }, [currentUser,codeWithHints]);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={styles.bgImageStyle}>
        <Loader />
        <Text
          style={styles.next}
        >{`CODE CRACKER`}</Text>
      </ImageBackground >

    </View >
  );
};
export default Splash;
