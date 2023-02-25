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


const Splash = ({ navigation}) => {
  const currentUser = useSelector((state) => state.root.currentUser);
  const codeWithHints = useSelector((state) => state.root.codeWithHints);

  const dispatch = useDispatch()
  
  useEffect( () => {
    dispatch(getUser(navigation))
  }, []);
  // useEffect( () => {
  //   console.log(codeWithHints,'codeWithHintscodeWithHintscodeWithHintscodeWithHints')
  // }, [codeWithHints]);
  useEffect( () => {
    console.log(currentUser,'currentUser',codeWithHints,navigation)
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
