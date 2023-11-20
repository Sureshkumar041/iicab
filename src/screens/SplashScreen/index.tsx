import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation:any = useNavigation();

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
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/iDepoLogoPNG.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
