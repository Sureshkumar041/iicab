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
        <IText textType="bold" textStyle={styles.forgotTitle}>
          Forgot Password
        </IText>

        <Image
          source={require('../../assets/Gif/verified.gif')}
          style={styles.image}
        />
        <IText textType="regular" textStyle={styles.instruction}>
          Enter your login name and we'll send you a link for reset password to
          your registered email
        </IText>

        <ITextInput
          containerStyle={styles.input}
          label={'Login Name'}
          placeholder="Please enter username"
        />

        <IButton
          title="Reset Password"
          style={[styles.sendButton]}
          onPress={() => navigation.push('ResetPasswordScreen')}
        />
        <TouchableOpacity onPress={handleBackPress}>
          <IText textType="regular" textStyle={styles.goBack}>
            Back to Login
          </IText>
        </TouchableOpacity>
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
    width: 150,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  forgotTitle: {
    fontSize: 18,
    paddingVertical: 50,
    paddingBottom: 30,
    alignSelf: 'center',
    color: IIC_BLUE,
    fontWeight: '600',
  },
  input: {
    marginVertical: 10,
  },
  sendButton: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  instruction: {
    paddingVertical: 20,
    color: IIC_ASH,
    fontSize: 14
  },
});

export default PasswordVerifiedScreen;
