import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IText from '../../components/atoms/Text';
import IButton from '../../components/atoms/Button';
import ITextInput from '../../components/atoms/TextInput';
import {height} from '../../common/constant';
import {useNavigation} from '@react-navigation/native';
import {IIC_ASH, IIC_BLUE} from '../../common/colors';
import Gif from 'react-native-gif';

const PasswordVerifiedScreen = () => {
  const navigation: any = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={{
        padding: 12,
        flex: 1,
        backgroundColor: '#fff',
        height: height,
      }}>
      <StatusBar />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/verifyTick.png')}
          style={styles.image}
        />
        <IText textType="bold" textStyle={styles.forgotTitle}>
          Password Changed !
        </IText>
        <IText textType="regular" textStyle={styles.instruction}>
          Your password has been Changed Successfully
        </IText>

        <IButton
          title="Back to Login"
          style={[styles.sendButton]}
          onPress={() => navigation.push('LoginScreen')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    // height: height,
  },
  goBack: {
    color: IIC_BLUE,
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },

  image: {
    width: 180,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 150,
  },
  forgotTitle: {
    fontSize: 28,
    paddingTop: 40,
    // paddingBottom: 10,
    alignSelf: 'center',
    color: IIC_BLUE,
    fontWeight: '600',
  },
  input: {
    marginVertical: 10,
  },
  // sendButton: {
  //   padding: 15,
  //   borderRadius: 30,
  //   width: '100%',
  //   alignItems: 'center',
  //   // marginVertical: 40,
  // },
  sendButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: IIC_BLUE,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  instruction: {
    paddingVertical: 10,
    color: IIC_ASH,
    fontSize: 16,
    alignSelf: 'center',
    paddingBottom: 40,
  },
});

export default PasswordVerifiedScreen;
