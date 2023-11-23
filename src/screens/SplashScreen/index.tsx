import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Easing,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TruckImage from '../../assets/images/truck1.jpg';
import {height} from '../../common/constant';
import IText from '../../components/atoms/Text';
import {PLACEHOLDER, WHITE} from '../../common/colors';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation: any = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('LoginScreen');
      });
    });

    // Clean up the subscription when the component is unmounted
    return () => unsubscribe();
  }, [fadeAnim, navigation]);

  return (
    <ImageBackground
      source={TruckImage}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <View style={styles.container}>
        {/* <Animated.Image
          source={require('../../assets/images/iDepoLogoPNG.png')}
          style={[styles.logo, {opacity: fadeAnim}]}
        /> */}
        <View>
          <IText textStyle={{color: WHITE, fontSize: 24, lineHeight: 24}}>
            Welcome
          </IText>
          <IText textStyle={{color: PLACEHOLDER}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </IText>
        </View>
        <View>
          <IText
            textType="bold"
            textStyle={{color: WHITE, fontSize: 30, lineHeight: 28}}>
            Appointment Booking
          </IText>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0,0.5)',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
