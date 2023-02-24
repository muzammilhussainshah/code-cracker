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


const Splash = ({ }) => {
  const currentUser = useSelector((state) => state.root.currentUser);

  const dispatch = useDispatch()
  
  useEffect( () => {
    dispatch(getUser())
  }, []);
  useEffect( () => {
    console.log(currentUser,'currentUser')
  }, [currentUser]);


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
